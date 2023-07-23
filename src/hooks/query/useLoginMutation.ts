import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface LoginData {
  email: string;
  password: string;
}

interface LoginReturn {
  token: string;
}

const login = (data: LoginData) => {
  return API.post<LoginReturn, LoginData>('/login', data);
};

export const useLoginMutation = () => {
  return useMutation(login);
};
