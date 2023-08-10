import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

interface LayoutProps {
  children: ReactNode;
}

const LayoutComponents = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Wrap>
        {children}
        <Footer />
      </Wrap>
    </>
  );
};

export default LayoutComponents;

const Wrap = styled.div`
  width: 100%;
  padding-top: 16.5rem;
  height: 100vh;
  background: linear-gradient(180deg, #ededed -1.93%, rgba(217, 217, 217, 0) 81.41%);
`;
