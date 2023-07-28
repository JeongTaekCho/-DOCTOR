import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getUsers = async (): Promise<any> => {
  return API.get('/users');
};

export const useGetUsersQuery = () => {
  return useQuery(['user-key'], getUsers);
};
