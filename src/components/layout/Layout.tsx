import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import Header from '../commons/Header';

interface LayoutProps {
  children: ReactNode;
}

const LayoutComponents = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Wrap>{children}</Wrap>
    </>
  );
};

export default LayoutComponents;

const Wrap = styled.div`
  width: 100%;
  padding-top: 16.5rem;
  height: 100vh;
  background: linear-gradient(180deg, #d9d9d9 -1.93%, rgba(217, 217, 217, 0) 81.41%);
`;
