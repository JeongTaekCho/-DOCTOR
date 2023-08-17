import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface EmailAuthData {
  email: string;
}

interface EmailAuthReturn {
  message: string;
}

const emailAuth = async (data: EmailAuthData): Promise<EmailAuthReturn> => {
  return API.post<EmailAuthReturn, EmailAuthData>('/users/send-verify-code', data);
};

export const useEmailAuthMutation = () => {
  return useMutation(emailAuth);
};
