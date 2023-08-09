import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 1rem;
  padding-top: 2rem;
`;

export const List = styled.div`
  width: 100%;
  position: relative;
  padding: 0 3rem 0 3rem;
`;

export const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  padding: 1rem;
  display: flex;
  transition: 0.5s;
  &:hover {
    background-color: #d5d5d5;
  }
`;
export const PostHeader = styled.h4`
  font-size: 2rem;
  font-weight: 500;
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

export const PageNumber = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;
