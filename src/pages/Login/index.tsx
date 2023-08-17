import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import { useLoginMutation } from '../../hooks/query/useLoginMutation';
import Swal from 'sweetalert2';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../atoms/atoms';
import { EMAILREGEX, PASSOWRDREGEX } from '../../constants/commons/validaties';
import { serverUrl } from '../../api';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';

const LoginPage = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate }: any = useLoginMutation();
  const user = useGetUsersQuery();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [validate, setValidate] = useState({
    email: false,
    password: false
  });

  const [userToken, setUserToken] = useAtom(tokenAtom);

  const validateComplete =
    !!email && !!password && validate.email === false && validate.password === false;

  const handleRememberMeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);

      if (EMAILREGEX.test(value)) {
        setValidate({ ...validate, email: false });
      } else {
        setValidate({ ...validate, email: true });
      }
    }

    if (name === 'password') {
      setPassword(value);

      if (PASSOWRDREGEX.test(value)) {
        setValidate(prevError => ({ ...prevError, password: false }));
      } else {
        setValidate(prevError => ({ ...prevError, password: true }));
      }
    }
  }, []);

  const handleEmailClean = () => {
    setEmail('');
    localStorage.removeItem('email');
  };

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    loginMutate(
      {
        email,
        password
      },
      {
        onSuccess: (loginData: any) => {
          if (rememberMe) {
            localStorage.setItem('email', email);
          } else {
            localStorage.removeItem('email');
          }

          sessionStorage.setItem('token', loginData.data);
          setUserToken(loginData.data);
          user.refetch();
          Swal.fire('로그인 성공');
          navigate(ROUTE.HOME.link);
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleGoogleLogin = async () => {
    window.location.assign(`${serverUrl}/auth/google`);
  };

  const handleKakaoLogin = async () => {
    window.location.assign(`${serverUrl}/auth/kakao`);
    // Swal.fire('서비스 이용 준비중입니다.');
  };

  useEffect(() => {
    if (userToken) {
      navigate(ROUTE.HOME.link);
    }
  }, [userToken]);

  useEffect(() => {
    const saveUserEmail = localStorage.getItem('email');

    if (saveUserEmail) {
      setEmail(saveUserEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>이메일</S.InputLabel>
            <S.InputContainer>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={handleChangeInput}
                autoComplete="username"
              />
              <S.PositionBtn type="button" onClick={handleEmailClean}>
                <img src="/images/commons/cancel.png" alt="" />
              </S.PositionBtn>
            </S.InputContainer>
            {validate.email === true && (
              <S.InputError>* 이메일 형식으로 입력해주세요.</S.InputError>
            )}
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.InputContainer>
              <Input
                type="password"
                autoComplete="current-password"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />
              {/* <S.PositionBtn type="button">
                <img src="/images/commons/hide.png" alt="" />
              </S.PositionBtn> */}
            </S.InputContainer>
            {validate.password === true && (
              <S.InputError>
                * 비밀번호는 영문 숫자 특수문자 포함 10자리 이상이어야 합니다.
              </S.InputError>
            )}
          </S.InputBox>
          <S.RememberBox>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={handleRememberMeChecked} />}
                label="아이디 기억하기"
              />
            </FormGroup>
          </S.RememberBox>
          <S.ButtonBox>
            <FormButton
              type="submit"
              text="로그인"
              onClick={handleLogin}
              disabled={validateComplete === true ? false : true}
            />
          </S.ButtonBox>
          <S.SocialLoginBtn type="button" onClick={handleGoogleLogin}>
            <img src="/images/commons/google.png" alt="구글 아이콘" />
            <span>구글 로그인</span>
          </S.SocialLoginBtn>
          <S.KakaoLoginBtn type="button" onClick={handleKakaoLogin}>
            <img src="/images/commons/kakao.png" alt="카카오톡 아이콘" />
            <span>카카오 로그인</span>
          </S.KakaoLoginBtn>
        </S.Form>
        <S.LinkMent>
          아이디가 없으시다구요? <Link to={ROUTE.REGISTER.link}>회원가입 하러 가기</Link>
        </S.LinkMent>
      </S.Container>
    </S.Wrap>
  );
};

export default LoginPage;
