/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import AdminLayout from '../../LayoutAdmin/PageLayout/NavbarAdmin';
import ReportAdminPagination from '../../LayoutAdmin/Button/LabelBtn/UserInfoLabelBtn';
import ListOfLists from '../../LayoutAdmin/ListSet/UserInfoList';

const AdminUserInfoPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  // 검색어 입력 핸들러
  const handleSearch = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchKeyword(event.target.value);
  };
  return (
    <AdminLayout>
      <S.Wrap>
        <S.Content>
          <S.Container>
            <S.ContentTitle>
              <S.CTitleName>유저 관리</S.CTitleName>
            </S.ContentTitle>
            <ReportAdminPagination></ReportAdminPagination>
            <S.ReportList>
              <S.ListSet>
                <S.ListOrder2>
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={handleSearch}
                    placeholder="아이디 검색"
                  />
                </S.ListOrder2>

                <S.ListOrder>▼ 처리 순</S.ListOrder>
                <S.ListOrder>▼ 최근 순</S.ListOrder>
                <S.ListOrder>▼ 오래된 순</S.ListOrder>
              </S.ListSet>
              <S.ListRowName>
                <S.ReportIdList>번호</S.ReportIdList>
                <S.ReportWarnList>아이디</S.ReportWarnList>
                <S.ReportAccrueList>닉네임</S.ReportAccrueList>
                <S.ReportDetailList>가입 일자</S.ReportDetailList>
                <S.ReportHandleList>계정 상태 및 처리</S.ReportHandleList>
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

export default AdminUserInfoPage;
