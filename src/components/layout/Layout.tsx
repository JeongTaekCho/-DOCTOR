import React, { ReactNode } from 'react';
import Header from '../header';
import { styled } from 'styled-components';

interface layoutProps {
  children: ReactNode;
}

const LayoutComponents = ({ children }: layoutProps) => {
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
`;
