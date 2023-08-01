import React from 'react';
import * as S from './style';
import PropTypes from 'prop-types';

interface InfoRegisterProps {
  onCancel: () => void; // onCancel 함수의 타입을 명시적으로 지정
}

const InfoRegister: React.FC<InfoRegisterProps> = ({ onCancel }) => {
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <S.Container>
      <S.TitleDiv>
        <S.Title placeholder="제목"></S.Title>
      </S.TitleDiv>
      <S.DetailDiv>
        <S.Detail placeholder="내용"></S.Detail>
      </S.DetailDiv>
      <S.ButtonDiv>
        <S.Register>등록</S.Register>
        <S.Cancel onClick={handleCancelClick}>취소</S.Cancel>
      </S.ButtonDiv>
    </S.Container>
  );
};

InfoRegister.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default InfoRegister;
