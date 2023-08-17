import { styled } from 'styled-components';
import { MyChat, MyTriangle } from '../MyChat/style';

export const OtherChatProfileBox = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: #000;
  }
`;

export const OtherChatBox = styled.div`
  max-width: 60%;
  display: flex;
  position: absolute;
  top: 4.3rem;
  left: 6.8rem;
`;

export const OtherChat = styled(MyChat)`
  max-width: none;
  width: 100%;
`;

export const OtherTriangle = styled(MyTriangle)`
  top: 0.5rem;
  left: -0.8rem;
  transform: rotate(-65deg);
`;
