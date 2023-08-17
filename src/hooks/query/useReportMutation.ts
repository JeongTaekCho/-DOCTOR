import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ReportData {
  reason: string;
}

interface ReportReturn {
  message: string;
}

const report = (data: ReportData) => {
  return API.post<ReportReturn, ReportData>('/posts/report', data);
};

export const useReportMutation = () => {
  return useMutation(report);
};
