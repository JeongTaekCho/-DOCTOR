import { styled } from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: auto;
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

export const HeartIcon = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 2rem;
  color: #9747ff;
`;

export const ReportText = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
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

export const Cocomment = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border-bottom: 0.5px solid black;
  padding: 1rem 0 1rem 4rem;
`;
