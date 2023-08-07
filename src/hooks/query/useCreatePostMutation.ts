import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface CreatePostRequestData {
  category: string;
  title: string;
  body: string;
}

interface CreatePostReturn {
  data: {
    author_email: string;
    body: string;
    category: string;
    created_at: Date;
    deleted_at: Date | null;
    id: number;
    like: number;
    title: string;
    updated_at: Date | null;
  };
}

const createPost = async (data: CreatePostRequestData): Promise<CreatePostReturn> => {
  return API.post<CreatePostReturn, CreatePostRequestData>('/posts', data);
};

export const useCreatePostMutation = () => {
  return useMutation(createPost);
};
