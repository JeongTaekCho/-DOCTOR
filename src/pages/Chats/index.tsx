import React, { MouseEvent, useState } from 'react';
import * as S from './style';
import Loading from '../../components/commons/Loading';
import ChatList from '../../components/chats/ChatList';

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
  '제주도'
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
        <S.AreaBox>
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
        </S.AreaBox>
        <S.SearchBox>
          <S.SearchForm>
            <S.SearchInput placeholder="수의사명 또는 병원명을 입력해주세요." />
            <S.SearchImgBtn type="submit">
              <img src="/images/commons/search.png" alt="검색 아이콘 이미지" />
            </S.SearchImgBtn>
          </S.SearchForm>
        </S.SearchBox>
        <S.ChatListContainer>
          <S.ChatLists>
            <ChatList />
            <ChatList />
            <ChatList />
            <ChatList />
            <ChatList />
          </S.ChatLists>
        </S.ChatListContainer>
        <Loading />
      </S.Container>
    </S.Wrap>
  );
};

export default ChatsPage;
