import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChatReviewData {
  id: number | undefined;
  grade: number;
}

interface ChatReviewReturn {
  message: string;
}

const chatReview = async (data: ChatReviewData): Promise<ChatReviewReturn> => {
  return API.patch<ChatReviewReturn, ChatReviewData>('/chats/rating', data);
};

export const useChatReviewMutation = () => {
  return useMutation(chatReview);
};
