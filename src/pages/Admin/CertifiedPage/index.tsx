import React, { useEffect, useState } from 'react';
import * as S from './style';
import AdminLayout from '../../../components/admin/LayoutAdmin/PageLayout/NavbarAdmin';
import CertifiedListLayout from '../../../components/admin/LayoutAdmin/ListSet/CertifiedList';
import { useGetVetAuthListQuery } from '../../../hooks/query/useGetVetAuthListQuery';
//import axios from 'axios';

const AdminCertifiedPage = () => {
  const [activeTab, setActiveTab] = useState(false);

  const { data, refetch } = useGetVetAuthListQuery(activeTab ? 'accepted' : 'pending');

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
                <S.ListOrder>▼ 오래된 순</S.ListOrder>
                <S.ListOrder>▼ 최신 순</S.ListOrder>
                <S.ListOrder>▼ 처리 상태 순</S.ListOrder>
              </S.ListSet>
              {!activeTab ? (
                <>
                  <S.ListRowName>
                    <S.ReportIdList>수의사 인증 신청 대기 계정</S.ReportIdList>
                    <S.ReportWarnList>요청 일자</S.ReportWarnList>
                    <S.ReportAccrueList></S.ReportAccrueList>
                    <S.ReportDetailList>인증 자료</S.ReportDetailList>
                    <S.ReportHandleList>처리 상태</S.ReportHandleList>
                  </S.ListRowName>
                  <S.ContentNationBar></S.ContentNationBar>
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
                </>
              )}
              {data?.map(user => (
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
