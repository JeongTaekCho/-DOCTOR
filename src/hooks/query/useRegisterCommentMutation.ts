import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface RegisterComment {
  post_id: number;
  body: string;
  group: 0;
  indent: 0;
  order: 0;
  author_email: string;
}

interface RegisterReturn {
  message: string;
}

const register = (data: RegisterComment) => {
  return API.post<RegisterReturn, RegisterComment>('/comments', data);
};

export const useRegisterCommentMutation = () => {
  return useMutation(register);
};
