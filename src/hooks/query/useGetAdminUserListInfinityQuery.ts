import { useInfiniteQuery } from '@tanstack/react-query';
import * as API from '../../api/index';
import { AdminUserResponse } from '../../pages/Admin/UserInfoPage/types';

const getAdminUser = async (
  search: string,
  userRole: string,
  order: string,
  blocked: string,
  page = 1
): Promise<AdminUserResponse> => {
  const result = await API.get<{ data: AdminUserResponse }>(
    `/admins/users?search=${search}&role=${userRole}&orderBy=${order}&blocked=${blocked}&currentPage=${page}`
  );
  return result.data;
};

export const useGetAdminUserListInfinityQuery = (
  search: string,
  userRole: string,
  order: string,
  blocked: string
) => {
  return useInfiniteQuery<AdminUserResponse>(
    ['infiniteAdminUserList', search, userRole, order, blocked],
    ({ pageParam }) => getAdminUser(search, userRole, order, blocked, pageParam),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages && lastPage.currentPage + 1;
      }
    }
  );
};
