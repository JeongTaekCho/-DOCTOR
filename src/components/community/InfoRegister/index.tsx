import React from 'react';
import * as S from './style';
import PropTypes from 'prop-types';

const InfoRegister = ({ onCancel }) => {
  const handleCancelClick = () => {
    onCancel();
  };

  InfoRegister.propTypes = {
    onCancel: PropTypes.func.isRequired
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

export default InfoRegister;
