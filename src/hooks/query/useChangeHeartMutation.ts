import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangeHeartData {
  postId: number;
  userId: string;
}

interface ChangeHeartReturn {
  message: string;
}

const changeHeart = async (data: ChangeHeartData): Promise<ChangeHeartReturn> => {
  return API.patch<ChangeHeartReturn, ChangeHeartData>('/posts/like', data);
};

export const useChangeHeartMutation = () => {
  return useMutation(changeHeart);
};
