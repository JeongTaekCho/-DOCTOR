import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ChatListResponse } from '../../pages/ChatDetail/types';

const getChatList = async (): Promise<ChatListResponse[]> => {
  const result = await API.get<{ data: ChatListResponse[] }>('/chats');
  return result.data;
};

export const useGetChatListQuery = () => {
  return useQuery(['chatList-key'], getChatList);
};
