import { styled } from 'styled-components';
import { STYLE } from '../../../styles/commonStyle';

export const MyChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MyChat = styled.div`
  max-width: 60%;
  padding: 1rem;
  position: relative;
  background-color: ${STYLE.mainColor};
  border-radius: 0.6rem;

  pre {
    font-size: 1.3rem;
    font-weight: 400;
    color: #fff;
    white-space: pre-wrap;
    line-height: 1.4;
    word-break: break-all;
  }
`;

export const MyTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-bottom: 1.2rem solid ${STYLE.mainColor};
  position: absolute;
  top: 0.5rem;
  right: -0.8rem;
  transform: rotate(65deg);
`;
