import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { UserPostResponse } from '../../components/mypage/List/types';

const getPosts = async (): Promise<UserPostResponse[]> => {
  const result = await API.get<{ data: UserPostResponse[] }>('/users/post-list');
  return result.data;
};

export const useGetUserPostQuery = () => {
  return useQuery(['postList-key'], getPosts);
};
