import React from 'react';
import * as S from './style';

const ReportAdminPage = () => {
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
          <S.CTitleName>신고접수</S.CTitleName>
          {/* <S.AdminBtn>
            <S.AdminId>관리자 이름</S.AdminId>
            <S.AdminProfileImg>프로필이미지</S.AdminProfileImg>
          </S.AdminBtn> */}
        </S.ContentTitle>
        <S.PageNation>
          <S.PageNationBtn>
            <S.PageNationReport1Btn>신고접수목록</S.PageNationReport1Btn>
            <S.PageNationReport2Btn>허위신고계정</S.PageNationReport2Btn>
            <S.PageNationBar></S.PageNationBar>
          </S.PageNationBtn>
        </S.PageNation>
        <S.ReportList>
          <S.ListSet>
            <S.ListOrder1>▼ 처리 내용 순</S.ListOrder1>
            <S.ListOrder2>▼ 신고 건수 순</S.ListOrder2>
          </S.ListSet>
          <S.ListRowName>
            <S.ReportIdList>신고된 계정</S.ReportIdList>
            <S.ReportWarnList>누적 경고 수</S.ReportWarnList>
            <S.ReportAccrueList>누적 신고 수</S.ReportAccrueList>
            <S.ReportDetailList>신고된 항목</S.ReportDetailList>
            <S.ReportHandleList>처리 내용</S.ReportHandleList>
          </S.ListRowName>
          <S.ContentNationBar></S.ContentNationBar>
          <S.ListContentWrap>
            <S.ListOfLists>
              <S.ReportProfile>
                <S.ReportProfileImg></S.ReportProfileImg>
                <S.ReportPrifileId>신고된 계정 ID</S.ReportPrifileId>
              </S.ReportProfile>
              <S.ReportN>10</S.ReportN>
              <S.ReportDetailN>
                <S.ReportPostN>게시물10건/댓글2건</S.ReportPostN>
                {/* <S.ReportDate>2023-07-07</S.ReportDate> */}
              </S.ReportDetailN>
              <S.ReportContent>
                <S.ReportContentListSet>스팸</S.ReportContentListSet>
              </S.ReportContent>
              <S.ReportHandle>
                <S.ReportHandleListSet>블랙리스트 등록</S.ReportHandleListSet>
              </S.ReportHandle>
            </S.ListOfLists>
          </S.ListContentWrap>
        </S.ReportList>
      </S.Content>
    </S.Wrap>
  );
};

export default ReportAdminPage;
