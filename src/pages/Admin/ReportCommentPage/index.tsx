import React, { useEffect, useState } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import { useGetReportCommentInfinityQuery } from '../../../hooks/query/useGetReportCommentInfinityQuery';
import ReportCommentLayout from '../../../components/admin/LayoutAdmin/ListSet/ReportCommentList';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../../../components/commons/Loading';
import adminAuth from '../../../components/commons/AdminAuth';

const AdminReportCommentPage = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const {
    data: reportCommentData,
    refetch: reportCommentRefetch,
    fetchNextPage,
    hasNextPage
  } = useGetReportCommentInfinityQuery(activeTab);

  const reportCommentList = reportCommentData
    ? reportCommentData.pages.flatMap(page => page.data)
    : [];

  const handleClickBtn1 = () => {
    setActiveTab('pending');
  };

  const handleClickBtn2 = () => {
    setActiveTab('completed');
  };

  useEffect(() => {
    reportCommentRefetch();
  }, [activeTab]);

  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>신고 접수 - 댓글 신고</S.CTitleName>
            </S.ContentTitle>
            <S.PageNation>
              <S.PageNationBtn>
                <S.PageNationBox>
                  <S.WaitingReportBtn onClick={handleClickBtn1}>접수 목록</S.WaitingReportBtn>
                  <S.TreatReportBtn onClick={handleClickBtn2}>처리 목록</S.TreatReportBtn>
                </S.PageNationBox>
                <S.PageNationBar activetab={activeTab}></S.PageNationBar>
              </S.PageNationBtn>
            </S.PageNation>
            <S.ReportList>
              <S.ListRowName>
                <S.ReportIdList>신고된 글</S.ReportIdList>
                <S.ReportWarnList>신고된 항목</S.ReportWarnList>
                <S.ReportAccrueList>작성자</S.ReportAccrueList>
                <S.ReportDetailList>작성자 관리</S.ReportDetailList>
                <S.ReportHandleList>신고 일자</S.ReportHandleList>
                <S.ReportHandleList>처리 내용</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <InfiniteScroll
                  hasMore={hasNextPage}
                  loadMore={() => fetchNextPage()}
                  loader={<Loading />}
                >
                  {reportCommentList.length > 0 ? (
                    reportCommentList?.map(data => (
                      <ReportCommentLayout
                        key={data?.reports?.id}
                        data={data}
                        reportCommentRefetch={reportCommentRefetch}
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

export default adminAuth(AdminReportCommentPage);
