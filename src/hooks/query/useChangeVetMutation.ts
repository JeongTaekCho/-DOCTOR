import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangeVetData {
  hospital_name?: string;
  description?: string;
  region?: string;
}

interface ChangeVetReturn {
  message: string;
}

const changeVet = async (data: ChangeVetData): Promise<ChangeVetReturn> => {
  return API.patch<ChangeVetReturn, ChangeVetData>('/users/vet', data);
};

export const useChangeVetMutation = () => {
  return useMutation(changeVet);
};
