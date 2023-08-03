import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

interface UserPostResponse {
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

const getPostsDetail = async (postId: number): Promise<UserPostResponse> => {
  const result = await API.get<{ data: UserPostResponse }>(`/posts/${postId}`);
  return result.data;
};

export const useGetPostsDetailQuery = (postId: number) => {
  return useQuery(['posts-key'], () => getPostsDetail(postId));
};
