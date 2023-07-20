import React from 'react';
import * as S from './style';
import { BsPen } from 'react-icons/bs';

const MyManage = () => {
  return (
    <div>
      <S.Title>
        <S.BasicHeader>기본정보</S.BasicHeader>
      </S.Title>
      <S.Pen>
        <BsPen size="15" />
      </S.Pen>
      <S.MainBox>
        <S.LeftText>
          <S.CenteredText>닉네임</S.CenteredText>
        </S.LeftText>
        <S.RightText>유승제</S.RightText>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>아이디</S.CenteredText>
        </S.LeftText>
        <S.RightText>elice123</S.RightText>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>비밀번호</S.CenteredText>
        </S.LeftText>
        <S.RightText>*********</S.RightText>
      </S.MainBox2>
      <S.Title2>
        <S.BasicHeader>수의사 정보</S.BasicHeader>
      </S.Title2>
      <S.Pen>
        <BsPen size="15" />
      </S.Pen>
      <S.MainBox>
        <S.LeftText>
          <S.CenteredText>인증상태</S.CenteredText>
        </S.LeftText>
        <S.RightText2>인증됨</S.RightText2>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>이름</S.CenteredText>
        </S.LeftText>
        <S.RightText>엘리스</S.RightText>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>병원</S.CenteredText>
        </S.LeftText>
        <S.RightText>엘리스 병원</S.RightText>
      </S.MainBox2>
      <S.MainBox3>
        <S.LeftText>
          <S.CenteredText>병원 소개</S.CenteredText>
        </S.LeftText>
        <S.RightText>안녕하세요 여러분.</S.RightText>
      </S.MainBox3>
    </div>
  );
};

export default MyManage;
