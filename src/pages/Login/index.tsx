import React from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import useInput from '../../hooks/util/useInput';

const LoginPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  console.log(email);
  console.log(password);

  const onClickLogin = () => {};

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>Email</S.InputLabel>
            <S.InputContainer>
              <Input type="text" onChange={onChangeEmail} />
              <S.PositionBtn type="button">
                <img src="/images/commons/cancel.png" alt="" />
              </S.PositionBtn>
            </S.InputContainer>
            <S.InputError>* 이메일 형식으로 입력해주세요.</S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Password</S.InputLabel>
            <S.InputContainer>
              <Input type="password" onChange={onChangePassword} />
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
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
            <Link to="/">Forgot Password?</Link>
          </S.RememberBox>
          <S.ButtonBox>
            <FormButton type="submit" text="로그인" onClick={onClickLogin} disabled={false} />
          </S.ButtonBox>
          <S.SocialLoginBtn type="button">
            <img src="/images/commons/google.png" alt="구글 아이콘" />
            <span>Sign in with Google</span>
          </S.SocialLoginBtn>
        </S.Form>
        <S.LinkMent>
          아이디가 없으시다구요? <Link to={ROUTE.REGISTER.link}>회원가입 하러 가기</Link>
        </S.LinkMent>
      </S.Container>
    </S.Wrap>
  );
};

export default LoginPage;
