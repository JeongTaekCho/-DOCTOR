import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangePost {
  title: string;
  body: string;
}

interface ChangePostReturn {
  message: string;
}

const changePost = async (data: ChangePost, postId: number): Promise<ChangePostReturn> => {
  return API.put<ChangePostReturn, ChangePost>(`/posts/${postId}`, data);
};

export const useChangePostMutation = (postId: number) => {
  const mutation = useMutation(['posts-key'], (data: ChangePost) => changePost(data, postId));
  return mutation;
};
