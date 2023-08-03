import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { styled } from 'styled-components';
import ProfileImg from '../../../commons/ProfileImg';
import IdHandleSelect from '../SelectBtn/UserManageBtn';

const CertifiedListLayout = ({ children }: LayoutRouteProps) => {
  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>1</ReportComment>
        <ReportProfile>
          <ProfileImg w="4rem" h="4rem" src="/images/commons/kkam.png" />
          <ReportPrifileId>jaklsjff@naver.com</ReportPrifileId>
        </ReportProfile>
        <ReportDetail>닉네임123</ReportDetail>

        <ReportDate>2023-07-05</ReportDate>
        <ReportHandle>
          <IdHandleSelect></IdHandleSelect>
          <IdState>2주 정지</IdState> {/* //D-day되도록 바꿔야 함 */}
        </ReportHandle>
      </ListOfLists>
      {children}
    </Wrap>
  );
};

export default CertifiedListLayout;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
const IdState = styled.div``;
//-------------------------------------
//-------------------------------------
const ReportComment = styled.div`
  // '신고된 글 제목..'
  width: 10%;
`;

const ReportDetail = styled.div`
  // '비방적인글'
  width: 20%;
`;

const ReportDate = styled.div`
  // '신고된 날짜'
  width: 20%;
`;

const ReportHandle = styled.div`
  // 신고된 글 처리 버튼[]
  width: 20%;
  display: flex;
  align-items: center;
`;
