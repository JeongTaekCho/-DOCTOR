import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ReportCommentResponse } from '../../pages/Admin/ReportCommentPage/types';

const getReportComment = async (status: string, page = 1): Promise<ReportCommentResponse> => {
  const result = await API.get<{ data: ReportCommentResponse }>(
    `/admins/report-comments?status=${status}&currentPage=${page}`
  );
  return result.data;
};

export const useGetReportCommentInfinityQuery = (status: string) => {
  return useInfiniteQuery<ReportCommentResponse>(
    ['infiniteReportComment'],
    ({ pageParam }) => getReportComment(status, pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages && lastPage.currentPage + 1;
      }
    }
  );
};
