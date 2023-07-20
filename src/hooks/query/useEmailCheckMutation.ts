import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface EmailCheckData {
  email: string;
  code: string;
}

const emailCheck = (data: EmailCheckData) => {
  return axios.post('http://localhost:8080/verifyEmail', data);
};

export const useEmailCheckMutation = () => {
  return useMutation(emailCheck);
};
