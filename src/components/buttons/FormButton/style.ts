import { styled } from 'styled-components';
import { STYLE } from '../../../styles/commonStyle';

export const Button = styled.button`
  width: 100%;
  padding: 1.2rem 0;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${STYLE.mainColor};
  color: #fff;
  border-radius: 0.8rem;

  &:disabled {
    background-color: #999;
    cursor: default;
  }
`;
