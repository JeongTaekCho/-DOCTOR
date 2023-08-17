import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { VetResponse } from '../../pages/Ai/types';

const getTopVets = async (): Promise<VetResponse[]> => {
  const result = await API.get<{ data: VetResponse[] }>('/diseases/vets');
  return result.data;
};

export const useGetTopVetsQuery = () => {
  return useQuery(['topVetList-key'], getTopVets);
};
