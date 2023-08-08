import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { Key, ReactNode } from 'react';

export interface VetAuthListResponse {
  id: Key | null | undefined;
  currentPage: number;
  totalPages: number;
  data: {
    id: number;
    user_email: string;
    name: string;
    hospital_name: string;
    description: string;
    region: string;
    img_path: string;
    chat_count: number | null;
    grade: number | null;
    status: string;
    created_at: ReactNode | string;
    updated_at: ReactNode | string;
    deleted_at: null | Date | string;
    users: {
      img_path: string;
    };
  }[];
}

const getVetAuthList = async (
  search: string,
  order: string,
  status: string,
  page: number = 1,
  activeTab: boolean
): Promise<VetAuthListResponse> => {
  const queryStatus = activeTab ? 'accepted' : 'pending';
  const result = await API.get<VetAuthListResponse>(
    `/admins/vet-requests?search=${search}&orderBy=${order}&status=${queryStatus}&currentPage=${page}`
  );
  return result;
};

export const useGetVetAuthListInfinityQuery = (
  search: string,
  order: string,
  status: string,
  activeTab: boolean
) => {
  return useInfiniteQuery(
    ['vetAuthList', search, order, status, activeTab],
    ({ pageParam }) => getVetAuthList(search, order, status, pageParam, activeTab),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined;
      }
    }
  );
};
