import React, { useState } from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { styled } from 'styled-components';

const CertifiedAdminPagination = ({ children }: LayoutRouteProps) => {
  const [activeTab, setActiveTab] = useState('waiting');

  const handleClickBtn1 = () => {
    setActiveTab('waiting');
  };

  const handleClickBtn2 = () => {
    setActiveTab('treat');
  };

  // const handleClickBtn3 = () => {
  //   setActiveTab('completed');
  // };

  return (
    <Wrap>
      <PageNation>
        <PageNationBtn>
          <PageNationBox>
            <WaitingReportBtn
              onClick={handleClickBtn1}
              active={activeTab === 'waiting'}
              // activeTab={activeTab}
            >
              인증 대기 목록
            </WaitingReportBtn>
            <TreatReportBtn
              onClick={handleClickBtn2}
              active={activeTab === 'treat'}
              // activeTab={activeTab}
            >
              인증 목록
            </TreatReportBtn>
          </PageNationBox>

          <PageNationBar activeTab={activeTab}></PageNationBar>
        </PageNationBtn>
      </PageNation>
      {children}
    </Wrap>
  );
};

export default CertifiedAdminPagination;

const Wrap = styled.div`
  width: 100%;
`;

const PageNation = styled.div``;
const PageNationBtn = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: inline-block;
  margin-bottom: 1.5rem;
`;
const PageNationBox = styled.div`
  display: flex;
`;
const WaitingReportBtn = styled.button<{ active: boolean }>`
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

const TreatReportBtn = styled.button<{ active: boolean }>`
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

const PageNationBar = styled.div<{ activeTab: string }>`
  width: 100%;
  display: flex;
  padding: 0.4rem 0 0.4rem 0;
  background-color: ${props => {
    switch (props.activeTab) {
      case 'waiting':
        return '#4e2bf5';
      default:
        return '#ac9bfa';
    }
  }};
`;
