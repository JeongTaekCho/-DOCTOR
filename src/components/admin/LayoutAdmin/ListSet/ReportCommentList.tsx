import React from 'react';
//import { LayoutRouteProps } from 'react-router-dom';
import { styled } from 'styled-components';
import ReportHandleSelect from '../SelectBtn/ListManageBtn';
import IdHandleSelect from '../SelectBtn/UserManageBtn';
import { ReportCommentListResponse } from '../../../../hooks/query/useGetReportCommentListQuery';

interface UserProps {
  user: ReportCommentListResponse;
  activeTab: boolean;
}

const ReportCommentListLayout = ({ user }: UserProps) => {
  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>{user?.title}</ReportComment>
        <ReportDetail>{user?.content}</ReportDetail>
        <ReportIdTreat>
          <ReportId>{user?.email}</ReportId>
          <IdState>2주 정지</IdState> {/* //D-day되도록 바꿔야 함 */}
        </ReportIdTreat>
        <IdHandleBtn>
          <IdHandleSelect></IdHandleSelect>
        </IdHandleBtn>

        <ReportDate>{user?.created_at}</ReportDate>
        <ReportHandle>
          <ReportHandleSelect></ReportHandleSelect>
        </ReportHandle>
      </ListOfLists>
    </Wrap>
  );
};

export default ReportCommentListLayout;

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
  // 신고된 아이디 + 계정 처리 상태
  width: 25%;
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
const IdState = styled.div``;

const IdHandleBtn = styled.div`
  width: 20%;
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
