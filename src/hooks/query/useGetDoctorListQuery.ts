import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getDoctorList = async (areaName: string, search: string): Promise<any> => {
  return API.get(`/chats/vet-lists?region=${areaName}&search=${search}`);
};

export const useGetDoctorListQuery = (areaName: string, search: string) => {
  return useQuery(['doctorList-key'], () => getDoctorList(areaName, search));
};
