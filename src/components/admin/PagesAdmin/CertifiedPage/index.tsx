/* eslint-disable quotes */
import React from 'react';
import * as S from './style';
//import ProfileImg from '../../../commons/ProfileImg';
import AdminLayout from '../../LayoutAdmin/PageLayout/NavbarAdmin';
import AdminPagination from '../../LayoutAdmin/Button/LabelBtn/CertifiedLabelBtn';
//import Select from '../../LayoutAdmin/Button/UserManageSelectBtn';
import ListOfLists from '../../LayoutAdmin/ListSet/CertifiedList';
const AdminCertifiedPage = () => {
  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>수의사 인증 접수</S.CTitleName>
            </S.ContentTitle>

            <AdminPagination></AdminPagination>
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
                <ListOfLists></ListOfLists>
              </S.ListContentWrap>
            </S.ReportList>
          </S.Container>
        </S.Content>
      </S.Wrap>
    </AdminLayout>
  );
};

export default AdminCertifiedPage;
