import React from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';

const RegisterPage = () => {
  const onClickLogin = () => {};

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>Email</S.InputLabel>
            <Input type="text" />
            <S.InputError>* 이메일 형식으로 입력해주세요.</S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Password</S.InputLabel>
            <Input type="password" />
            <S.InputError>
              * 비밀번호는 영문 숫자 특수문자 포함 10자리 이상이어야 합니다.
            </S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Nickname</S.InputLabel>
            <Input type="text" />
            <S.InputError>* 중복된 닉네임입니다.</S.InputError>
          </S.InputBox>
          <S.ButtonBox>
            <FormButton type="submit" text="회원가입" onClick={onClickLogin} />
          </S.ButtonBox>
        </S.Form>
      </S.Container>
    </S.Wrap>
  );
};

export default RegisterPage;
