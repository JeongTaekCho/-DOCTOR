import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

interface VetResponse {
  id: number;
  user_email: string;
  name: string;
  hospital_name: string;
  description: string;
  region: string;
  img_path: string;
  chat_count: null;
  grade: number;
  status: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
}

const getTopVets = async (): Promise<VetResponse[]> => {
  const result = await API.get<{ data: VetResponse[] }>('/diseases/vets');
  return result.data;
};

export const useGetTopVetsQuery = () => {
  return useQuery(['topVetList-key'], getTopVets);
};
