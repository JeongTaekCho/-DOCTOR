import React from 'react';
import * as S from './style';
import ProfileImg from '../../commons/ProfileImg';

const ChatBox = () => {
  return (
    <S.ChatListBox>
      <S.ProfileBox>
        <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
        <S.Status backgroundcolor="#34A853" />
      </S.ProfileBox>
      <S.ChatContentsBox>
        <S.NameBox>
          <S.Name>깜장이 수의사 [깜장 동물병원]</S.Name>
        </S.NameBox>
        <S.ChatContent>상담해주셔서 감사합니다! 좋은 하루 보내세요!</S.ChatContent>
      </S.ChatContentsBox>
      <S.ChatNum>18</S.ChatNum>
    </S.ChatListBox>
  );
};

export default ChatBox;
