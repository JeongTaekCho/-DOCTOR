import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}

const login = (data: LoginData) => {
  return axios.post('http://localhost:8080/login', data);
};

export const useLoginMutation = () => {
  return useMutation(login);
};
