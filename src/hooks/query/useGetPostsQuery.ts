import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { PostsResponse } from '../../types/postType';

const getPosts = async (currentPage: number, category: string): Promise<PostsResponse> => {
  const result = await API.get<{ data: PostsResponse }>(
    `/posts?category=${category}&currentPage=${currentPage}`
  );
  return result.data;
};

export const useGetPostsQuery = (currentPage: number, category: string) => {
  return useQuery(['posts-key'], () => getPosts(currentPage, category));
};
