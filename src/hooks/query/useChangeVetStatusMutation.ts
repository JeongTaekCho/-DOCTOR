import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangeVetStatusData {
  id: number;
  status: string;
  email: string;
}

interface ChangeVetStatusReturn {
  message: string;
}

const ChangeVetStatus = (data: ChangeVetStatusData) => {
  return API.put<ChangeVetStatusReturn, ChangeVetStatusData>('/admins/vet-requests/status', data);
};

export const useChangeVetStatusMutation = () => {
  return useMutation(ChangeVetStatus);
};
