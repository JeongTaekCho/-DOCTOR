import React from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const onClickLogin = () => {};

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>Email</S.InputLabel>
            <S.InputContainer>
              <Input type="text" />
              <S.PositionBtn type="button">
                <img src="/images/commons/cancel.png" alt="" />
              </S.PositionBtn>
            </S.InputContainer>
            <S.InputError>* 이메일 형식으로 입력해주세요.</S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Password</S.InputLabel>
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
          <S.RememberBox>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </FormGroup>
            <Link to="/">Forgot Password?</Link>
          </S.RememberBox>
          <S.ButtonBox>
            <FormButton type="submit" text="로그인" onClick={onClickLogin} disabled={false} />
          </S.ButtonBox>
        </S.Form>
      </S.Container>
    </S.Wrap>
  );
};

export default LoginPage;
