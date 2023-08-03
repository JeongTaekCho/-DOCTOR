import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
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
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

const ModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null; // 모달이 닫혀있을 때는 아무것도 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          fied2.png
          <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
