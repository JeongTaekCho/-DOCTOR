import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ReactNode } from 'react';

export interface VetAuthListResponse {
  id: number;
  user_email: string;
  name: string;
  hospital_name: string;
  description: string;
  img_path: string;
  chat_count: number | null;
  grade: number | null;
  status: string;
  created_at: ReactNode | string;
  updated_at: ReactNode | string;
  deleted_at: null | Date | string;
}

const getVetAuthList = async (status: string): Promise<VetAuthListResponse[]> => {
  console.log(status);
  const result = await API.get<{ data: VetAuthListResponse[] }>(
    `/admins/vet-requests?status=${status}&`
  );
  return result.data;
};

export const useGetVetAuthListQuery = (status: string) => {
  return useQuery(['chatContents-key'], () => getVetAuthList(status));
};
