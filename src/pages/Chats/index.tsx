import React, { ChangeEvent, MouseEvent, useState } from 'react';
import * as S from './style';
import Loading from '../../components/commons/Loading';
import ChatList from '../../components/chats/ChatList';
import { AREA } from '../../constants/commons/menus';
import { tokenAtom } from '../../atoms/atoms';
import InfiniteScroll from 'react-infinite-scroller';
import useDebounce from '../../hooks/util/useDebounce';
import { useAtomValue } from 'jotai';
import { useChatListInfinityQuery } from '../../hooks/query/useChatListInfinityQuery';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';

const ChatsPage = () => {
  const auth = useAtomValue(tokenAtom);
  const { data: userData } = useGetUsersQuery();

  const [areaName, setAreaName] = useState('');
  const [search, setSearch] = useState('');

  const debounceSearchValue = useDebounce(search, 500);

  const {
    data: doctorList,
    fetchNextPage,
    hasNextPage
  } = useChatListInfinityQuery(areaName, debounceSearchValue);

  const handleClickArea = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const { name } = target.dataset;
    setAreaName(name || '');
    setSearch('');
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.AreaBox>
          <S.AreaList>
            {AREA.map((area, index) => (
              <li
                key={area + index}
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
          </S.SearchForm>
        </S.SearchBox>
        <S.ChatListContainer>
          <S.ChatLists>
            <InfiniteScroll
              hasMore={hasNextPage}
              loadMore={() => fetchNextPage()}
              loader={<Loading />}
            >
              {doctorList?.pages?.[0]?.totalPages !== 0 ? (
                doctorList?.pages.map(page =>
                  page?.data.map((doctor: any) => (
                    <ChatList
                      key={doctor?.id}
                      userToken={auth}
                      name={doctor?.name}
                      hospitalName={doctor?.hospital_name}
                      profileImg={doctor?.img_path}
                      doctorEmail={doctor?.user_email}
                      grade={doctor?.grade}
                      role={userData?.user?.role}
                    />
                  ))
                )
              ) : (
                <S.ErrorMent>해당 조건에 맞는 수의사가 없습니다.</S.ErrorMent>
              )}
            </InfiniteScroll>
          </S.ChatLists>
        </S.ChatListContainer>
      </S.Container>
    </S.Wrap>
  );
};

export default ChatsPage;
