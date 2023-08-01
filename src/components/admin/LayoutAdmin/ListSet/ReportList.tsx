import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { styled } from 'styled-components';
import ReportHandleSelect from '../Button/SelectBtn/ListManageBtn';
import IdHandleSelect from '../Button/SelectBtn/UserManageBtn';

const CertifiedListLayout = ({ children }: LayoutRouteProps) => {
  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>신고된 글 제목..</ReportComment>
        <ReportDetail>비방적인 글</ReportDetail>
        <ReportIdTreat>
          <ReportId>dkdlel5677@gmail.com</ReportId>
          <IdHandleSelect></IdHandleSelect>
        </ReportIdTreat>
        <ReportDate>2023-07-05</ReportDate>
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

const ListOfLists = styled.div`
  width: 100%;
  padding-left: 2%;
  display: flex;
  font-size: 1.2rem;
  border-bottom: 1px solid #e7e7e7;
  padding: 2.3rem 0;

  &:hover {
    background-color: #d6d5d5;
  }
`;
//-------------------------------------
//-------------------------------------
const ReportComment = styled.div`
  // '신고된 글 제목..'
  width: 20%;
`;

const ReportDetail = styled.div`
  // '비방적인글'
  width: 15%;
`;

const ReportIdTreat = styled.div`
  // 신고된 아이디 + 계정 처리 버튼
  width: 35%;
`;

const ReportId = styled.div`
  // '신고된 아이디'
  width: 50%;
  display: flex;
  align-items: center;
  color: #252733;
  font-weight: 600;
  font-size: 1.4rem;
`;

const ReportDate = styled.div`
  // '신고된 날짜'
  width: 15%;
`;

const ReportHandle = styled.div`
  // 신고된 글 처리 버튼[]
  width: 15%;
  display: flex;
  align-items: center;
`;

//const ReportDetailN = styled(ReportN)``;
