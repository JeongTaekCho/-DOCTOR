import React from 'react';
import * as S from './style';

interface UserChatProps {
  content: string;
}

const UserChat = ({ content }: UserChatProps) => {
  return (
    <S.UserChatBox>
      <S.UserChat>
        <pre>{content}</pre>
        <S.UserTriangle />
      </S.UserChat>
    </S.UserChatBox>
  );
};

export default UserChat;
