import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface EmailCheckData {
  email: string;
  code: string;
}

interface EmailCheckReturn {
  message: string;
}

const emailCheck = (data: EmailCheckData) => {
  return API.post<EmailCheckReturn, EmailCheckData>('/users/verify-email', data);
};

export const useEmailCheckMutation = () => {
  return useMutation(emailCheck);
};
