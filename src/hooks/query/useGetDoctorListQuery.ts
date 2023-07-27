import { useQuery } from '@tanstack/react-query';
import * as API from '../../api/index';

const getDoctorList = async (areaName: string, search: string): Promise<any> => {
  console.log(areaName, search);
  return API.get(`/chats/vet-lists?region=${''}&currentPage=1`);
};

export const useGetDoctorListQuery = (areaName: string, search: string) => {
  return useQuery(['doctorList-key'], () => getDoctorList(areaName, search));
};
