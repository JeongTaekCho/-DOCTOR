import { styled } from 'styled-components';
import { RESPONSIVE } from '../../../styles/responsive';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-left: 7rem;
  padding-bottom: 10rem;
`;

export const List = styled.div`
  width: 100%;
  position: relative;
`;

export const PageNumber = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export const Post = styled(Link)`
  width: 100%;
  border-bottom: 1px solid black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  display: flex;
  transition: 0.5s;
  &:hover {
    background-color: #d5d5d5;
  }
`;

export const PostHeader = styled.h4`
  font-size: 2rem;
  font-weight: bolder;
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
`;

export const LeftDiv = styled.div`
  width: 90%;
`;

export const PostUser = styled.p`
  font-size: 1.6rem;
  margin-top: 2%;
`;

export const PostDate = styled.span`
  font-size: 1.6rem;
  margin-left: 4%;
`;

export const HeartDiv = styled.span`
  width: 10%;
  display: flex;
  align-items: center;
`;

export const PostHeart = styled.span`
  font-size: 2.4rem;
  color: black;
`;

export const HeartContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const RadioDiv = styled.div`
  text-align: right;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  left: 91%;
  top: 100%;

  @media ${RESPONSIVE.mobile} {
    top: 59%;
    left: 88%;
  }
`;

export const Button = styled.button`
  width: 7rem;
  height: 3.5rem;
  text-align: center;
  background-color: #9747ff;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background-color: #b5b2ff;
  }
`;
