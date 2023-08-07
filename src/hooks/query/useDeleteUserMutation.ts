import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

const deleteUser = async (): Promise<void> => {
  await API.delete<void>('/users');
};

export const useDeleteUserMutation = () => {
  const mutation = useMutation(deleteUser);
  return mutation;
};
