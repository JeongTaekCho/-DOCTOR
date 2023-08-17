import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

//-----------------------------------
//-----------------------------------
export const Wrap = styled.div``;

export const Container = styled.div`
  width: 93.85%;
  margin: 0 auto;
  min-height: calc(100vh - 135px);
`;

//-----------------------------------
//-----------------------------------
export const Content = styled.div`
  width: 79.16%;
  margin-left: 20.83%;
`;

export const ContentTitle = styled.div`
  width: 100%;
`;

export const CTitleName = styled.div`
  // '신고 접수'
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
  justify-content: space-between;
  color: #344054;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2.6rem;
`;
export const ListOrder = styled.div`
  // '▼ 처리 내용 순' / '▼ 신고 건수 순'
  width: 15%;
`;
export const ListOrder2 = styled.div`
  input {
    width: 300px;
    padding: 1rem;
    border-radius: 6px;
    font-size: 1.5rem;
    font-weight: 400;
    color: #111;
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

export const ReportIdList = styled.div`
  width: 10%;
`;
export const ReportWarnList = styled.div`
  width: 30%;
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

export const PageNation = styled.div``;
export const PageNationBtn = styled.div`
  width: 100%;
  padding-top: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`;
export const PageNationBox = styled.div`
  display: flex;
`;
export const WaitingReportBtn = styled(Link)`
  // '신고 접수 목록'
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  color: #fff;
  background-color: #344054;
  font-weight: bolder;
  padding: 1.3rem 0 1.3rem 0;
  cursor: pointer;

  &:hover {
    background-color: #434d5f;
    color: white;
  }
`;
export const TreatReportBtn = styled(Link)`
  // '신고 처리 목록'
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  font-size: 1.5rem;
  background-color: #667085;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: #717c94;
    color: white;
  }
`;

export const PageNationBar = styled.div`
  width: 100%;
  display: flex;
  padding: 0.4rem 0 0.4rem 0;
  background-color: #344054;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SelectBox = styled.select`
  font-size: 1.5rem;
  font-weight: 400;
  color: #111;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
`;
