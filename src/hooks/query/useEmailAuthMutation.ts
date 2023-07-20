import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface EmailAuthData {
  email: string;
}

const emailAuth = (data: EmailAuthData) => {
  return axios.post('http://localhost:8080/verifyCode', data);
};

export const useEmailAuthMutation = () => {
  return useMutation(emailAuth);
};
