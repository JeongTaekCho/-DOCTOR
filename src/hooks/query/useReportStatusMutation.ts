import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface ReportStatusData {
  id: number;
  status: string;
}

interface ReportStatusReturn {
  message: string;
}

const reportStatusChange = async (data: ReportStatusData): Promise<ReportStatusReturn> => {
  return API.put<ReportStatusReturn, ReportStatusData>('/admins/reports', data);
};

export const useReportStatusMutation = () => {
  return useMutation(reportStatusChange);
};
