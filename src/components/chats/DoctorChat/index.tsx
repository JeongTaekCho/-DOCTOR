import React from 'react';
import * as S from './style';
import ProfileImg from '../../commons/ProfileImg';

interface DoctorChatProps {
  name: string | undefined;
  content: string;
  profileImg: string;
}

const DoctorChat = ({ name, content, profileImg }: DoctorChatProps) => {
  return (
    <S.DoctorChatProfileBox>
      <ProfileImg w="6rem" h="6rem" src={`${profileImg}`} />
      <p>{name}</p>
      <S.DoctorChatBox>
        <S.DoctorChat>
          <pre>{content}</pre>
          <S.DoctorTriangle />
        </S.DoctorChat>
      </S.DoctorChatBox>
    </S.DoctorChatProfileBox>
  );
};

export default DoctorChat;
