import React, { MouseEvent } from 'react';
import * as S from './style';
import { Rating } from '@mui/material';

interface Props {
  handleCancelModal: (_e: MouseEvent<HTMLButtonElement>) => void;
}

const ReviewModal = ({ handleCancelModal }: Props) => {
  return (
    <S.Wrap>
      <S.ModalContainer>
        <S.ModalMent>상담은 만족스러우셨나요?</S.ModalMent>
        <S.RateBox>
          <Rating name="size-large" defaultValue={2} size="large" />
        </S.RateBox>
        <S.BtnBox>
          <S.CompleteBtn>완료</S.CompleteBtn>
          <S.CancelBtn data-name="review" onClick={handleCancelModal}>
            취소
          </S.CancelBtn>
        </S.BtnBox>
      </S.ModalContainer>
    </S.Wrap>
  );
};

export default ReviewModal;
