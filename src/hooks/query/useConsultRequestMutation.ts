import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ConsultRequestData {
  vetEmail: string;
  content: string;
}

interface ConsultRequestReturn {
  message: string;
}

const consultRequest = async (data: ConsultRequestData): Promise<ConsultRequestReturn> => {
  return API.post<ConsultRequestReturn, ConsultRequestData>('/chats/request', data);
};

export const useConsultRequestMutation = () => {
  return useMutation(consultRequest);
};
