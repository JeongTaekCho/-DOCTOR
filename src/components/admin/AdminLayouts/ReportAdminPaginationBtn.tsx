import React, { useState } from 'react';
import { LayoutRouteProps, Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ReportAdminPagination = ({ children }: LayoutRouteProps) => {
  const [activeTab, setActiveTab] = useState('waiting');

  const handleClickBtn1 = () => {
    setActiveTab('waiting');
  };

  const handleClickBtn2 = () => {
    setActiveTab('treat');
  };

  // const handleClickBtn3 = () => {
  //   setIsActive(true);
  // };

  return (
    <Wrap>
      <PageNation>
        <PageNationBtn>
          <PageNationBox>
            <WaitingReportBtn
              to="/report-wait-admin"
              onClick={handleClickBtn1}
              className={activeTab === 'waiting' ? 'active' : ''}
            >
              신고 접수 목록
            </WaitingReportBtn>
            <TreatReportBtn
              to="/report-treat-admin"
              onClick={handleClickBtn2}
              className={activeTab === 'treat' ? 'active' : ''}
            >
              신고 처리 목록
            </TreatReportBtn>
            {/* <PageNationReportBtn
              to="/report-false-admin"
              onClick={handleClickBtn3}
              className={isActive ? '' : 'active'}
            >
              허위 신고 목록
            </PageNationReportBtn> */}
          </PageNationBox>
          <PageNationBar activeTab={activeTab}></PageNationBar>
        </PageNationBtn>
      </PageNation>
      {children}
    </Wrap>
  );
};

export default ReportAdminPagination;

const Wrap = styled.div`
  width: 100%;
`;

const PageNation = styled.div``;
const PageNationBtn = styled.div`
  width: 100%;
  padding-top: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`;
const PageNationBox = styled.div`
  display: flex;
`;
const WaitingReportBtn = styled(Link)`
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
const TreatReportBtn = styled(Link)`
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

const PageNationBar = styled.div<{ activeTab: string }>`
  width: 100%;
  display: flex;
  padding: 0.4rem 0 0.4rem 0;
  background-color: ${props => {
    switch (props.activeTab) {
      case 'waiting':
        return '#344054';
      default:
        return '#667085';
    }
  }};
`;
