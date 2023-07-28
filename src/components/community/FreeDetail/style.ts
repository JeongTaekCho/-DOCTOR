import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-left: 30%;
`;

export const ListContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.div`
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
`;

export const Title = styled.div`
  width: 90%;
  font-size: 3rem;
  font-weight: bolder;
  padding: 1.5rem 0 1.5rem 0.5rem;
`;

export const Date = styled.div`
  width: 10%;
  font-size: 1.3rem;
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  align-items: end;
  text-align: right;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 40rem;
  border-bottom: 2px solid black;
  position: relative;
`;

export const MainText = styled.div`
  width: 100%;
  padding: 1.5rem 0 0 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const MainTextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem 0 0 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  resize: none;
  height: 100%;
  border: none;
  border-radius: 1px;
`;

export const HeartIcon = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #9747ff;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

export const ReportText = styled.button`
  cursor: pointer;
  background-color: red;
  color: white;
  height: 3rem;
  width: 5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  font-weight: bolder;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
`;

export const Correction = styled.button`
  cursor: pointer;
  background-color: #9747ff;
  color: white;
  height: 3rem;
  width: 5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  font-weight: bolder;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-right: 1rem;
`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  background-color: blue;
  color: white;
  height: 3rem;
  width: 5rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  font-weight: bolder;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-right: 1rem;
`;

export const CommentDiv = styled.div`
  padding: 1rem 0 1rem 0.5rem;
  font-size: 2rem;
  font-weight: bolder;
  width: 100%;
  background-color: #d5d5d5;
  border-radius: 0.3rem;
  margin-top: 1rem;
`;

export const Comment = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border-bottom: 1.5px solid black;
  padding: 1rem 0 1rem 0.5rem;
`;

export const UserDiv = styled.div`
  width: 100%;
`;

export const User = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const CommentDate = styled.span`
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const BottomDiv = styled.div`
  width: 100%;
  display: flex;
  padding-top: 3rem;
  padding-right: 1rem;
`;

export const LeftDiv = styled.div`
  width: 95%;
  font-size: 1.5rem;
`;

export const RightDiv = styled.div`
  width: 5%;
  font-size: 1.3rem;
  text-align: right;
`;

export const CoComment = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border-bottom: 0.5px solid black;
  padding: 1rem 0 1rem 4rem;
`;

export const Register = styled.div`
  margin-top: 1rem;
  width: 100%;
  background-color: white;
  border-radius: 2px;
  border: 0.5px solid lightgrey;
  padding: 1rem;
  box-shadow: 2px 2px 2px lightgrey;
`;

export const RegisterTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.textarea`
  resize: none;
  width: 90%;
  height: 7rem;
  margin-top: 1rem;
`;

export const RegisterButton = styled.button`
  width: 9%;
  height: 7rem;
  border: 1px solid black;
  margin-top: 1rem;
  margin-left: 0.5rem;
  border-radius: 2px;
  font-weight: bolder;
  font-size: 1.5rem;
`;

export const ListDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: right;
`;

export const ListButton = styled(Link)`
  background-color: #747474;
  color: white;
  font-size: 1.3rem;
  padding: 0.3rem;
  border-radius: 3px;
`;

export const Modal = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 64.9rem;
  z-index: 999999;
  position: fixed;
  top: 40%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
  padding: 3rem 0 2rem 0;
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

export const ReasonBox = styled.select`
  width: 80%;
  height: 100%;
  background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png')
    calc(100% - 5px) center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
`;

export const ReasonOption = styled.option`
  background: black;
  color: #fff;
  padding: 3px 0;
`;

export const ButtonDiv = styled.div`
  width: 90%;
  text-align: right;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
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

export const MainTextDiv = styled.div`
  height: 77%;
`;

export const ReportTextDiv = styled.div`
  text-align: right;
`;
