import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../commons/ProfileImg';
import ReportHandleSelect from '../SelectBtn/CertifiedManageBtn';
import Modal from '../PageLayout/Modal';

const CertifiedListLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <Wrap>
      <ListOfLists>
        <ReportProfile>
          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
          <ReportPrifileId></ReportPrifileId>
        </ReportProfile>
        <ReportN></ReportN>
        <ReportDetailN>
          <ReportPostN></ReportPostN>
        </ReportDetailN>
        <ReportContent>
          <ReportContentListSet onClick={handleOpenModal}>제출자료보기</ReportContentListSet>
        </ReportContent>
        <ReportHandle>
          <ReportHandleSelect></ReportHandleSelect>
        </ReportHandle>
      </ListOfLists>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="제출자료" content="이미지" />
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
