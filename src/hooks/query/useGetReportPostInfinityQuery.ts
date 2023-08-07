import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ReportPostResponse } from '../../pages/Admin/ReportPostPage/types';

const getReportPost = async (status: string, page = 1): Promise<ReportPostResponse> => {
  const result = await API.get<{ data: ReportPostResponse }>(
    `/admins/report-posts?status=${status}&currentPage=${page}`
  );
  return result.data;
};

export const useGetReportPostInfinityQuery = (status: string) => {
  return useInfiniteQuery<ReportPostResponse>(
    ['infiniteReportPost'],
    ({ pageParam }) => getReportPost(status, pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages && lastPage.currentPage + 1;
      }
    }
  );
};
