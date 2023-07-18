import React, { useState } from 'react';
import * as S from './style';
import { GrClose, GrUpload } from 'react-icons/gr';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

const AiPage = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <S.Wrap>
      <S.Title>
        <S.Header>피부질환 AI 진단</S.Header>
        <S.P>우리 아이 피부질환 AI 자가진단 해보기</S.P>
      </S.Title>
      <S.Upload>
        <S.Label htmlFor="ex_file">
          <S.LabelHeader>
            <GrUpload size="130" />
          </S.LabelHeader>
          <S.LabelText>
            진단할 피부 사진을
            <br />
            업로드 해주세요
          </S.LabelText>
        </S.Label>
        <S.FileInput type="file" id="ex_file"></S.FileInput>
      </S.Upload>
      <S.Example>
        <S.Button onClick={openModal}>올바른 예시 확인</S.Button>
      </S.Example>
      {modal && (
        <S.Modal>
          <S.Card>
            <S.Close onClick={closeModal}>
              <GrClose size="20" />
            </S.Close>
            <S.Correct>
              <S.CoExample>
                <FcCheckmark />
                올바른 사진 예시
              </S.CoExample>
              <S.CoExplain>진단할 피부 부위가 잘 보이도록 나온 사진</S.CoExplain>
              <S.CoImage>
                <S.CorrectImg src="/images/commons/correct1.jpg"></S.CorrectImg>
                <S.CorrectImg src="/images/commons/correct2.jpg"></S.CorrectImg>
                <S.CorrectImg src="/images/commons/correct3.jpg"></S.CorrectImg>
              </S.CoImage>
            </S.Correct>
            <S.Correct>
              <S.CoExample>
                <FcCancel />
                잘못된 사진 예시
              </S.CoExample>
              <S.CoExplain>진단할 피부 부위가 잘 보이지 않는 사진</S.CoExplain>
              <S.CoImage>
                <S.WrongImg src="/images/commons/wrong1.jpg"></S.WrongImg>
                <S.WrongImg src="/images/commons/wrong2.jpg"></S.WrongImg>
                <S.WrongImg src="/images/commons/wrong3.jpg"></S.WrongImg>
              </S.CoImage>
            </S.Correct>
          </S.Card>
        </S.Modal>
      )}
    </S.Wrap>
  );
};

export default AiPage;
