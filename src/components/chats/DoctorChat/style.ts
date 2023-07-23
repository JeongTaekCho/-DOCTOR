import { styled } from 'styled-components';
import { UserChat, UserTriangle } from '../UserChat/style';

export const DoctorChatProfileBox = styled.div`
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

export const DoctorChatBox = styled.div`
  max-width: 60%;
  display: flex;
  position: absolute;
  top: 4.3rem;
  left: 6.8rem;
`;

export const DoctorChat = styled(UserChat)`
  max-width: none;
  width: 100%;
`;

export const DoctorTriangle = styled(UserTriangle)`
  top: 0.5rem;
  left: -0.8rem;
  transform: rotate(-65deg);
`;
