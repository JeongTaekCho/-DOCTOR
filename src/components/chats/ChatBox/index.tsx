import React from 'react';
import * as S from './style';
import ProfileImg from '../../commons/ProfileImg';
import { ChatListResponse } from '../../../pages/ChatDetail/types';
import { UserResponse } from '../../../hooks/query/useGetUsersQuery';

const ChatBox = ({
  chatInfo,
  userData
}: {
  chatInfo: ChatListResponse;
  userData: UserResponse | undefined;
}) => {
  const isUser = userData?.user?.role === 'user';

  return (
    <S.ChatListBox>
      <S.ProfileBox>
        <ProfileImg
          w="6rem"
          h="6rem"
          src={
            isUser
              ? chatInfo?.users_chat_rooms_user_vet_emailTousers?.img_path
              : chatInfo?.users_chat_rooms_user_emailTousers?.img_path
          }
        />
        <S.Status backgroundcolor="#34A853" />
      </S.ProfileBox>
      <S.ChatContentsBox>
        <S.NameBox>
          <S.Name>
            {isUser
              ? chatInfo?.users_chat_rooms_user_vet_emailTousers?.nickname
              : chatInfo?.users_chat_rooms_user_emailTousers?.nickname}
          </S.Name>
        </S.NameBox>
        <S.ChatContent>{chatInfo?.chat_contents?.[0]?.message}</S.ChatContent>
      </S.ChatContentsBox>
      <S.ChatNum>18</S.ChatNum>
    </S.ChatListBox>
  );
};

export default ChatBox;
