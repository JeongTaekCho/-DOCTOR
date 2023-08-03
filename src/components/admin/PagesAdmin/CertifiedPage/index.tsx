import React, { useState } from 'react';
import * as S from './style';
//import axios from 'axios';
import AdminLayout from '../../LayoutAdmin/PageLayout/NavbarAdmin';
import ListOfLists from '../../LayoutAdmin/ListSet/CertifiedList';

const AdminCertifiedPage = () => {
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
              <S.CTitleName>수의사 인증 접수</S.CTitleName>
            </S.ContentTitle>

            <S.PageNation>
              <S.PageNationBtn>
                <S.PageNationBox>
                  <S.WaitingReportBtn
                    onClick={handleClickBtn1}
                    active={activeTab === 'waiting'}
                    // activeTab={activeTab}
                  >
                    인증 대기 목록
                  </S.WaitingReportBtn>
                  <S.TreatReportBtn
                    onClick={handleClickBtn2}
                    active={activeTab === 'treat'}
                    // activeTab={activeTab}
                  >
                    인증 목록
                  </S.TreatReportBtn>
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
              <S.ListRowName>
                <S.ReportIdList>수의사 인증 신청 대기 계정</S.ReportIdList>
                <S.ReportWarnList>요청 일자</S.ReportWarnList>
                <S.ReportAccrueList>승인 일자</S.ReportAccrueList>
                <S.ReportDetailList>인증 자료</S.ReportDetailList>
                <S.ReportHandleList>처리 상태</S.ReportHandleList>
              </S.ListRowName>
              <S.ContentNationBar></S.ContentNationBar>
              <S.ListContentWrap>
                <ListOfLists />
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminCertifiedPage;
