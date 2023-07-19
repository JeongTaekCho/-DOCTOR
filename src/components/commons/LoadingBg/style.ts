import { keyframes, styled } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.div`
  width: 4rem;
  margin: 0 auto;
  animation: ${spinAnimation} 1s linear infinite;

  img {
    width: 100%;
  }
`;
