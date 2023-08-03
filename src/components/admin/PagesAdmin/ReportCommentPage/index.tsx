/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as S from './style';
import AdminLayout from '../../LayoutAdmin/PageLayout/NavbarAdmin';
import ReportAdminPagination from '../../LayoutAdmin/Button/LabelBtn/ReportLabelBtn';
import ListOfLists from '../../LayoutAdmin/ListSet/ReportList';
const AdminReportCommentPage = () => {
  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>신고 접수 - 댓글 신고</S.CTitleName>
            </S.ContentTitle>
            <ReportAdminPagination></ReportAdminPagination>
            <S.ReportList>
              <S.ListSet>
                <S.ListOrder>▼ 처리 내용 순</S.ListOrder>
                <S.ListOrder>▼ 오래된 순</S.ListOrder>
                <S.ListOrder>▼ 최신 순</S.ListOrder>
              </S.ListSet>
              <S.ListRowName>
                <S.ReportCommentList>신고된 글</S.ReportCommentList>
                <S.ReportDetailList>신고된 항목</S.ReportDetailList>
                <S.ReportIdList>작성자</S.ReportIdList>
                <S.ReportIdHandleList>작성자 관리</S.ReportIdHandleList>
                <S.ReportDateList>신고 일자</S.ReportDateList>
                <S.ReportCommentHandleList>처리 내용</S.ReportCommentHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <ListOfLists></ListOfLists>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminReportCommentPage;
