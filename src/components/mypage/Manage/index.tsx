import React, { useState, ChangeEvent, MouseEvent } from 'react';
import * as S from './style';
import { BsPen } from 'react-icons/bs';
import { PASSOWRDREGEX } from '../../../constants/commons/validaties';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery';
import { RegionOptions } from '../../../constants/commons/menus';
import { useChangeUserMutation } from '../../../hooks/query/useChangeUserMutation';
import Swal from 'sweetalert2';
import { useChangeVetMutation } from '../../../hooks/query/useChangeVetMutation';

interface MyManageProps {
  vetStatus: string;
}

const MyManage = ({ vetStatus }: MyManageProps) => {
  const [isBasic, setIsBasic] = useState(false);
  const [isVet, setIsVet] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [hospital, setHospital] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [validate, setValidate] = useState({
    password: false,
    passwordConfirm: false
  });

  const { mutate: registerMutate } = useChangeUserMutation();

  const vetMutation = useChangeVetMutation();
  const registerVetMutate = vetMutation.mutate;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHospital(e.target.value);
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

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
  const { data: userData, refetch } = useGetUsersQuery();
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

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append('password', password);
    formData.append('nickname', nickname);
    registerMutate(formData, {
      onSuccess: () => {
        setIsBasic(false);
        refetch();
        Swal.fire('개인정보 수정이 완료되었습니다');
      },
      onError: (err: any) => {
        Swal.fire(err.response.data.error);
      }
    });
  };

  const handleRegisterVet = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    registerVetMutate(
      {
        hospital_name: hospital,
        description: description,
        region: region
      },
      {
        onSuccess: () => {
          setIsVet(false);
          refetch();
          Swal.fire('수의사 정보 수정이 완료되었습니다');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  const vetRegion =
    userData?.vet?.region === 'Seoul'
      ? '서울'
      : userData?.vet?.region === 'Gyeonggi'
      ? '경기'
      : userData?.vet?.region === 'Incheon'
      ? '인천'
      : userData?.vet?.region === 'Daejeon'
      ? '대전'
      : userData?.vet?.region === 'Daegu'
      ? '대구'
      : userData?.vet?.region === 'Gwangju'
      ? '광주'
      : userData?.vet?.region === 'Ulsan'
      ? '울산'
      : userData?.vet?.region === 'Busan'
      ? '부산'
      : userData?.vet?.region === 'Gangwon'
      ? '강원도'
      : userData?.vet?.region === 'Chungcheong'
      ? '충청도'
      : userData?.vet?.region === 'Jeolla'
      ? '전라도'
      : userData?.vet?.region === 'Gyeongsang'
      ? '경상도'
      : userData?.vet?.region === 'Jeju'
      ? '제주도'
      : '';

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
          <S.CenteredText>이메일</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          <S.RightText>{userData?.user?.email}</S.RightText>
        </S.InputDiv>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>닉네임</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isBasic ? (
            <S.RightInput
              placeholder={userData?.user?.nickname}
              onChange={onChangeNickname}
              name="nickname"
              value={nickname}
            />
          ) : (
            <S.RightText>{userData?.user?.nickname}</S.RightText>
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
              비밀번호는 영문 숫자 특수문자 포함
              <br /> 10자리 이상이어야 합니다.
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
          <S.BlueButton onClick={handleRegister}>확인</S.BlueButton>
          <S.RedButton onClick={handleEditBasic}>취소</S.RedButton>
        </S.ButtonDiv>
      )}
      {vetStatus === 'accepted' && (
        <>
          <S.Title2>
            <S.BasicHeader>수의사 정보</S.BasicHeader>
          </S.Title2>
          <S.Pen>
            <BsPen size="15" onClick={handleEditVet} />
          </S.Pen>
          {userData?.vet?.status === 'accepted' && (
            <S.MainBox>
              <S.LeftText>
                <S.CenteredText>인증상태</S.CenteredText>
              </S.LeftText>
              <S.InputDiv>
                <S.RightText2>인증됨</S.RightText2>
              </S.InputDiv>
            </S.MainBox>
          )}
          <S.MainBox2>
            <S.LeftText>
              <S.CenteredText>이름</S.CenteredText>
            </S.LeftText>
            <S.InputDiv>
              <S.RightText>{userData?.vet?.name}</S.RightText>
            </S.InputDiv>
          </S.MainBox2>
          <S.MainBox2>
            <S.LeftText>
              <S.CenteredText>병원</S.CenteredText>
            </S.LeftText>
            <S.InputDiv>
              {isVet ? (
                <S.RightInput
                  placeholder={userData?.vet?.hospital_name}
                  name="hospital"
                  onChange={handleChangeInput}
                />
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
                <S.Select name="region" onChange={handleChangeSelect}>
                  {RegionOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </S.Select>
              ) : (
                <S.RightText>{vetRegion}</S.RightText>
              )}
            </S.InputDiv>
          </S.MainBox2>
          <S.MainBox3>
            <S.LeftText>
              <S.CenteredText>병원 소개</S.CenteredText>
            </S.LeftText>
            <S.InputDiv2>
              {isVet ? (
                <S.RightInput2
                  placeholder={userData?.vet?.description}
                  name="description"
                  onChange={handleChangeTextarea}
                />
              ) : (
                <S.RightText>{userData?.vet?.description}</S.RightText>
              )}
            </S.InputDiv2>
          </S.MainBox3>
          {isVet && (
            <S.ButtonDiv>
              <S.BlueButton onClick={handleRegisterVet}>확인</S.BlueButton>
              <S.RedButton onClick={handleEditVet}>취소</S.RedButton>
            </S.ButtonDiv>
          )}
        </>
      )}
    </div>
  );
};

export default MyManage;
