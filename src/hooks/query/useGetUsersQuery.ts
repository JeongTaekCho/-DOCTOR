import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { User, Vet } from '../../types/userType';

export interface UserResponse {
  user: User;
  vet: Vet | null;
}

const getUsers = async (): Promise<UserResponse | null> => {
  if (!sessionStorage.getItem('token')) {
    return null;
  }

  const result = await API.get<{ data: UserResponse }>('/users');
  return result.data;
};

export const useGetUsersQuery = () => {
  return useQuery(['user-key'], getUsers);
};
