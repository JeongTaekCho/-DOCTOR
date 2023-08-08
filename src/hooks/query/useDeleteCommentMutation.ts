import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

const deleteComments = async (commentId: number): Promise<void> => {
  await API.delete<void>(`/comments/${commentId}`);
};

export const useDeleteCommentMutation = (commentId: number) => {
  const mutation = useMutation(() => deleteComments(commentId));
  return mutation;
};
