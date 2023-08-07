import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { AdminUserResponse } from '../../pages/Admin/UserInfoPage/types';

const getAdminUser = async (
  search: string,
  userRole: string,
  order: string,
  status: string,
  page = 1
): Promise<AdminUserResponse> => {
  const result = await API.get<{ data: AdminUserResponse }>(
    `/admins/users?search=${search}&role=${userRole}&orderBy=${order}&status=${status}&currentPage=${page}`
  );
  return result.data;
};

export const useGetAdminUserListInfinityQuery = (
  search: string,
  userRole: string,
  order: string,
  status: string
) => {
  return useInfiniteQuery<AdminUserResponse>(
    ['infiniteAdminUserList', search, userRole, order, status],
    ({ pageParam }) => getAdminUser(search, userRole, order, status, pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages && lastPage.currentPage + 1;
      }
    }
  );
};
