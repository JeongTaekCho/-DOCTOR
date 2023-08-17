import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import * as S from './style';
import { Input } from '../../components/inputs/FormInput/style';
import FormButton from '../../components/buttons/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import Swal from 'sweetalert2';
import useInput from '../../hooks/util/useInput';
import { useEmailAuthMutation } from '../../hooks/query/useEmailAuthMutation';
import { useEmailCheckMutation } from '../../hooks/query/useEmailCheckMutation';
import { useRegisterMutation } from '../../hooks/query/useRegisterMutation';
import { tokenAtom } from '../../atoms/atoms';
import { EMAILREGEX, PASSOWRDREGEX } from '../../constants/commons/validaties';
import LoadingBackground from '../../components/commons/LoadingBackground';
import { useAtomValue } from 'jotai';

const RegisterPage = () => {
  const auth = useAtomValue(tokenAtom);
  const navigate = useNavigate();

  const { mutate: emailAuthMutate, isLoading: emailAuthLoading } = useEmailAuthMutation();
  const { mutate: emailCheckMutate } = useEmailCheckMutation();
  const { mutate: registerMutate } = useRegisterMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [isCode, setIsCode] = useState(false);
  const [validate, setValidate] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    nickname: false,
    authCode: true
  });
  const [authCode, handleChangeAuthCode] = useInput('');

  const validateComplete =
    !!email &&
    !!password &&
    !!passwordConfirm &&
    !!nickname &&
    !!authCode &&
    validate.email === false &&
    validate.password === false &&
    validate.passwordConfirm === false &&
    validate.nickname === false &&
    validate.authCode === false;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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

      if (passwordConfirm !== value) {
        setValidate(prevError => ({ ...prevError, passwordConfirm: true }));
      } else {
        setValidate(prevError => ({ ...prevError, passwordConfirm: false }));
      }
    }
    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
      if (password !== value) {
        setValidate(prevError => ({ ...prevError, passwordConfirm: true }));
      } else {
        setValidate(prevError => ({ ...prevError, passwordConfirm: false }));
      }
    }

    if (name === 'nickname') {
      setNickname(value);

      if (value.length < 2 || value.length > 10) {
        setValidate({ ...validate, nickname: true });
      } else {
        setValidate({ ...validate, nickname: false });
      }
    }
  };

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    registerMutate(
      {
        email,
        password,
        nickname
      },
      {
        onSuccess: () => {
          Swal.fire('회원가입이 완료되었습니다.', '로그인 후 서비스를 이용해보세요!');
          navigate(ROUTE.LOGIN.link);
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleEmailAuth = () => {
    emailAuthMutate(
      { email },
      {
        onSuccess: () => {
          Swal.fire('입력하신 이메일로 인증번호를 전송하였습니다.');
          setIsCode(true);
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const handleEmailCheck = () => {
    emailCheckMutate(
      {
        email,
        code: authCode
      },
      {
        onSuccess: () => {
          Swal.fire('인증에 성공하였습니다!');
          setValidate({ ...validate, authCode: false });
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
          setIsCode(false);
        }
      }
    );
  };

  useEffect(() => {
    if (auth) {
      navigate(ROUTE.HOME.link);
    }
  }, [auth]);

  return (
    <S.Wrap>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>이메일</S.InputLabel>
            <S.InputContainer>
              <Input type="text" name="email" value={email} onChange={handleChangeInput} />
              <S.AuthBtn
                type="button"
                onClick={handleEmailAuth}
                disabled={validate.email === true || email.length === 0}
              >
                인증
              </S.AuthBtn>
            </S.InputContainer>
            <S.InputError> {validate.email && '* 이메일 형식으로 입력해주세요.'}</S.InputError>
          </S.InputBox>
          {isCode && (
            <S.InputBox>
              <S.InputContainer>
                <Input
                  type="text"
                  placeholder="인증코드를 입력해주세요."
                  onChange={handleChangeAuthCode}
                  maxLength={6}
                />
                <S.AuthBtn
                  type="button"
                  disabled={authCode.length === 0}
                  onClick={handleEmailCheck}
                >
                  확인
                </S.AuthBtn>
              </S.InputContainer>
            </S.InputBox>
          )}
          <S.InputBox>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.InputContainer>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />
              {/* <S.PositionBtn type="button">
                <img src="/images/commons/hide.png" alt="" />
              </S.PositionBtn> */}
            </S.InputContainer>
            <S.InputError>
              {validate.password &&
                '* 비밀번호는 영문 숫자 특수문자 포함 10자리 이상이어야 합니다.'}
            </S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>비밀번호 확인</S.InputLabel>
            <S.InputContainer>
              <Input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleChangeInput}
              />
              {/* <S.PositionBtn type="button">
                <img src="/images/commons/hide.png" alt="" />
              </S.PositionBtn> */}
            </S.InputContainer>
            <S.InputError>
              {validate.passwordConfirm && '* 비밀번호가 일치하지 않습니다.'}
            </S.InputError>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>Nickname</S.InputLabel>
            <S.InputContainer>
              <Input type="text" name="nickname" value={nickname} onChange={handleChangeInput} />
            </S.InputContainer>
            <S.InputError>
              {' '}
              {validate.nickname && '닉네임은 2글자 이상 10글자 이하로 입력해주세요.'}
            </S.InputError>
          </S.InputBox>
          <S.ButtonBox>
            <FormButton
              type="submit"
              text="회원가입"
              disabled={validateComplete === false ? true : false}
              onClick={handleRegister}
            />
          </S.ButtonBox>
        </S.Form>
        <S.LinkMent>
          이미 회원가입을 하셨나요? <Link to={ROUTE.LOGIN.link}>로그인 하러 가기</Link>
        </S.LinkMent>
      </S.Container>
      {emailAuthLoading && <LoadingBackground />}
    </S.Wrap>
  );
};

export default RegisterPage;
