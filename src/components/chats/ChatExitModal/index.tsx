import React, { MouseEvent } from 'react';
import * as S from './style';

interface Props {
  handleCancelModal: (_e: MouseEvent<HTMLButtonElement>) => void;
  handleChatExitBtnReview: (_e: MouseEvent<HTMLButtonElement>) => void;
}

const ChatExitModal = ({ handleCancelModal, handleChatExitBtnReview }: Props) => {
  return (
    <S.Wrap>
      <S.ModalContainer>
        <S.ModalMent>
          채팅방을 나가시면 채팅이 종료됩니다. <br />
          나가시겠습니까?
        </S.ModalMent>
        <S.BtnBox>
          <S.CancelBtn data-name="exit" onClick={handleCancelModal}>
            취소
          </S.CancelBtn>
          <S.ExitBtn onClick={handleChatExitBtnReview}>나가기</S.ExitBtn>
        </S.BtnBox>
      </S.ModalContainer>
    </S.Wrap>
  );
};

export default ChatExitModal;
