import React, { ChangeEvent, useState } from 'react';
import * as S from '../ChatList/style';
import ProfileImg from '../../commons/ProfileImg';
import { Rating } from '@mui/material';

const ChatList = () => {
  const [consult, setConsult] = useState('견종: \n몸무게: \n상세내용: ');
  const [isConsultModal, setIsConsultModal] = useState(false);

  const onClickToggleConsultModal = () => {
    setIsConsultModal(prev => !prev);
  };

  const onChangeConsult = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConsult(e.target.value);
  };

  return (
    <>
      <S.ChatList>
        <S.ListBox>
          <S.ListContainer>
            <ProfileImg w="8rem" h="8rem" src="/images/commons/kkam.png" />
            <S.ListContentBox>
              <S.NameRateBox>
                <p>깜장이 [검은인간 동물병원]</p>
                <Rating name="read-only" value={4} readOnly size="large" />
              </S.NameRateBox>
              <S.ListDetail>검은인간 동물병원에서 제일 실력있는 수의사 입니다.</S.ListDetail>
            </S.ListContentBox>
          </S.ListContainer>
          <S.ListBtnBox type="button" onClick={onClickToggleConsultModal}>
            상담신청
          </S.ListBtnBox>
        </S.ListBox>
      </S.ChatList>
      {isConsultModal && (
        <S.ChatFormBg>
          <S.ChatForm>
            <S.FormTitle>
              원활한 상담을 위해
              <br />
              아이의 정보를 입력해주세요!
            </S.FormTitle>
            <S.TextArea value={consult} onChange={onChangeConsult} />
            <S.FormBtnBox>
              <S.FormSubmitBtn type="submit">상담신청</S.FormSubmitBtn>
              <S.FormCancelBtn type="button" onClick={onClickToggleConsultModal}>
                취소하기
              </S.FormCancelBtn>
            </S.FormBtnBox>
          </S.ChatForm>
        </S.ChatFormBg>
      )}
    </>
  );
};

export default ChatList;
