import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ReportCommentData {
  comment_id: number;
  reason: string;
}

interface ReportCommentReturn {
  message: string;
}

const report = (data: ReportCommentData) => {
  return API.post<ReportCommentReturn, ReportCommentData>('/comments/report', data);
};

export const useReportCommentMutation = () => {
  return useMutation(report);
};
