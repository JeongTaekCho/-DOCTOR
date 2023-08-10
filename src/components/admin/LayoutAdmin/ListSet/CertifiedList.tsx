import React, { useState } from 'react';
import { styled } from 'styled-components';
import ProfileImg from '../../../commons/ProfileImg';
import SelectBox from '../SelectBtn/CertifiedManageBtn';
import Modal from '../PageLayout/Modal';
import { formatDate } from '../../../../util/formatDate';
import { imgUrl } from '../../../../api';
import { VetAuthListResponse } from '../../../../pages/Admin/CertifiedPage/types';

interface UserProps {
  user: VetAuthListResponse['data'][number];
  index: number;
  activeTab: boolean;
  vetAuthRefetch: () => void;
}

const CertifiedListLayout = ({ user, index, vetAuthRefetch }: UserProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Wrap>
      <ListOfLists>
        <ReportN>{index + 1}</ReportN>
        <ReportProfile>
          <ProfileImg w="6rem" h="6rem" src={`${imgUrl}${user.users.img_path}`} />
          <ReportPrifileId>{user?.user_email}</ReportPrifileId>
        </ReportProfile>
        <ReportDetailN>
          <ReportPostN>{formatDate(user?.created_at)}</ReportPostN>
        </ReportDetailN>
        <ReportDetailN>
          <ReportPostN>
            {user?.status === 'accepted' ? formatDate(user?.updated_at) : ''}
          </ReportPostN>
        </ReportDetailN>
        <ReportContent>
          <ReportContentListSet onClick={handleOpenModal}>제출자료보기</ReportContentListSet>
        </ReportContent>
        <ReportHandle>
          <SelectBox
            email={user?.user_email}
            vetId={user?.id}
            status={user?.status}
            vetAuthRefetch={vetAuthRefetch}
          />
        </ReportHandle>
      </ListOfLists>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="수의사 인증 자료 제출"
        content={`${imgUrl}${user?.img_path}` || '/images/commons/VetLicense.png'}
        name={user?.name}
        hospitalName={user?.hospital_name}
        hospitalDescription={user?.description}
      />
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
  font-size: 1.5rem;
  border-bottom: 1px solid #e7e7e7;
  padding: 2.3rem 0;

  p {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;

const ReportProfile = styled.div`
  width: 35%;
  display: flex;
`;

const ReportPrifileId = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  padding-left: 5%;
  font-size: 1.4rem;
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

const ReportN = styled.div`
  display: flex;
  width: 8%;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #667085;
`;

const ReportDetailN = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #667085;
`;
const ReportPostN = styled.div``;

const ReportContent = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
const ReportContentListSet = styled.button``;

const ReportHandle = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
