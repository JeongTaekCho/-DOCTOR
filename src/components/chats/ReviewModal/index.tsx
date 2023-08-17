import React, { MouseEvent } from 'react';
import * as S from './style';
import { Rating } from '@mui/material';

interface Props {
  handleCancelModal: (_e: MouseEvent<HTMLButtonElement>) => void;
  handleChangeGrade: any;
  handleChatReview: () => void;
}

const ReviewModal = ({ handleCancelModal, handleChangeGrade, handleChatReview }: Props) => {
  return (
    <S.Wrap>
      <S.ModalContainer>
        <S.ModalMent>
          채팅이 종료 되었습니다.
          <br /> 상담은 만족스러우셨나요?
        </S.ModalMent>
        <S.RateBox>
          <Rating name="size-large" defaultValue={2} size="large" onChange={handleChangeGrade} />
        </S.RateBox>
        <S.BtnBox>
          <S.CompleteBtn onClick={handleChatReview}>완료</S.CompleteBtn>
          <S.CancelBtn data-name="review" onClick={handleCancelModal}>
            취소
          </S.CancelBtn>
        </S.BtnBox>
      </S.ModalContainer>
    </S.Wrap>
  );
};

export default ReviewModal;
