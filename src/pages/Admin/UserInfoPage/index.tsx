/* eslint-disable no-unused-vars */
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import { useGetAdminUserListInfinityQuery } from '../../../hooks/query/useGetAdminUserListInfinityQuery';
import UserInfoList from '../../../components/admin/LayoutAdmin/ListSet/UserInfoList';
import useDebounce from '../../../hooks/util/useDebounce';
import Loading from '../../../components/commons/Loading';
import InfiniteScroll from 'react-infinite-scroller';
import adminAuth from '../../../components/commons/AdminAuth';

const AdminUserInfoPage = () => {
  const [search, setSearch] = useState('');
  const [userRole, setUserRole] = useState('');
  const [order, setOrder] = useState('desc');
  const [status, setStatus] = useState('');

  const debounceSearch = useDebounce(search, 500);

  const {
    data: adminUserData,
    refetch: adminUserRefetch,
    fetchNextPage,
    hasNextPage
  } = useGetAdminUserListInfinityQuery(debounceSearch, userRole, order, status);

  const adminUserList = adminUserData ? adminUserData.pages.flatMap(page => page.data) : [];

  // 검색어 입력 핸들러
  const handleChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleChangeRole = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setUserRole(e.target.value);
    adminUserRefetch();
  }, []);

  const handleChangeOrder = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
    adminUserRefetch();
  }, []);

  const handleChangeBlocked = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    adminUserRefetch();
  }, []);

  useEffect(() => {
    adminUserRefetch();
  }, [debounceSearch, userRole, order, status]);

  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>유저 관리</S.CTitleName>
            </S.ContentTitle>
            <S.PageNation>
              <S.PageNationBtn>
                <S.PageNationBox>
                  <S.WaitingReportBtn to="/admin-userinfo">전체 유저</S.WaitingReportBtn>
                </S.PageNationBox>
                <S.PageNationBar></S.PageNationBar>
              </S.PageNationBtn>
            </S.PageNation>
            <S.ReportList>
              <S.ListSet>
                <S.SelectContainer>
                  <S.SelectBox onChange={handleChangeRole}>
                    <option value="">구분(전체) ▼</option>
                    <option value="user">일반 유저 ▼</option>
                    <option value="vet">수의사 유저 ▼</option>
                  </S.SelectBox>
                  <S.SelectBox onChange={handleChangeBlocked}>
                    <option value="">상태(전체) ▼</option>
                    <option value="blocked">정지 ▼</option>
                    <option value="deleted">탈퇴 ▼</option>
                  </S.SelectBox>
                  <S.SelectBox onChange={handleChangeOrder}>
                    <option value="desc">최신 순 ▼</option>
                    <option value="asc">오래된 순 ▼</option>
                  </S.SelectBox>
                </S.SelectContainer>
                <S.ListOrder2>
                  <input
                    type="text"
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="유저명 또는 이메일을 입력해주세요."
                  />
                </S.ListOrder2>
              </S.ListSet>
              <S.ListRowName>
                <S.ReportIdList>No.</S.ReportIdList>
                <S.ReportWarnList>이메일</S.ReportWarnList>
                <S.ReportAccrueList>닉네임</S.ReportAccrueList>
                <S.ReportDetailList>가입 일자</S.ReportDetailList>
                <S.ReportHandleList>계정 상태</S.ReportHandleList>
                <S.ReportHandleList>상태 변경</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <InfiniteScroll
                  hasMore={hasNextPage}
                  loadMore={() => fetchNextPage()}
                  loader={<Loading />}
                >
                  {adminUserList?.map((user, index) => (
                    <UserInfoList
                      key={user?.email}
                      user={user}
                      index={index}
                      adminUserRefetch={adminUserRefetch}
                    />
                  ))}
                </InfiniteScroll>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default adminAuth(AdminUserInfoPage);
