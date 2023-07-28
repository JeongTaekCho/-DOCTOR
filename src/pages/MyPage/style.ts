import styled, { css } from 'styled-components';
import { RESPONSIVE } from '../../styles/responsive';

interface TabItemProps {
  active: boolean;
  onClick: () => void;
}

export const Wrap = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-bottom: 10rem;
`;

export const Profile = styled.div`
  width: 25rem;
  height: 28rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 3px lightgrey;

  @media ${RESPONSIVE.mobile} {
    height: 38rem;
    width: 30rem;
  }
`;

export const Detail = styled.div`
  width: 70rem;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding-bottom: 5rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  display: none;
`;

export const Name = styled.h4`
  font-size: 3rem;
  text-align: center;
  font-weight: bolder;
  margin-top: 1.5rem;
`;

export const State = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

export const StateSpan = styled.span`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: blue;
`;

export const DetailTop = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: #d5d5d5;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  gap: 3rem;
  font-size: 2rem;
  font-weight: bolder;
`;

export const MyDetail = styled.div`
  width: 100%;
`;

export const TabItem = styled.p<TabItemProps>`
  position: relative;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  transition: 0.1s;

  &::before {
    content: ' ';
    display: inline-block;
    width: 4px;
  }

  &:hover {
    color: #5429ff;
  }

  ${({ active }) =>
    active &&
    css`
      color: #5429ff;
      position: relative;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -90%;
        width: 108%;
        height: 3px;
        background-color: #5429ff;
      }
    `}
`;

export const ChangeDiv = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid lightgray;
  position: absolute;
  left: 60%;
  top: 60%;
  text-align: center;
  cursor: pointer;

  @media ${RESPONSIVE.mobile} {
    width: 8rem;
    height: 8rem;
  }
`;

export const AvatarDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const CertificationDiv = styled.div`
  padding: 5rem 0 0 0;
  text-align: center;
`;

export const Certification = styled.button`
  width: 14rem;
  height: 5rem;
  padding: 1rem;
  font-size: 2rem;
  background-color: #5429ff;
  color: white;
  font-weight: bolder;
  border-radius: 2rem;
`;

export const Modal = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 64.9rem;
  z-index: 999999;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: 3px solid black;

  @media ${RESPONSIVE.mobile} {
    top: 40%;
  }
`;

export const RejectCard = styled.div`
  width: 45rem;
  z-index: 999999;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: 2px solid black;
  padding: 2rem;
`;

export const Close = styled.div`
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  text-align: right;
`;

export const Title2 = styled.div`
  padding: 3rem 0 0 3.5rem;
`;

export const BasicHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: bolder;
`;

export const MainBox = styled.div`
  width: 90%;
  height: 5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: auto;
  display: flex;
  margin-top: 5rem;
`;

export const LeftText = styled.div`
  width: 20%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  align-items: center;
`;

export const CenteredText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bolder;
  opacity: 0.6;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FileInput = styled.input`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const RightInput = styled.input`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const MainBox2 = styled.div`
  width: 90%;
  height: 5rem;
  border-bottom: 1px solid black;
  margin: auto;
  display: flex;
`;

export const MainBox3 = styled.div`
  width: 90%;
  height: 15rem;
  border-bottom: 1px solid black;
  margin: auto;
  display: flex;
`;

export const Select = styled.select`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const InputDiv2 = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const RightInput2 = styled.textarea`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
  resize: none;
`;

export const BlueButton = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #5429ff;
  font-size: 1.5rem;
  font-weight: bolder;
  color: white;
  text-align: center;
`;

export const RedButton = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #d5d5d5;
  font-size: 1.5rem;
  font-weight: bolder;
  color: black;
  text-align: center;
`;

export const ButtonDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;

export const CardWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

export const Reject = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 4rem;
`;

export const RejectButtonDiv = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
`;

export const RejectButton = styled.button`
  width: 4rem;
  height: 3rem;
  border-radius: 3px;
  border: none;
  background-color: #5429ff;
  color: white;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0.5rem;
`;
