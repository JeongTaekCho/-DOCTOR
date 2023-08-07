import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ConsultRequestData {
  vetEmail: string;
  message: string;
}

interface ConsultReturn {
  message: string;
}

const consultRequest = async (data: ConsultRequestData): Promise<ConsultReturn> => {
  return API.post<ConsultReturn, ConsultRequestData>('/chats/request', data);
};

export const useConsultRequestMutation = () => {
  return useMutation(consultRequest);
};
