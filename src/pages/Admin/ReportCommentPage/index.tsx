/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import { useGetReportCommentListQuery } from '../../../hooks/query/useGetReportCommentListQuery';
import ReportCommentLayout from '../../../components/admin/LayoutAdmin/ListSet/ReportList';

const AdminReportCommentPage = () => {
  const [activeTab, setActiveTab] = useState(false);
  const [search, setSearch] = useState('');

  const [order, setOrder] = useState('desc');
  
  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { data = [], refetch } = useGetReportCommentListQuery(activeTab ? 'accepted' : 'pending');
  const handleClickBtn1 = () => {
    setActiveTab(false);
  };
  const handleClickBtn2 = () => {
    setActiveTab(true);
  };

  useEffect(() => {
    refetch();
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
                <S.PageNationBar activeTab={activeTab}></S.PageNationBar>
              </S.PageNationBtn>
            </S.PageNation>
            <S.ReportList>
              <S.ListSet>
                <S.SelectBox onChange={handleChangeOrder}>
                  <option value="desc">최신 순 ▼</option>
                  <option value="asc">오래된 순 ▼</option>
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
                    <S.ReportIdList>신고된 글</S.ReportIdList>
                    <S.ReportWarnList>신고된 항목</S.ReportWarnList>
                    <S.ReportAccrueList>작성자</S.ReportAccrueList>
                    <S.ReportDetailList>작성자 관리</S.ReportDetailList>
                    <S.ReportHandleList>신고 일자</S.ReportHandleList>
                    <S.ReportHandleList>처리 내용</S.ReportHandleList>
                  </S.ListRowName>
                  <S.ContentNationBar></S.ContentNationBar>
                  <S.ListContentWrap></S.ListContentWrap>
                </>
              ) : (
                <>
                  <S.ListRowName>
                    <S.ReportIdList>신고된 글</S.ReportIdList>
                    <S.ReportWarnList>신고된 항목</S.ReportWarnList>
                    <S.ReportAccrueList>작성자</S.ReportAccrueList>
                    <S.ReportDetailList>작성자 관리</S.ReportDetailList>
                    <S.ReportHandleList>신고 일자</S.ReportHandleList>
                    <S.ReportHandleList>처리 내용</S.ReportHandleList>
                  </S.ListRowName>
                  <S.ContentNationBar></S.ContentNationBar>
                  <S.ListContentWrap></S.ListContentWrap>
                </>
              )}
              {data?.map(user => (
                <S.ListContentWrap key={user.id}>
                  <ReportCommentLayout user={user} activeTab={activeTab} />
                </S.ListContentWrap>
              ))}
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminReportCommentPage;
