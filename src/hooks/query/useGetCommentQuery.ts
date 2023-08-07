import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { UserCommentDetail } from '../../types/postType';

const getComment = async (postId: number): Promise<UserCommentDetail> => {
  const result = await API.get<{ data: UserCommentDetail }>(`/comments/${postId}`);
  return result.data;
};

export const useGetCommentQuery = (postId: number) => {
  return useQuery(['posts-comment-key', postId], () => getComment(postId));
};
