import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

const deletePost = async (postId: number): Promise<void> => {
  await API.delete<void>(`/posts/${postId}`);
};

export const useDeletePostMutation = (postId: number) => {
  const mutation = useMutation(() => deletePost(postId));
  return mutation;
};
