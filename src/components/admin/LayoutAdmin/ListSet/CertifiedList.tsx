import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { styled } from 'styled-components';
import ProfileImg from '../../../commons/ProfileImg';
import ReportHandleSelect from '../Button/SelectBtn/ListManageBtn';

const CertifiedListLayout = ({ children }: LayoutRouteProps) => {
  return (
    <Wrap>
      <ListOfLists>
        <ReportProfile>
          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
          <ReportPrifileId>asjlfjaklsjff@naver.com</ReportPrifileId>
        </ReportProfile>
        <ReportN>2023-07-20</ReportN>
        <ReportDetailN>
          <ReportPostN>2023-07-25</ReportPostN>
        </ReportDetailN>
        <ReportContent>
          <ReportContentListSet></ReportContentListSet>
        </ReportContent>
        <ReportHandle>
          <ReportHandleSelect></ReportHandleSelect>
        </ReportHandle>
      </ListOfLists>
      {children}
    </Wrap>
  );
};

export default CertifiedListLayout;

const Wrap = styled.div`
  width: 100%;
`;

const ListOfLists = styled.li`
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

const ReportProfile = styled.div`
  width: 30%;
  display: flex;
`;

const ReportPrifileId = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 5%;
  font-size: 1.4rem;
  font-weight: 600;
  color: #252733;
`;

const ReportN = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #667085;
`;

const ReportDetailN = styled(ReportN)``;
const ReportPostN = styled.div``;

const ReportContent = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
const ReportContentListSet = styled.div``;

const ReportHandle = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
