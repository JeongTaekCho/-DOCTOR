import React from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';

const RegisterPage = () => {
  const onClickLogin = () => {};

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>이메일</S.InputLabel>
            <S.InputContainer>
              <Input type="text" />
              <S.AuthBtn type="button">인증</S.AuthBtn>
            </S.InputContainer>
            <S.InputError>* 이메일 형식으로 입력해주세요.</S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.InputContainer>
              <Input type="password" />
              <S.PositionBtn type="button">
                <img src="/images/commons/hide.png" alt="" />
              </S.PositionBtn>
            </S.InputContainer>
            <S.InputError>
              * 비밀번호는 영문 숫자 특수문자 포함 10자리 이상이어야 합니다.
            </S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>비밀번호 확인</S.InputLabel>
            <S.InputContainer>
              <Input type="password" />
              <S.PositionBtn type="button">
                <img src="/images/commons/hide.png" alt="" />
              </S.PositionBtn>
            </S.InputContainer>
            <S.InputError>* 비밀번호가 일치하지 않습니다.</S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Nickname</S.InputLabel>
            <S.InputContainer>
              <Input type="text" />
              <S.AuthBtn type="button">확인</S.AuthBtn>
            </S.InputContainer>
            <S.InputError>* 중복된 닉네임입니다.</S.InputError>
          </S.InputBox>
          <S.ButtonBox>
            <FormButton type="submit" text="회원가입" onClick={onClickLogin} />
          </S.ButtonBox>
        </S.Form>
        <S.LinkMent>
          이미 회원가입을 하셨나요? <Link to={ROUTE.LOGIN.link}>로그인 하러 가기</Link>
        </S.LinkMent>
      </S.Container>
    </S.Wrap>
  );
};

export default RegisterPage;
