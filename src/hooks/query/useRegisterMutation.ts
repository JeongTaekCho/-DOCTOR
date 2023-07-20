import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface RegisterData {
  email: string;
  password: string;
  nickname: string;
}

const register = (data: RegisterData) => {
  return axios.post('http://localhost:8080/register', data);
};

export const useRegisterMutation = () => {
  return useMutation(register);
};
