import { styled } from 'styled-components';

import { RESPONSIVE } from '../../../styles/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const PageNumber = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export const Post = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
  padding-top: 1%;
  padding-bottom: 1%;
`;

export const PostHeader = styled.h4`
  font-size: 2rem;
  font-weight: bolder;
`;

export const PostUser = styled.p`
  font-size: 1.6rem;
  margin-top: 3%;
`;

export const PostDate = styled.span`
  font-size: 1.6rem;
  margin-left: 4%;
`;

export const HeartDiv = styled.div`
  text-align: right;
  position: absolute;
  top: 5%;
  left: 92%;

  @media ${RESPONSIVE.mobile} {
    left: 87%;
    top: 4%;
  }
`;

export const PostHeart = styled.div`
  font-size: 2.5rem;
  color: black;
  display: flex;
`;

export const HeartNumber = styled.span`
  font-size: 2.2rem;
  color: black;
  margin-left: 3%;

  @media ${RESPONSIVE.mobile} {
    font-size: 3.2rem;
  }
`;

export const RadioDiv = styled.div`
  text-align: right;
  font-size: 1.6rem;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  left: 91%;
  top: 110%;

  @media ${RESPONSIVE.mobile} {
    top: 63%;
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
