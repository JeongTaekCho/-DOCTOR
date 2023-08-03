/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import AdminLayout from '../../LayoutAdmin/PageLayout/NavbarAdmin';
import ListOfLists from '../../LayoutAdmin/ListSet/ReportList';
const AdminReportPostPage = () => {
  const [activeTab, setActiveTab] = useState('waiting');

  const handleClickBtn1 = () => {
    setActiveTab('waiting');
  };

  const handleClickBtn2 = () => {
    setActiveTab('treat');
  };
  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>신고 접수 - 게시글 신고</S.CTitleName>
            </S.ContentTitle>
            <S.PageNation>
            <S.PageNationBtn>
              <S.PageNationBox>
                <S.WaitingReportBtn onClick={handleClickBtn1} active={activeTab === 'waiting'}>
                  접수 목록
                </S.WaitingReportBtn>
                <S.TreatReportBtn onClick={handleClickBtn2} active={activeTab === 'treat'}>
                  처리 목록
                </S.TreatReportBtn>
              </S.PageNationBox>
              <S.PageNationBar activeTab={activeTab}></S.PageNationBar>
            </S.PageNationBtn>
      </S.PageNation>
            <S.ReportList>
              <S.ListSet>
                <S.ListOrder>▼ 처리 내용 순</S.ListOrder>
                <S.ListOrder>▼ 오래된 순</S.ListOrder>
                <S.ListOrder>▼ 최신 순</S.ListOrder>
              </S.ListSet>
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
                <ListOfLists></ListOfLists>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminReportPostPage;
