import React, { ReactNode } from 'react';
import Header from '../header';

interface layoutProps {
  children: ReactNode;
}

const LayoutComponents = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutComponents;
