import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

const deleteVet = async (): Promise<void> => {
  await API.delete<void>('/users/vet');
};

export const useDeleteVetMutation = () => {
  const mutation = useMutation(deleteVet);
  return mutation;
};
