import React, { ChangeEvent, useEffect, useState, useMemo } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import useDebounce from '../../../hooks/util/useDebounce';
//import UserInfoList from '../../../components/admin/LayoutAdmin/ListSet/UserInfoList';
import CertifiedListLayout from '../../../components/admin/LayoutAdmin/ListSet/CertifiedList';
import { useGetVetAuthListQuery } from '../../../hooks/query/useGetVetAuthListQuery';
//import InfiniteScroll from 'react-infinite-scroller';

const AdminCertifiedPage = () => {
  //작성 부분
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('desc');
  const [status, setStatus] = useState('');
  const debounceSearch = useDebounce(search, 500);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [activeTab, setActiveTab] = useState(false);
  const { data, refetch } = useGetVetAuthListQuery(activeTab ? 'accepted' : 'pending');

  const filteredData = useMemo(() => {
    return data?.filter(user => user.status === statusFilter);
  }, [data, statusFilter]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };
  const handleChangeBlocked = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {}, [debounceSearch, order, status, refetch]);

  const handleClickBtn1 = () => {
    setActiveTab(false);
    setStatusFilter('pending');
  };

  const handleClickBtn2 = () => {
    setActiveTab(true);
    setStatusFilter('accepted');
  };

  useEffect(() => {
    refetch();
  }, [activeTab, statusFilter, refetch]);

  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>수의사 인증 접수</S.CTitleName>
            </S.ContentTitle>

            <S.PageNation>
              <S.PageNationBtn>
                <S.PageNationBox>
                  <S.WaitingReportBtn onClick={handleClickBtn1}>인증 대기 목록</S.WaitingReportBtn>
                  <S.TreatReportBtn onClick={handleClickBtn2}>인증 완료 목록</S.TreatReportBtn>
                </S.PageNationBox>

                <S.PageNationBar activeTab={activeTab}></S.PageNationBar>
              </S.PageNationBtn>
            </S.PageNation>
            <S.ReportList>
              <S.ListSet>
                {/*  */}
                <S.SelectBox onChange={handleChangeOrder}>
                  <option value="desc">최신 순 ▼</option>
                  <option value="asc">오래된 순 ▼</option>
                </S.SelectBox>
                <S.SelectBox onChange={handleChangeBlocked}>
                  <option value="">대기 ▼</option>
                  <option value="blocked">인증 ▼</option>
                  {/*blocked 네임변경하기 */}
                  <option value="deleted">삭제 ▼</option>
                  <option value="deleted">전체 ▼</option>
                  {/*deleted 네임변경하기 */}
                </S.SelectBox>
                <S.ListOrder2>
                  <input
                    type="text"
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="유저명 또는 이메일을 입력해주세요."
                  />
                </S.ListOrder2>
              </S.ListSet>
              {!activeTab ? (
                <>
                  <S.ListRowName>
                    <S.ReportId1List>No.</S.ReportId1List>
                    <S.ReportIdList>수의사 인증 신청 대기 계정</S.ReportIdList>
                    <S.ReportWarnList>요청 일자</S.ReportWarnList>
                    <S.ReportAccrueList></S.ReportAccrueList>
                    <S.ReportDetailList>인증 자료</S.ReportDetailList>
                    <S.ReportHandleList>처리 상태</S.ReportHandleList>
                  </S.ListRowName>
                  <S.ContentNationBar></S.ContentNationBar>
                  <S.ListContentWrap></S.ListContentWrap>
                </>
              ) : (
                <>
                  <S.ListRowName>
                    <S.ReportIdList>수의사 인증 완료 계정</S.ReportIdList>
                    <S.ReportWarnList>요청 일자</S.ReportWarnList>
                    <S.ReportAccrueList>승인 일자</S.ReportAccrueList>
                    <S.ReportDetailList>인증 자료</S.ReportDetailList>
                    <S.ReportHandleList>처리 상태</S.ReportHandleList>
                  </S.ListRowName>
                  <S.ContentNationBar></S.ContentNationBar>
                  {data?.map(user => {
                    <S.ListContentWrap key={user.id}>
                      <CertifiedListLayout user={user} activeTab={activeTab} />
                    </S.ListContentWrap>;
                  })}
                </>
              )}
              {filteredData?.map(user => (
                <S.ListContentWrap key={user.id}>
                  <CertifiedListLayout user={user} activeTab={activeTab} />
                </S.ListContentWrap>
              ))}
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminCertifiedPage;
