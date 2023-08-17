import React, { useEffect, useState } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import { useGetVetAuthListInfinityQuery } from '../../../hooks/query/useGetVetAuthListInfinityQuery';
import CertifiedListLayout from '../../../components/admin/LayoutAdmin/ListSet/CertifiedList';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../../../components/commons/Loading';
import adminAuth from '../../../components/commons/AdminAuth';

const AdminCertifiedPage = () => {
  const [activeTab, setActiveTab] = useState(false);

  const {
    data: vetAuthListData,
    refetch: vetAuthRefetch,
    fetchNextPage,
    hasNextPage
  } = useGetVetAuthListInfinityQuery(activeTab);

  const vetAuthList = vetAuthListData ? vetAuthListData.pages.flatMap(page => page.data) : [];

  const handleClickBtn1 = () => {
    setActiveTab(false);
  };
  const handleClickBtn2 = () => {
    setActiveTab(true);
  };

  useEffect(() => {
    vetAuthRefetch();
  }, [activeTab]);

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
              {/* <S.ListSet>
                <S.SelectBox onChange={handleChangeOrder}>
                  <option value="desc">최신 순 ▼</option>
                  <option value="asc">오래된 순 ▼</option>
                </S.SelectBox>
                <S.SelectBox onChange={handleChangeBlocked}>
                  <option value="accepted">인증 ▼</option>
                  <option value="rejected">반려 ▼</option>
                  <option value="all">전체 ▼</option>
                </S.SelectBox>
                <S.ListOrder2>
                  <input
                    type="text"
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="유저명 또는 이메일을 입력해주세요."
                  />
                </S.ListOrder2>
              </S.ListSet> */}
              <S.ListRowName>
                <S.ReportId1List>No.</S.ReportId1List>
                <S.ReportIdList>
                  {activeTab ? '수의사 인증 완료 계정' : '수의사 인증 대기 계정'}
                </S.ReportIdList>
                <S.ReportWarnList>요청 일자</S.ReportWarnList>
                <S.ReportAccrueList>{activeTab ? '인증 일자' : ''}</S.ReportAccrueList>
                <S.ReportDetailList>인증 자료</S.ReportDetailList>
                <S.ReportHandleList>처리 상태</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>

              <S.ListContentWrap>
                <InfiniteScroll
                  hasMore={hasNextPage}
                  loadMore={() => {
                    fetchNextPage();
                  }}
                  loader={<Loading />}
                >
                  {vetAuthList?.length > 0 ? (
                    vetAuthList?.map((user, index) => (
                      <CertifiedListLayout
                        key={user.id}
                        user={user}
                        activeTab={activeTab}
                        index={index}
                        vetAuthRefetch={vetAuthRefetch}
                      />
                    ))
                  ) : (
                    <S.ErrorMent>해당되는 항목이 존재하지 않습니다.</S.ErrorMent>
                  )}
                </InfiniteScroll>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default adminAuth(AdminCertifiedPage);
