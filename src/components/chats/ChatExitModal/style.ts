import { styled } from 'styled-components';
import { STYLE } from '../../../styles/commonStyle';

export const Wrap = styled.div`
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

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  padding: 2.5rem;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0.6rem;
`;

export const ModalMent = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${STYLE.mainFontColor};
  text-align: center;
  line-height: 1.4;
  margin-bottom: 5rem;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const CancelBtn = styled.button`
  width: 12.8rem;
  padding: 1rem 0;
  background-color: ${STYLE.mainColor};
  font-size: 1.3rem;
  font-weight: 400;
  color: #fff;
  border: 1px solid ${STYLE.mainColor};
  border-radius: 0.4rem;
`;

export const ExitBtn = styled(CancelBtn)`
  background-color: #fff;
  color: ${STYLE.mainColor};
`;
