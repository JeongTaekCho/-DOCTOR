import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChatStatusRequestData {
  id: number | undefined;
  status: string;
}

interface ChatStatusReturn {
  message: string;
}

const changeStatus = async (data: ChatStatusRequestData): Promise<ChatStatusReturn> => {
  return API.patch<ChatStatusReturn, ChatStatusRequestData>('/chats/status', data);
};

export const useChatChangeStatusMutation = () => {
  return useMutation(changeStatus);
};
