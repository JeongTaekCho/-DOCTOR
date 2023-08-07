import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { DoctorListResponse } from '../../pages/Chats/types';

const getDoctorList = async (areaName: string, search: string, page = 1) => {
  const result: any = await API.get(
    `/chats/vet-lists?region=${areaName || ''}${search && `&search=${search}`}&currentPage=${page}`
  );
  return result.data;
};

export const useChatListInfinityQuery = (areaName: string, debounceSearchValue: string) => {
  return useInfiniteQuery<DoctorListResponse>(
    ['infiniteDoctorList', areaName, debounceSearchValue],
    ({ pageParam }) => getDoctorList(areaName, debounceSearchValue, pageParam),
    {
      staleTime: 10000,
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages && lastPage.currentPage + 1;
      }
    }
  );
};
