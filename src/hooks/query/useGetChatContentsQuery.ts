import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ChatContentsResponse } from '../../pages/ChatDetail/types';

const getChatConents = async (chatId: number | undefined): Promise<ChatContentsResponse> => {
  const result = await API.get<{ data: ChatContentsResponse }>(`/chats/${chatId}`);
  return result.data;
};

export const useGetChatConentsQuery = (chatId: number | undefined) => {
  return useQuery(['chatContents-key'], () => getChatConents(chatId));
};
