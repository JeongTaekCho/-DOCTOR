import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface RegisterData {
  email: string;
  password: string;
  nickname: string;
}

interface RegisterReturn {
  message: string;
}

const register = (data: RegisterData) => {
  return API.post<RegisterReturn, RegisterData>('/register', data);
};

export const useRegisterMutation = () => {
  return useMutation(register);
};
