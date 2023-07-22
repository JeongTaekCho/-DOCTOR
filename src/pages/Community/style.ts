import styled, { css } from 'styled-components';

interface TabItemProps {
  active: boolean;
  onClick: () => void;
}

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Side = styled.div`
  background-color: #5429ff;
  width: 15%;
  height: 130%;
  margin-top: -8%;
  padding-top: 7%;
`;

export const Free = styled.div<TabItemProps>`
  width: 100%;
  height: 6%;
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  padding-left: 15%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #6b66ff;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #6b66ff;
    `}
`;

export const Info = styled.div<TabItemProps>`
  width: 100%;
  height: 6%;
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  padding-left: 15%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.5s;
  margin-top: 5%;

  &:hover {
    background-color: #6b66ff;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #6b66ff;
    `}
`;

export const ListDiv = styled.div`
  width: 50%;
  height: 95%;
  margin-left: auto;
  margin-right: auto;
`;
