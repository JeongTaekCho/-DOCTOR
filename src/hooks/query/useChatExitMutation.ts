import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

const chatExit = async (id: number | undefined) => {
  return API.delete(`/chats/${id}`);
};

export const useChatExitMutation = (id: number | undefined) => {
  return useMutation(() => chatExit(id));
};
