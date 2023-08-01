import { styled } from 'styled-components';

//-----------------------------------
//-----------------------------------
export const Wrap = styled.div``;
export const Content = styled.div`
  // 전체컨텐츠넓이
  width: 79.16%;
  margin-left: 20.83%;
`;
export const Container = styled.div`
  // 내부컨텐츠넓이
  width: 93.85%;
  margin: 0 auto;
`;

//-----------------------------------
//-----------------------------------
export const ContentTitle = styled.div`
  // 신고 접수 - 댓글 신고[]
  width: 100%;
`;

export const CTitleName = styled.div`
  // '신고 접수 - 댓글 신고'
  font-size: 2.5rem;
  font-weight: 600;
  color: #252733;
  margin-bottom: 4.3rem;
`;

//-----------------------------------
//-----------------------------------
export const ReportList = styled.div`
  width: 100%;
`;
export const ListSet = styled.div`
  // 처리내용순/오래된순/최신순 []
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #344054;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2.6rem;
`;
export const ListOrder = styled.div`
  // '▼ 처리내용순'/'▼ 오래된순'/'▼ 최신순'
  width: 15%;
`;

//-----------------------------------
//-----------------------------------
export const ListRowName = styled.div`
  width: 100%;
  display: flex;
  color: #778092;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1.4rem 0;
`;

export const ReportCommentList = styled.div`
  // '신고된 글'
  width: 20%;
`;
export const ReportDetailList = styled.div`
  // '신고된 항목'
  width: 15%;
`;
export const ReportIdList = styled.div`
  // '작성자'
  width: 20%;
`;
export const ReportIdHandleList = styled.div`
  // '작성자 관리'
  width: 15%;
`;
export const ReportDateList = styled.div`
  // '신고 일자'
  width: 15%;
`;
export const ReportCommentHandleList = styled.div`
  // '처리 내용'
  width: 15%;
`;

export const ContentNationBar = styled.div`
  display: flex;
  width: 100%;
  padding: 0.1rem 0 0.1rem 0;
  background-color: #c3c6ce;
`;

//-------------------------------
// 신고된 목록 리스트
//-------------------------------
export const ListContentWrap = styled.div`
  width: 100%;
`;

export const ListOfLists = styled.div`
  width: 100%;
  padding-left: 2%;
  display: flex;
  font-size: 1.2rem;
  border-bottom: 1px solid #e7e7e7;
  padding: 2.3rem 0;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const ReportProfile = styled.div`
  width: 30%;
  display: flex;
`;
export const ReportProfileImg = styled.div`
  border: #afafaf 0.2rem solid;
`;
export const ReportProfileId = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 5%;
  font-size: 1.4rem;
  font-weight: 600;
  color: #252733;
`;

export const ReportN = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #667085;
`;

export const ReportDetailN = styled(ReportN)``;

export const ReportPostN = styled.div`
  cursor: pointer;
`;

export const ReportDate = styled.div``;

export const ReportContent = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
export const ReportContentListSet = styled.div``;

export const ReportHandle = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  width: 70rem;
  padding: 25rem;
  background-color: #fff;
  border: 0.5rem solid #667085;
  border-radius: 20px;
  position: fixed;
  top: 30%;
  left: 35%;
  transform: translate() (-50%, -50%);
`;
export const ExitBtn = styled.div``;
