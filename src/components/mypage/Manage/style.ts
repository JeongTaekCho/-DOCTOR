import { styled } from 'styled-components';
import { RESPONSIVE } from '../../../styles/responsive';

export const MainBox = styled.div`
  width: 90%;
  height: 5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: auto;
  display: flex;
  margin-top: 5rem;
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
  font-weight: 500;
  opacity: 0.6;
`;

export const RightText = styled.div`
  width: 50rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  padding-left: 1rem;
  color: black;

  @media ${RESPONSIVE.tablet} {
    width: 30rem;
  }
`;

export const RightText2 = styled.div`
  width: 50rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  padding-left: 1rem;
  color: blue;

  @media ${RESPONSIVE.tablet} {
    width: 30rem;
  }
`;

export const BasicHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
`;

export const Title = styled.div`
  padding: 3rem 0 0 3.5rem;
`;
export const Title2 = styled.div`
  padding: 3rem 0 0 3.5rem;
  margin-top: 5rem;
`;

export const Pen = styled.div`
  width: 95%;
  text-align: right;
  margin-bottom: -3rem;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export const RightInput = styled.input`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const RightInput2 = styled.textarea`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
  resize: none;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const InputDiv2 = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;

export const BlueButton = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #5429ff;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const RedButton = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #d5d5d5;
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  text-align: center;
`;

export const FileInput = styled.input`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const ConfirmDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ConfirmSpan = styled.span`
  color: red;
`;

export const Select = styled.select`
  width: 90%;
  height: 70%;
  margin-left: 1rem;
`;

export const CertificationDiv = styled.div`
  width: 100%;
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
  font-weight: 500;
  border-radius: 2rem;
`;

export const DeleteUser = styled.div`
  width: 95%;
  padding-top: 5rem;
  text-align: right;
  margin-bottom: -2rem;
`;

export const DeleteUserP = styled.p`
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Modal = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 64.9rem;
  z-index: 9999;
  position: fixed;
  top: 40%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
  padding: 3rem 0 2rem 0;

  @media ${RESPONSIVE.tablet} {
    width: 90%;
    top: 40%;
    left: 50%;
  }
`;

export const Reason = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
`;

export const ReasonDiv = styled.div`
  text-align: center;
  height: 100%;
  padding-top: 2rem;
`;

export const DeleteButtonDiv = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const BlueButton2 = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #5429ff;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const RedButton2 = styled.button`
  width: 5rem;
  height: 3.5rem;
  border-radius: 5px;
  background-color: #d5d5d5;
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  text-align: center;
`;
