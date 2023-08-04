import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ReportPostData {
  post_id: number;
  reason: string;
}

interface ReportPostReturn {
  message: string;
}

const report = (data: ReportPostData) => {
  return API.post<ReportPostReturn, ReportPostData>('/posts/report', data);
};

export const useReportPostMutation = () => {
  return useMutation(report);
};
