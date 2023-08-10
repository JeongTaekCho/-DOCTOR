import React from 'react';
import { styled } from 'styled-components';

interface TitleBarProps {
  title: string;
}

const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <Wrap>
      <Title>{title}</Title>
    </Wrap>
  );
};

export default TitleBar;

const Wrap = styled.div`
  margin-bottom: 7rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #111;
  position: relative;
  padding-left: 2rem;

  &::before {
    display: block;
    content: '';
    width: 0.8rem;
    height: 100%;
    background-color: #111;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 0.3rem;
    background-color: #4d4c4c;
    position: absolute;
    left: 0;
    bottom: -2rem;
  }
`;
