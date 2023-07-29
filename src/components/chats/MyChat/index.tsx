import React from 'react';
import * as S from './style';

interface MyChatProps {
  content: string;
}

const MyChat = ({ content }: MyChatProps) => {
  return (
    <S.MyChatBox>
      <S.MyChat>
        <pre>{content}</pre>
        <S.MyTriangle />
      </S.MyChat>
    </S.MyChatBox>
  );
};

export default MyChat;
