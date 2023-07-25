import React from 'react';
import * as S from './style';

const CertifiedAdminPage = () => {
  return (
    <S.Wrap>
      <S.Nav>
        <S.NavTitle>
          <S.TitleName>관리자 페이지</S.TitleName>
        </S.NavTitle>
        <S.NavMenu>
          <S.MenuName>신고 접수</S.MenuName>
        </S.NavMenu>
        <S.NavMenu>
          <S.MenuName>수의사 인증 접수</S.MenuName>
        </S.NavMenu>
        <S.NavMenu>{/* <S.MenuName> ← </S.MenuName> */}</S.NavMenu>
      </S.Nav>
      <S.Content>
        <S.ContentTitle>
          <S.CTitleName>수의사 인증 접수</S.CTitleName>
          {/* <S.AdminBtn>
            <S.AdminId>관리자 이름</S.AdminId>
            <S.AdminProfileImg>프로필이미지</S.AdminProfileImg>
          </S.AdminBtn> */}
        </S.ContentTitle>
        <S.PageNation>
          <S.PageNationBtn>
            <S.PageNationReport1Btn>인증 대기 목록</S.PageNationReport1Btn>
            <S.PageNationReport2Btn>인증 완료 목록</S.PageNationReport2Btn>
            <S.PageNationBar></S.PageNationBar>
          </S.PageNationBtn>
        </S.PageNation>
        <S.ReportList>
          <S.ListSet>
            <S.ListOrder1>▼ 요청 일자 순</S.ListOrder1>
            <S.ListOrder2>▼ 승인 일자 순</S.ListOrder2>
            <S.ListOrder3>▼ 처리 상태 순</S.ListOrder3>
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
            <S.ListOfLists>
              <S.ReportProfile>
                <S.ReportProfileImg></S.ReportProfileImg>
                <S.ReportPrifileId>인증 신청 계정 ID</S.ReportPrifileId>
              </S.ReportProfile>
              <S.ReportN>2023-07-20</S.ReportN>
              <S.ReportDetailN>
                <S.ReportPostN>2023-07-25</S.ReportPostN>
                {/* <S.ReportDate>2023-07-07</S.ReportDate> */}
              </S.ReportDetailN>
              <S.ReportContent>
                <S.ReportContentListSet></S.ReportContentListSet>
              </S.ReportContent>
              <S.ReportHandle>
                <S.ReportHandleListSet>승인 완료</S.ReportHandleListSet>
              </S.ReportHandle>
            </S.ListOfLists>
          </S.ListContentWrap>
        </S.ReportList>
      </S.Content>
    </S.Wrap>
  );
};

export default CertifiedAdminPage;
