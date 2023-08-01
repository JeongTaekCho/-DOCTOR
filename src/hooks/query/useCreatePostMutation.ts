import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface CreatePostRequestData {
  category: string;
  title: string;
  body: string;
}

interface CreatePostReturn {
  message: string;
}

const createPost = async (data: CreatePostRequestData): Promise<CreatePostReturn> => {
  return API.post<CreatePostReturn, CreatePostRequestData>('/posts', data);
};

export const useCreatePostMutation = () => {
  return useMutation(createPost);
};
