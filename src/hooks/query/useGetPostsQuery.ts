import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { PostsResponse } from '../../types/postType';

const getPosts = async (currentPage: number, category: string): Promise<PostsResponse> => {
  const result = await API.get<{ data: PostsResponse }>(
    `/posts?currentpage=${currentPage}&category=${category}`
  );
  return result.data;
};

export const useGetChatConentsQuery = (currentPage: number, category: string) => {
  return useQuery(['posts-key'], () => getPosts(currentPage, category));
};
