import React, { MouseEvent, useState } from 'react';
import * as S from './style';
import ProfileImg from '../../components/commons/ProfileImg';
import { Rating } from '@mui/material';
import Loading from '../../components/commons/Loading';

const AREA = [
  '전체',
  '서울',
  '경기',
  '인천',
  '대전',
  '대구',
  '광주',
  '울산',
  '부산',
  '강원도',
  '충청도',
  '전라도',
  '경상도',
  '제주도',
];

const ChatsPage = () => {
  const [isArea, setIsArea] = useState('전체');

  const onClickArea = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const { name } = target.dataset;
    setIsArea(name || '');
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.AreaList>
          {AREA.map((area, index) => (
            <li
              key={index}
              data-name={area}
              className={isArea === area ? 'selected' : ''}
              onClick={onClickArea}
            >
              {area}
            </li>
          ))}
        </S.AreaList>
        <S.SearchBox>
          <S.SearchForm>
            <S.SearchInput placeholder="수의사명 또는 병원명을 입력해주세요." />
            <S.SearchImgBtn type="submit">
              <img src="/images/commons/search.png" alt="검색 아이콘 이미지" />
            </S.SearchImgBtn>
          </S.SearchForm>
        </S.SearchBox>
        <S.ChatListContainer>
          <S.ChatList>
            <li>
              <S.ListBox>
                <S.ListContainer>
                  <ProfileImg w="8rem" h="8rem" src="/images/commons/kkam.png" />
                  <S.ListContentBox>
                    <S.NameRateBox>
                      <p>깜장이 [검은인간 동물병원]</p>
                      <Rating name="read-only" value={4} readOnly size="large" />
                    </S.NameRateBox>
                    <S.ListDetail>검은인간 동물병원에서 제일 실력있는 수의사 입니다.</S.ListDetail>
                  </S.ListContentBox>
                </S.ListContainer>
                <S.ListBtnBox>상담신청</S.ListBtnBox>
              </S.ListBox>
            </li>
            <li>
              <S.ListBox>
                <S.ListContainer>
                  <ProfileImg w="8rem" h="8rem" src="/images/commons/kkam.png" />
                  <S.ListContentBox>
                    <S.NameRateBox>
                      <p>깜장이 형 [몽몽이 동물병원]</p>
                      <Rating name="read-only" value={4} readOnly size="large" />
                    </S.NameRateBox>
                    <S.ListDetail>
                      검은인간 동물병원에서 제일 실력있는 수의사 입니다.검은인간 동물병원에서 제일
                      실력있는 수의사 입니다.검은인간 동물병원에서 제일 실력있는 수의사
                      입니다.검은인간 동물병원에서 제일 실력있는 수의사 입니다.검은인간 동물병원에서
                      제일 실력있는 수의사 입니다.
                    </S.ListDetail>
                  </S.ListContentBox>
                </S.ListContainer>
                <S.ListBtnBox>상담신청</S.ListBtnBox>
              </S.ListBox>
            </li>
          </S.ChatList>
        </S.ChatListContainer>
        <Loading />
      </S.Container>
    </S.Wrap>
  );
};

export default ChatsPage;
