import { styled } from 'styled-components';

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
  font-weight: bolder;
  opacity: 0.6;
`;

export const RightText = styled.div`
  width: 50rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  padding-left: 1rem;
  color: black;
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
`;

export const BasicHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: bolder;
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
