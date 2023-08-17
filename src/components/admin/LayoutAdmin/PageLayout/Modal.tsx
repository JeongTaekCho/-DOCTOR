import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  name: string;
  hospitalName: string;
  hospitalDescription: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 650px;
  height: 700px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const ModalTitle = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 1rem;
  color: #5429ff;
`;

const ModalBody = styled.div`
  font-size: 1.7rem;
  line-height: 1.5;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ModalCloseButton = styled.button`
  display: block;
  margin: 3rem auto;
  background-color: #5429ff;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  color: #ac9bfa;
  padding: 4px 15px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalImage = styled.img`
  max-width: 100%;
`;

const ListWrap = styled.div`
  border: 0.3rem solid rgba(172, 155, 259, 0.3);
  border-radius: 2px;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem 0 1rem 1rem;
`;
const ListName = styled.div`
  font-weight: 500;
  color: #344054;
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  name,
  hospitalName,
  hospitalDescription
}) => {
  if (!isOpen) {
    return null; // 모달이 닫혀있을 때는 아무것도 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>
          <ListWrap>
            <ListName>수의사 이름</ListName>
            {name}
          </ListWrap>
          <ListWrap>
            <ListName>수의사 면허증</ListName>
            <ImageWrap>
              <ModalImage src={content} alt="Vet License" />
            </ImageWrap>
          </ListWrap>
          <ListWrap>
            <ListName>병원 이름</ListName>
            {hospitalName}
          </ListWrap>
          <ListWrap>
            <ListName>병원 소개</ListName>
            {hospitalDescription}
          </ListWrap>
        </ModalBody>
        <ModalFooter>
          <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
