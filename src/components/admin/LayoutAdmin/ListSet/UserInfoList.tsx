import React, { ChangeEvent } from 'react';
import { styled } from 'styled-components';
import { AdminUserData } from '../../../../pages/Admin/UserInfoPage/types';
import { useChangeUserStatusMutation } from '../../../../hooks/query/useChangeUserStatusMutation';
import Swal from 'sweetalert2';

const OPTIONS = [
  { value: '', name: '선택해주세요.' },
  { value: 'WeekSuspension', name: '2주 정지' },
  { value: 'ForeverSuspension', name: '영구 정지' },
  { value: 'resistor', name: '강제 탈퇴' },
  { value: 'releaseStop', name: '정지 해제' }
];

interface UserProps {
  user: AdminUserData;
  index: number;
}

const UserInfoList = ({ user, index }: UserProps) => {
  const { mutate } = useChangeUserStatusMutation();

  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'WeekSuspension') {
      console.log(user?.email);

      mutate(
        {
          email: user?.email,
          blocked: 'true'
        },
        {
          onSuccess: () => {
            Swal.fire('계정상태가 변경되었습니다.');
          }
        }
      );
    } else if (value === 'ForeverSuspension') {
      console.log(user?.email);
      mutate(
        {
          email: user?.email,
          blocked: 'permanent'
        },
        {
          onSuccess: () => {
            Swal.fire('계정상태가 변경되었습니다.');
          }
        }
      );
    } else if (value === 'resistor') {
      mutate(
        {
          email: user?.email,
          deleted: 'true'
        },
        {
          onSuccess: () => {
            Swal.fire('계정상태가 변경되었습니다.');
          }
        }
      );
    } else if (value === 'releaseStop') {
      mutate(
        {
          email: user?.email,
          blocked: 'false'
        },
        {
          onSuccess: () => {
            Swal.fire('계정상태가 변경되었습니다.');
          }
        }
      );
    }
  };

  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>{index + 1}</ReportComment>
        <ReportProfile>
          <ReportPrifileId>{user?.email}</ReportPrifileId>
        </ReportProfile>
        <ReportDetail>{user?.nickname}</ReportDetail>
        <ReportDate>{user?.created_at}</ReportDate>
        <ReportDate>정상</ReportDate>
        <ReportHandle>
          <IdHandleSelect onChange={handleChangeStatus}>
            {OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </IdHandleSelect>
          <StatusChangeBtn>계정 상태 변경</StatusChangeBtn>
        </ReportHandle>
      </ListOfLists>
      <StatusChangeModal></StatusChangeModal>
    </Wrap>
  );
};

export default UserInfoList;

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

const IdHandleSelect = styled.select`
  display: block;
  width: 60%;
  padding: 0.7rem;
  background-color: ${props => props.color || '#4e2bf5'};
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const StatusChangeBtn = styled.button`
  width: 60%;
  padding: 0.7rem;
  background-color: #4e2bf5;
  border-radius: 30px;
  color: white;
`;

const StatusChangeModal = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #fff;
`;
