import React, { ReactNode } from 'react';
import SideBar from '../community/SideBar';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const SideLayout = ({ children }: LayoutProps) => {
  return (
    <Wrap>
      <SideBar />
      {children}
    </Wrap>
  );
};

export default SideLayout;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
`;
