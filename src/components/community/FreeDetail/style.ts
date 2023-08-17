import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { RESPONSIVE } from '../../../styles/responsive';

export const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-left: 30%;
  min-height: calc(100vh - 135px);

  @media ${RESPONSIVE.tablet} {
    width: 90%;
    margin: 0 auto;
    margin-left: auto;
  }
`;

export const ListContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

export const Title = styled.div`
  width: 80%;
  font-size: 2.2rem;
  font-weight: 500;
  padding: 1.5rem 0 1.5rem 0.5rem;
`;

export const DateContainer = styled.div`
  font-size: 1.3rem;
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  align-items: end;
  text-align: right;
`;

export const MainDiv = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  position: relative;
`;

export const MainText = styled.div`
  width: 100%;
  height: 40rem;
  padding: 1.5rem 0 0 0.5rem;
  font-size: 1.8rem;
  line-height: 1.4;
  overflow-y: auto;
`;

export const MainTextArea = styled.textarea`
  width: 100%;
  height: 40rem;
  padding: 1.6rem 0 0 0.5rem;
  font-size: 1.8rem;
  line-height: 1.4rem;
  resize: none;
  height: 100%;
  border: none;
  border-radius: 1px;
`;

export const HeartIcon = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #9747ff;
  width: 10%;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

export const HeartNumber = styled.div`
  padding-top: 0.35rem;
  color: black;
  font-size: 3.3rem;

  @media ${RESPONSIVE.tablet} {
    padding-top: 0.7rem;
  }
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
`;

export const DeleteBtn = styled(Correction)`
  background-color: #f00;
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
  display: flex;
`;

export const User = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;
  width: 97%;
`;

export const DeleteDiv = styled.div`
  width: 3%;
  cursor: pointer;
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
  justify-content: space-between;
`;

export const LeftDiv = styled.div`
  width: 88%;
  font-size: 1.5rem;
`;

export const RightDiv = styled.div`
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
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 3px;
`;

export const Modal = styled.div`
  width: 100%;
  z-index: 9999;
  position: relative;
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

export const DeleteButtonDiv = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 40rem;
`;

export const ReportTextDiv = styled.div`
  text-align: right;
  margin-bottom: 1rem;
`;

export const DeletePost = styled.div`
  width: 100%;
  text-align: right;
  padding-bottom: 1rem;
`;

export const DeletePostButton = styled.button`
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserWrap = styled.div`
  padding-left: 0.5rem;
  padding-top: 1rem;
  font-size: 1.5rem;
`;

export const SolidUserDiv = styled.div`
  display: flex;
`;

export const Nickname = styled.span`
  margin-left: 0.5rem;
`;

export const BlackDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
`;

export const TitleTextarea = styled.textarea`
  resize: none;
  width: 75rem;
  align-items: center;
  padding-top: 2rem;
`;

export const Pre = styled.pre`
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
`;

export const HeaderBox = styled.div`
  margin-top: 10rem;
`;

export const MyBtnBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;
