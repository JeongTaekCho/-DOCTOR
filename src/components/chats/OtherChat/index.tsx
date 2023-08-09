import React from 'react';
import * as S from './style';
import ProfileImg from '../../commons/ProfileImg';
import { imgUrl } from '../../../api';

interface OtherChatProps {
  name: string | undefined;
  content: string;
  profileImg: string | undefined;
}

const OtherChat = ({ name, content, profileImg }: OtherChatProps) => {
  return (
    <S.OtherChatProfileBox>
      <ProfileImg w="6rem" h="6rem" src={`${imgUrl}${profileImg}`} />
      <p>{name}</p>
      <S.OtherChatBox>
        <S.OtherChat>
          <pre>{content}</pre>
          <S.OtherTriangle />
        </S.OtherChat>
      </S.OtherChatBox>
    </S.OtherChatProfileBox>
  );
};

export default OtherChat;
