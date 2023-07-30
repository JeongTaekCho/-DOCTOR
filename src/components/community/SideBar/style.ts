import styled from 'styled-components';

export const Side = styled.div`
  background-color: #363740;
  width: 15%;
  position: fixed;
  height: 100%;
  top: 7.4rem;
  left: 0;
  padding-top: 8rem;
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
`;

export const ListDiv = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
