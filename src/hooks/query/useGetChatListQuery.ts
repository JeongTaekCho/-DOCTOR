import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getChatList = async (): Promise<any> => {
  API.get('/chats');
};

export const useGetChatListQuery = () => {
  return useQuery(['chatList-key'], getChatList);
};
