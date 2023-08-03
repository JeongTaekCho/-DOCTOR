import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

interface UserPostData {
  id: number;
  author_email: string;
  category: string;
  title: string;
  body: string;
  like: number;
  created_at: Date;
  update_at: Date | null;
  deleted_at: Date | null;
}

interface UserPostResponse {
  data: UserPostData[];
  currentPage: number;
  totalPage: number;
}

const getPosts = async (): Promise<UserPostResponse> => {
  const result = await API.get<{ data: UserPostResponse }>('/users/post-list');
  return result.data;
};

export const useGetUserPostQuery = () => {
  return useQuery(['postList-key'], getPosts);
};
