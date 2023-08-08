import styled from 'styled-components';
import { RESPONSIVE } from '../../../styles/responsive';

export const Side = styled.div`
  background-color: #363740;
  width: 15%;
  position: fixed;
  height: 100%;
  top: 7.4rem;
  left: 0;
  padding-top: 8rem;

  @media ${RESPONSIVE.tablet} {
    width: 100%;
    height: 6rem;
    display: flex;
    padding: 0;
    justify-content: center;
    gap: 10rem;
  }
`;

export const Free = styled.div`
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
    background-color: #747474;
  }
  &.selected {
    background-color: #747474;
  }
  @media ${RESPONSIVE.tablet} {
    height: 100%;
    padding: 0;

    &:hover {
      color: #a6a6a6;
      background-color: #363740;
    }
  }
`;

export const Info = styled.div`
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
    background-color: #747474;
  }

  @media ${RESPONSIVE.pc} {
    &.selected {
      background-color: #747474;
    }
  }

  @media ${RESPONSIVE.tablet} {
    height: 100%;
    padding: 0;
    margin-top: 0;

    &:hover {
      color: #a6a6a6;
      background-color: #363740;
    }
  }
`;

export const ListDiv = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
