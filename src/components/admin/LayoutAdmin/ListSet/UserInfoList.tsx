import React, { ChangeEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { AdminUserData } from '../../../../pages/Admin/UserInfoPage/types';
import { useChangeUserStatusMutation } from '../../../../hooks/query/useChangeUserStatusMutation';
import Swal from 'sweetalert2';
import { STYLE } from '../../../../styles/commonStyle';
import { formatDate } from '../../../../util/formatDate';
import { calculateRemainingDays } from '../../../../util/getRemaingTime';

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
  adminUserRefetch: () => void;
}

const UserInfoList = ({ user, index, adminUserRefetch }: UserProps) => {
  const [isModal, setIsModal] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const { mutate } = useChangeUserStatusMutation();

  const toggleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleChangeStatus = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  }, []);

  const handleSubmit = () => {
    if (selectValue) {
      if (selectValue === 'WeekSuspension') {
        mutate(
          {
            email: user?.email,
            blocked: 'true'
          },
          {
            onSuccess: () => {
              Swal.fire('계정상태가 변경되었습니다.');
              setIsModal(false);
              adminUserRefetch();
            },
            onError: (err: any) => {
              Swal.fire(err.response.data.error);
            }
          }
        );
      } else if (selectValue === 'ForeverSuspension') {
        mutate(
          {
            email: user?.email,
            blocked: 'permanent'
          },
          {
            onSuccess: () => {
              Swal.fire('계정상태가 변경되었습니다.');
              setIsModal(false);
              adminUserRefetch();
            },
            onError: (err: any) => {
              Swal.fire(err.response.data.error);
            }
          }
        );
      } else if (selectValue === 'resistor') {
        mutate(
          {
            email: user?.email,
            deleted: 'true'
          },
          {
            onSuccess: () => {
              Swal.fire('계정상태가 변경되었습니다.');
              setIsModal(false);
              adminUserRefetch();
            },
            onError: (err: any) => {
              Swal.fire(err.response.data.error);
            }
          }
        );
      } else if (selectValue === 'releaseStop') {
        if (user?.blocked_at) {
          mutate(
            {
              email: user?.email,
              blocked: 'false'
            },
            {
              onSuccess: () => {
                Swal.fire('계정상태가 변경되었습니다.');
                setIsModal(false);
                adminUserRefetch();
              },
              onError: (err: any) => {
                Swal.fire(err.response.data.error);
              }
            }
          );
        } else {
          Swal.fire('정상인 계정입니다.');
        }
      }
    } else {
      Swal.fire('항목을 선택해주세요.');
    }
  };

  const userStatus =
    calculateRemainingDays(formatDate(user?.blocked_at)) < 9999 ? (
      <p className="textColor">정지</p>
    ) : (
      <p className="textColor">영구정지</p>
    );

  const remainingDate =
    calculateRemainingDays(formatDate(user?.blocked_at)) > 0 &&
    calculateRemainingDays(formatDate(user?.blocked_at)) < 9999 ? (
      <p className="mainFontColor">D - {calculateRemainingDays(formatDate(user?.blocked_at))}</p>
    ) : null;

  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>{index + 1}</ReportComment>
        <ReportProfile>
          <ReportPrifileId>{user?.email}</ReportPrifileId>
        </ReportProfile>
        <ReportDetail>{user?.nickname}</ReportDetail>
        <ReportDate>{formatDate(user?.created_at)}</ReportDate>
        <DateBox>
          {!user?.blocked_at && !user?.deleted_at && <p>정상</p>}
          {user?.blocked_at && userStatus}
          {user?.deleted_at && <p className="textColor">강제 탈퇴</p>}
          {remainingDate}
        </DateBox>
        {!user?.deleted_at ? (
          <ReportHandle>
            <StatusChangeBtn onClick={toggleModal}>계정 상태 변경</StatusChangeBtn>
          </ReportHandle>
        ) : (
          <ReportHandle></ReportHandle>
        )}
      </ListOfLists>
      {isModal && (
        <ModalWrap>
          <ModalContainer>
            <ModalMent>항목을 선택 후 확인버튼을 클릭해주세요.</ModalMent>
            <IdHandleSelect onChange={handleChangeStatus}>
              {OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </IdHandleSelect>
            <BtnBox>
              <ConfirmBtn onClick={handleSubmit}>확인</ConfirmBtn>
              <CancelBtn onClick={toggleModal}>취소</CancelBtn>
            </BtnBox>
          </ModalContainer>
        </ModalWrap>
      )}
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
  align-items: center;
  font-size: 1.5rem;
  border-bottom: 1px solid #e7e7e7;
  padding: 2.3rem 0;

  p {
    font-size: 1.5rem;
  }

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
  font-size: 1.5rem;
  font-weight: 600;
  color: #252733;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    background: transparent;
  }

  /* Internet Explorer and Edge */
  -ms-overflow-style: none;

  /* Firefox */
  scrollbar-width: none;
`;
//-------------------------------------
const ReportComment = styled.p`
  // '신고된 글 제목..'
  width: 10%;
`;

const ReportDetail = styled.p`
  // '비방적인글'
  width: 20%;
`;

const DateBox = styled.div`
  width: 20%;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${STYLE.mainColor};

    &.textColor {
      color: #e80f0f;
    }
    &.mainFontColor {
      color: ${STYLE.mainFontColor};
    }

    &:last-child {
      margin-top: 1rem;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`;
const ReportDate = styled.p`
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
  width: 100%;
  margin: 0 auto;
  padding: 0.7rem;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 1.7rem;
  font-weight: 400;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  outline: none;
  margin-bottom: 2rem;

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

export const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  padding: 2.5rem;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0.6rem;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  align-items: center;
`;

const ConfirmBtn = styled.button`
  width: 47%;
  padding: 1rem 0;
  background-color: ${STYLE.mainColor};
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  border: 1px solid ${STYLE.mainColor};
  border-radius: 0.4rem;
`;

const CancelBtn = styled(ConfirmBtn)`
  background-color: #fff;
  color: ${STYLE.mainColor};
`;

const ModalMent = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #111;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 3rem;
`;
