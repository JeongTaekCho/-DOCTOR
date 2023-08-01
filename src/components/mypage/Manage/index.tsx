import React, { useState, ChangeEvent } from 'react';
import * as S from './style';
import { BsPen } from 'react-icons/bs';
import { PASSOWRDREGEX } from '../../../constants/commons/validaties';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery';
import { RegionOptions } from '../../../constants/commons/menus';
interface MyManageProps {
  vetStatus: string;
}

const MyManage = ({ vetStatus }: MyManageProps) => {
  const [isBasic, setIsBasic] = useState(false);
  const [isVet, setIsVet] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [validate, setValidate] = useState({
    password: false,
    passwordConfirm: false
  });

  const handleEditBasic = () => {
    setIsBasic(prev => !prev);
    resetPasswordValidation();
  };

  const handleEditVet = () => {
    setIsVet(prev => !prev);
  };

  const resetPasswordValidation = () => {
    setValidate({
      password: false,
      passwordConfirm: false
    });
    setPassword('');
    setPasswordConfirm('');
  };
  const { data: userData } = useGetUsersQuery();
  const generateAsterisks = (num: number): string => '*'.repeat(Math.min(num, 10));
  const passwordCheck = userData?.user?.password;
  const passwordLength = passwordCheck ? userData?.user?.password?.length : 0;
  const maskedPassword = generateAsterisks(passwordLength);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'password') {
      setPassword(value);

      if (PASSOWRDREGEX.test(value)) {
        setValidate(prevError => ({ ...prevError, password: false }));
      } else {
        setValidate(prevError => ({ ...prevError, password: true }));
      }

      if (passwordConfirm && passwordConfirm !== value) {
        setValidate(prevError => ({ ...prevError, passwordConfirm: true }));
      } else {
        setValidate(prevError => ({ ...prevError, passwordConfirm: false }));
      }
    }

    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);

      if (password && password !== value) {
        setValidate(prevError => ({ ...prevError, passwordConfirm: true }));
      } else {
        setValidate(prevError => ({ ...prevError, passwordConfirm: false }));
      }
    }
  };

  const certificationSection = (
    <>
      <S.Title2>
        <S.BasicHeader>수의사 정보</S.BasicHeader>
      </S.Title2>
      <S.Pen>
        <BsPen size="15" onClick={handleEditVet} />
      </S.Pen>
      <S.MainBox>
        <S.LeftText>
          <S.CenteredText>인증상태</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          <S.RightText2>{userData?.vet?.status}</S.RightText2>
        </S.InputDiv>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>이름</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isVet ? (
            <S.RightInput placeholder={userData?.vet?.name} />
          ) : (
            <S.RightText>{userData?.vet?.name}</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>병원</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isVet ? (
            <S.RightInput placeholder={userData?.vet?.hospital_name} />
          ) : (
            <S.RightText>{userData?.vet?.hospital_name}</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>병원 소재지</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isVet ? (
            <S.Select>
              {RegionOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.Select>
          ) : (
            <S.RightText>{userData?.vet?.region}</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox3>
        <S.LeftText>
          <S.CenteredText>병원 소개</S.CenteredText>
        </S.LeftText>
        <S.InputDiv2>
          {isVet ? (
            <S.RightInput2 placeholder={userData?.vet?.description} />
          ) : (
            <S.RightText>{userData?.vet?.description}</S.RightText>
          )}
        </S.InputDiv2>
      </S.MainBox3>
      {isVet && (
        <S.ButtonDiv>
          <S.BlueButton>확인</S.BlueButton>
          <S.RedButton onClick={handleEditVet}>취소</S.RedButton>
        </S.ButtonDiv>
      )}
    </>
  );

  return (
    <div>
      <S.Title>
        <S.BasicHeader>기본정보</S.BasicHeader>
      </S.Title>
      <S.Pen>
        <BsPen size="15" onClick={handleEditBasic} />
      </S.Pen>
      <S.MainBox>
        <S.LeftText>
          <S.CenteredText>닉네임</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isBasic ? (
            <S.RightInput placeholder={userData?.user?.nickname} />
          ) : (
            <S.RightText>{userData?.user?.nickname}</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>이메일</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isBasic ? (
            <S.RightInput placeholder={userData?.user?.email} />
          ) : (
            <S.RightText>{userData?.user?.email}</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>비밀번호</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isBasic ? (
            <S.RightInput
              type="password"
              name="password"
              value={password}
              onChange={onChangeInput}
            />
          ) : (
            <S.RightText>{maskedPassword}</S.RightText>
          )}
        </S.InputDiv>
        {validate.password && isBasic && (
          <S.ConfirmDiv style={{ display: 'flex', alignItems: 'center' }}>
            <S.ConfirmSpan>
              비밀번호는 영문 숫자 특수문자 포함 10자리 이상이어야 합니다.
            </S.ConfirmSpan>
          </S.ConfirmDiv>
        )}
      </S.MainBox2>
      {isBasic && (
        <S.MainBox2>
          <S.LeftText>
            <S.CenteredText>비밀번호 확인</S.CenteredText>
          </S.LeftText>
          <S.InputDiv>
            <S.RightInput
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangeInput}
            />
          </S.InputDiv>
          {validate.passwordConfirm && passwordConfirm && (
            <S.ConfirmDiv style={{ display: 'flex', alignItems: 'center' }}>
              <S.ConfirmSpan>비밀번호가 일치하지 않습니다.</S.ConfirmSpan>
            </S.ConfirmDiv>
          )}
        </S.MainBox2>
      )}
      {isBasic && (
        <S.ButtonDiv>
          <S.BlueButton>확인</S.BlueButton>
          <S.RedButton onClick={handleEditBasic}>취소</S.RedButton>
        </S.ButtonDiv>
      )}
      {vetStatus === 'accepted' && certificationSection}
    </div>
  );
};

export default MyManage;
