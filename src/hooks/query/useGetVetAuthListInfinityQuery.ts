import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { VetAuthListResponse } from '../../pages/Admin/CertifiedPage/types';

const getVetAuthList = async (
  page: number = 1,
  activeTab: boolean
): Promise<VetAuthListResponse> => {
  const queryStatus = activeTab ? 'accepted' : 'pending';
  const result = await API.get<{ data: VetAuthListResponse }>(
    `/admins/vet-requests?status=${queryStatus}&currentPage=${page}`
  );
  return result.data;
};

export const useGetVetAuthListInfinityQuery = (activeTab: boolean) => {
  return useInfiniteQuery<VetAuthListResponse>(
    ['infiniteVetAuthList', activeTab],
    ({ pageParam }) => getVetAuthList(pageParam, activeTab),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined;
      }
    }
  );
};
