import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import * as S from './style';
import Loading from '../../components/commons/Loading';
import ChatList from '../../components/chats/ChatList';
import { AREA } from '../../constants/commons/menus';
import uuid from 'react-uuid';
import { tokenAtom } from '../../atoms/atoms';
import { useAtom } from 'jotai';
import { useGetDoctorListQuery } from '../../hooks/query/useGetDoctorListQuery';

const ChatsPage = () => {
  const [areaName, setAreaName] = useState('');
  const [search, setSearch] = useState('');
  const [userToken] = useAtom(tokenAtom);

  const { data: doctorList, refetch } = useGetDoctorListQuery(areaName, search);

  useEffect(() => {
    refetch();
  }, [areaName]);

  const handleClickArea = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const { name } = target.dataset;
    setAreaName(name || '');
    setSearch('');
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    refetch();
    setSearch('');
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.AreaBox>
          <S.AreaList>
            {AREA.map(area => (
              <li
                key={uuid()}
                data-name={area}
                className={areaName === area ? 'selected' : ''}
                onClick={handleClickArea}
              >
                {area === 'Seoul'
                  ? '서울'
                  : area === 'Gyeonggi'
                  ? '경기도'
                  : area === 'Incheon'
                  ? '인천'
                  : area === 'Daejeon'
                  ? '대전'
                  : area === 'Daegu'
                  ? '대구'
                  : area === 'Gwangju'
                  ? '광주'
                  : area === 'Ulsan'
                  ? '울산'
                  : area === 'Busan'
                  ? '부산'
                  : area === 'Gangwon'
                  ? '강원도'
                  : area === 'Chungcheong'
                  ? '충청도'
                  : area === 'Jeolla'
                  ? '전라도'
                  : area === 'Gyeongsang'
                  ? '경상도'
                  : area === 'Jeju'
                  ? '제주도'
                  : '전체'}
              </li>
            ))}
          </S.AreaList>
        </S.AreaBox>
        <S.SearchBox>
          <S.SearchForm>
            <S.SearchInput
              placeholder="수의사명 또는 병원명을 입력해주세요."
              onChange={handleChangeSearch}
              value={search}
            />
            <S.SearchImgBtn type="submit" onClick={handleSearch}>
              <img src="/images/commons/search.png" alt="검색 아이콘 이미지" />
            </S.SearchImgBtn>
          </S.SearchForm>
        </S.SearchBox>
        <S.ChatListContainer>
          <S.ChatLists>
            {doctorList?.data?.data.length > 0 ? (
              doctorList?.data?.data?.map((doctor: any) => (
                <ChatList
                  key={doctor?.id}
                  userToken={userToken}
                  name={doctor?.name}
                  hospitalName={doctor?.hospital_name}
                  profileImg={doctor?.img_path}
                  doctorEmail={doctor?.user_email}
                  grade={doctor?.grade}
                />
              ))
            ) : (
              <S.ErrorMent>해당 조건에 맞는 수의사가 없습니다.</S.ErrorMent>
            )}
          </S.ChatLists>
        </S.ChatListContainer>
        <Loading />
      </S.Container>
    </S.Wrap>
  );
};

export default ChatsPage;
