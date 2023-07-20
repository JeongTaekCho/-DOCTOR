import { keyframes, styled } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingBox = styled.div`
  width: 4rem;
  margin: 0 auto;
  animation: ${spinAnimation} 1s linear infinite;

  img {
    width: 100%;
  }
`;
