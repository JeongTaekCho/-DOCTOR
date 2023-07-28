import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getChatConents = async (chatId: number): Promise<any> => {
  return API.get(`/chats/${chatId}`);
};

export const useGetChatConentsQuery = (chatId: number) => {
  return useQuery(['chatContents-key'], () => getChatConents(chatId));
};
