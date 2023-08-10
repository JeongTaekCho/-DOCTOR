import React from 'react';
import SideBar from '../community/SideBar';
import styled from 'styled-components';

interface LayoutProps {
  category?: string;
}

const SideLayout = ({ category }: LayoutProps) => {
  return (
    <Wrap>
      <SideBar category={category} />
    </Wrap>
  );
};

export default SideLayout;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
`;
