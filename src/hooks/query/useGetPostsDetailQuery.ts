import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

interface CommentData {
  id: number;
  post_id: number;
  group: number | null;
  order: number | null;
  indent: number | null;
  author_email: string;
  body: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

interface UserPostResponse {
  id: number;
  author_email: string;
  category: string;
  title: string;
  body: string;
  like: number;
  comments: CommentData[];
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
