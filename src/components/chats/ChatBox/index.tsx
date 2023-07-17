import React from 'react';
import * as S from './style';
import ProfileImg from '../../commons/ProfileImg';

const ChatBox = () => {
  return (
    <S.ChatListBox>
      <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
      <S.ChatContentsBox>
        <S.NameBox>
          <S.Name>깜장이 수의사 [깜장 동물병원]</S.Name>
          <S.Status style={{ backgroundColor: '#34A853' }} />
        </S.NameBox>
        <S.ChatContent>상담해주셔서 감사합니다! 좋은 하루 보내세요!</S.ChatContent>
      </S.ChatContentsBox>
      <S.ChatNum>18</S.ChatNum>
      <S.ChatBtnBox>
        <S.AcceptBtn>수락</S.AcceptBtn>
        <S.RefuseBtn>거절</S.RefuseBtn>
      </S.ChatBtnBox>
    </S.ChatListBox>
  );
};

export default ChatBox;
