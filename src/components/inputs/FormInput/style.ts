import { styled } from 'styled-components';
import { STYLE } from '../../../styles/commonStyle';

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid #d0d5dd;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${STYLE.subFontColor};

  &:focus {
    outline: 1px solid ${STYLE.mainColor};
  }
`;
