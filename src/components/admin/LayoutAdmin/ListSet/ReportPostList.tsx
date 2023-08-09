import React, { ChangeEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { STYLE } from '../../../../styles/commonStyle';
import Swal from 'sweetalert2';
import { useChangeUserStatusMutation } from '../../../../hooks/query/useChangeUserStatusMutation';
import ReportHandleSelect from '../SelectBtn/ReportPostManageBtn';
import { ReportPostData } from '../../../../pages/Admin/ReportPostPage/types';
import { calculateRemainingDays } from '../../../../util/getRemaingTime';
import { formatDate } from '../../../../util/formatDate';

const OPTIONS = [
  { value: '', name: '선택해주세요.' },
  { value: 'WeekSuspension', name: '2주 정지' },
  { value: 'ForeverSuspension', name: '영구 정지' },
  { value: 'resistor', name: '강제 탈퇴' },
  { value: 'releaseStop', name: '정지 해제' }
];

interface ReportPostProps {
  data: ReportPostData;
  reportPostRefetch: () => void;
}

const ReportPostListLayout = ({ data, reportPostRefetch }: ReportPostProps) => {
  const [isModal, setIsModal] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const { mutate } = useChangeUserStatusMutation();

  const user = data?.posts?.users;
  const post = data?.posts;
  const report = data?.reports;

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
              reportPostRefetch();
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
              reportPostRefetch();
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
              reportPostRefetch();
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
                reportPostRefetch();
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

  return (
    <Wrap>
      <ListOfLists>
        <ReportComment>{post?.title}</ReportComment>
        <ReportDetail>{report?.content}</ReportDetail>
        <ReportIdTreat>
          <ReportId>{user?.email}</ReportId>
          <IdState>
            {!user?.blocked_at && !user?.deleted_at && <p>정상</p>}
            {user?.blocked_at && userStatus}
            {user?.deleted_at && <p className="textColor">강제 탈퇴</p>}
          </IdState>{' '}
        </ReportIdTreat>
        <ReportHandle>
          <StatusChangeBtn onClick={toggleModal}>계정 상태 변경</StatusChangeBtn>
        </ReportHandle>
        <ReportDate>{formatDate(report?.created_at)}</ReportDate>
        <IdHandleBtn>
          <ReportHandleSelect
            defaultValue="pending"
            reportId={report?.id}
            reportPostRefetch={reportPostRefetch}
            status={report?.status}
          />
        </IdHandleBtn>
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

export default ReportPostListLayout;

const Wrap = styled.div`
  width: 100%;
`;

const ListOfLists = styled.div`
  width: 100%;
  padding-left: 2%;
  display: flex;
  font-size: 1.5rem;
  border-bottom: 1px solid #e7e7e7;
  padding: 2.3rem 0;
  align-items: center;

  p {
    font-size: 1.5rem;
  }
  &:hover {
    background-color: #d6d5d5;
  }
`;
//-------------------------------------
//-------------------------------------
const ReportComment = styled.p`
  // '신고된 글 제목..'
  width: 20.5%;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${STYLE.mainFontColor};
`;

const ReportDetail = styled.p`
  // '비방적인글'
  width: 15%;
`;

const ReportIdTreat = styled.div`
  // 신고된 아이디 + 계정 처리 상태
  width: 18%;
`;

const ReportId = styled.p`
  // '신고된 아이디'
  display: flex;
  align-items: center;
  color: #252733;
  font-weight: 500;
  font-size: 1.4rem;
  word-break: break-all;
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
const IdState = styled.div`
  p {
    font-size: 1.3rem;
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
  }
`;

const IdHandleBtn = styled.div`
  width: 18%;
`;

const ReportDate = styled.p`
  // '신고된 날짜'
  width: 12%;
`;

const ReportHandle = styled.div`
  // 신고된 글 처리 버튼[]
  width: 18%;
  display: flex;
  align-items: center;
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
  font-size: 1.3rem;
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
