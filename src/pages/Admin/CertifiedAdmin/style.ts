import { styled } from 'styled-components';

export const Wrap = styled.div``;

export const Container = styled.div`
  width: 93.85%;
  margin: 0 auto;
`;

// ---

//----------------------------------
// 우측 컨텐츠 내용 부분
//----------------------------------
export const Content = styled.div`
  width: 79.16%;
  margin-left: 20.83%;
`;

export const ContentTitle = styled.div`
  width: 100%;
  //background-color: white;
`;

export const CTitleName = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #252733;
  margin-bottom: 4.3rem;
`;

export const PageNationBox = styled.div`
  display: flex;
`;

export const AdminBtn = styled.div`
  background-color: #272836;
  width: 30%;
  height: 90%;
`;
export const AdminId = styled.div``;
export const AdminProfileImg = styled.div``;

export const PageNation = styled.div``;
export const PageNationBtn = styled.div`
  width: 100%;
  //background-color: red;
  padding-top: 4rem;
  display: inline-block;
  margin-bottom: 1.5rem;
`;
export const PageNationReportBtn = styled.div`
  // '인증 대기 목록'
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 4rem;
  background-color: #fff;
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  color: #344054;
  font-weight: bolder;
  cursor: pointer;

  &.active {
    background-color: #4e2bf5;
    color: #fff;
  }

  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

export const PageNationBar = styled.div`
  width: 100%;
  display: flex;
  height: 0.5rem;
  background-color: #4e2bf5;
`;

export const ReportList = styled.div`
  width: 100%;
`;
export const ListSet = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #344054;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2.6rem;
`;
export const ListOrder = styled.button`
  width: 10%;
`;

export const ListRowName = styled.div`
  width: 100%;
  display: flex;
  color: #778092;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1.4rem 0;
`;
export const ReportIdList = styled.div`
  width: 30%;
`;
export const ReportWarnList = styled.div`
  width: 20%;
`;
export const ReportAccrueList = styled.div`
  width: 20%;
`;
export const ReportDetailList = styled.div`
  width: 20%;
`;
export const ReportHandleList = styled.div`
  width: 20%;
`;

export const ContentNationBar = styled.div`
  display: flex;
  width: 100%;
  height: 0.2rem;
  background-color: #c3c6ce;
`;

//-------------------------------
// 신고된 목록 리스트
//-------------------------------
export const ListContentWrap = styled.ul`
  width: 100%;
`;

export const ListOfLists = styled.li`
  width: 100%;
  height: 8%;
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
  height: 100%;
  display: flex;
`;
export const ReportProfileImg = styled.div`
  /* width: 4rem;
  height: 4rem; */
  border: #afafaf 0.2rem solid;
  //border-radius: 50%;
`;
export const ReportPrifileId = styled.div`
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
export const ReportPostN = styled.div``;
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
export const ReportHandleListSet = styled.button`
  display: block;
  width: 60%;
  padding: 0.7rem;
  background-color: #4e2bf5;
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
