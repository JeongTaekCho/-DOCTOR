import { styled } from 'styled-components';
export const Wrap = styled.div``;
import { STYLE } from '../../../styles/commonStyle';

export const Container = styled.div`
  width: 93.85%;
  margin: 0 auto;
  min-height: calc(100vh - 135px);
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

export const ReportList = styled.div`
  width: 100%;
`;
export const ListSet = styled.div`
  width: 100%;
  display: flex;
  //justify-content: flex-start;
  color: #344054;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2.6rem;
`;

export const ListOrder = styled.button`
  width: 15%;
`;

export const ListOrder2 = styled.div`
  input {
    width: 300px;
    padding: 0.5rem;
    border-radius: 6px;
  }
`;
export const ListRowName = styled.div`
  width: 100%;
  display: flex;
  color: #778092;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1.4rem 0;
`;
export const ReportId1List = styled.div`
  width: 10%;
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

export const PageNation = styled.div``;
export const PageNationBtn = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: inline-block;
  margin-bottom: 1.5rem;
`;
export const PageNationBox = styled.div`
  display: flex;
`;
export const WaitingReportBtn = styled.button`
  // '인증 대기 목록'
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  background-color: #5429ff;
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bolder;
  padding: 1.3rem 0 1.3rem 0;
  cursor: pointer;

  /* &.active {
    background-color: #5429ff;
    color: #fff;
  } */

  &:hover {
    background-color: #5c18fa;
    color: white;
  }
`;

export const TreatReportBtn = styled.button`
  // '인증 진행 목록'
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  background-color: #ac9bfa;
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;

  /* &.active {
    background-color: #ac9bfa;
    color: #fff;
  } */

  &:hover {
    background-color: #a08bfd;
    color: white;
  }
`;

// const CompletedReportBtn = styled.button<{ active: boolean }>`
//   // '인증 완료 목록'
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 15rem;
//   background-color: #cbcce8;
//   border-radius: 10px 10px 0px 0px;
//   margin: 0;
//   font-size: 1.5rem;
//   color: #ffffff;
//   font-weight: bolder;
//   cursor: pointer;

/* &.active {
    background-color: #CBCCE8;
    color: #ac9bfa;
  } */

//   &:hover {
//     background-color: #bbbde6;
//     color: white;
//   }
// `;

export const PageNationBar = styled.div<{ activeTab: boolean }>`
  width: 100%;
  display: flex;
  padding: 0.4rem 0 0.4rem 0;
  background-color: ${props => (props.activeTab ? '#ac9bfa' : '#4e2bf5')};
`;

export const SelectBox = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ErrorMent = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${STYLE.mainFontColor};
  text-align: center;
  margin-top: 3rem;
`;
