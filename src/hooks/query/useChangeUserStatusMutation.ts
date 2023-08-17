import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangeUserStatusData {
  email: string;
  blocked?: string;
  deleted?: string;
}

interface ChangeUserStatusReturn {
  message: string;
}

const changeUserStatus = async (data: ChangeUserStatusData): Promise<ChangeUserStatusReturn> => {
  return API.patch<ChangeUserStatusReturn, ChangeUserStatusData>('/admins/users', data);
};

export const useChangeUserStatusMutation = () => {
  return useMutation(changeUserStatus);
};
