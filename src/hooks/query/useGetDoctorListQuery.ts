import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getDoctorList = async (): Promise<any> => {
  return API.get('/chats/vet-lists');
};

export const useGetDoctorListQuery = () => {
  return useQuery(['user-key'], getDoctorList);
};
