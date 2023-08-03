import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

export interface RegisterVetData {
  vets: File;
  name: string;
  hospitalName: string;
  description: string;
  region: string;
}

interface RegisterVetReturn {
  message: string;
}

const vetRegister = (data: RegisterVetData) => {
  return API.formPost<RegisterVetReturn, RegisterVetData>('/users/vet-register', data);
};

export const useRegisterVetMutation = () => {
  return useMutation(vetRegister);
};
