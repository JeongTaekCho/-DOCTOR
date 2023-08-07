import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { ReactNode } from 'react';

export interface ReportCommentListResponse {
  id: number;
  email: string;
  nickname: string;
  content: string;
  created_at: ReactNode | string;
  title: string;
  deleted_at: null | Date | string;
}

const getReportCommentList = async (status: string): Promise<ReportCommentListResponse[]> => {
  const result = await API.get<{ data: ReportCommentListResponse[] }>(
    `/admins/report-posts?status=${status}&`
  );
  return result.data;
};

export const useGetReportCommentListQuery = (status: string) => {
  return useQuery(['reportCommentList', status], () => getReportCommentList(status));
};
