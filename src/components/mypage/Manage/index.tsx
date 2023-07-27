import React, { useState, ChangeEvent } from 'react';
import * as S from './style';
import { BsPen } from 'react-icons/bs';
import { PASSOWRDREGEX } from '../../../constants/commons/validaties';

interface MyManageProps {
  certification: string;
}

const MyManage = ({ certification }: MyManageProps) => {
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
          {isVet ? (
            <S.CenteredText>면허증 첨부</S.CenteredText>
          ) : (
            <S.CenteredText>인증상태</S.CenteredText>
          )}
        </S.LeftText>
        <S.InputDiv>
          {isVet ? <S.FileInput type="file" /> : <S.RightText2>{certification}</S.RightText2>}
        </S.InputDiv>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>이름</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isVet ? <S.RightInput placeholder="엘리스" /> : <S.RightText>엘리스</S.RightText>}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>병원</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isVet ? (
            <S.RightInput placeholder="엘리스 병원" />
          ) : (
            <S.RightText>엘리스 병원</S.RightText>
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
              <option value="">지역선택</option>
              <option value="학생">서울</option>
              <option value="회사원">경기</option>
              <option value="기타">인천</option>
              <option value="기타">대전</option>
              <option value="기타">대구</option>
              <option value="기타">광주</option>
              <option value="기타">울산</option>
              <option value="기타">부산</option>
              <option value="기타">강원도</option>
              <option value="기타">충청도</option>
              <option value="기타">전라도</option>
              <option value="기타">경상도</option>
              <option value="기타">제주도</option>
            </S.Select>
          ) : (
            <S.RightText>서울</S.RightText>
          )}
        </S.InputDiv>
      </S.MainBox2>
      <S.MainBox3>
        <S.LeftText>
          <S.CenteredText>병원 소개</S.CenteredText>
        </S.LeftText>
        <S.InputDiv2>
          {isVet ? (
            <S.RightInput2 placeholder="안녕하세요 여러분" />
          ) : (
            <S.RightText>안녕하세요 여러분</S.RightText>
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
          {isBasic ? <S.RightInput placeholder="유승제" /> : <S.RightText>유승제</S.RightText>}
        </S.InputDiv>
      </S.MainBox>
      <S.MainBox2>
        <S.LeftText>
          <S.CenteredText>아이디</S.CenteredText>
        </S.LeftText>
        <S.InputDiv>
          {isBasic ? <S.RightInput placeholder="elice123" /> : <S.RightText>elice123</S.RightText>}
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
            <S.RightText>*******</S.RightText>
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
      {certification === '인증됨' && certificationSection}
    </div>
  );
};

export default MyManage;
