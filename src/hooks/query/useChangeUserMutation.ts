import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ChangeUserData {
  password?: string;
  nickname?: string;
  users?: File;
}

interface ChangeUserReturn {
  message: string;
}

const changeUser = async (data: ChangeUserData): Promise<ChangeUserReturn> => {
  return API.formPatch<ChangeUserReturn, ChangeUserData>('/users', data);
};

export const useChangeUserMutation = () => {
  return useMutation(changeUser);
};
