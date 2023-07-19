import styled, { css } from 'styled-components';

interface TabItemProps {
  active: boolean;
  onClick: () => void;
}

export const Wrap = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-bottom: 5rem;
`;

export const Profile = styled.div`
  width: 25rem;
  height: 28rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 3px 3px lightgrey;
`;

export const Detail = styled.div`
  width: 70rem;
  height: 80rem;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  display: none;
`;

export const Name = styled.h4`
  font-size: 3rem;
  text-align: center;
  font-weight: bolder;
  margin-top: 1.5rem;
`;

export const State = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

export const StateSpan = styled.span`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: blue;
`;

export const DetailTop = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: #d5d5d5;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  gap: 3rem;
  font-size: 2rem;
  font-weight: bolder;
`;

export const MyDetail = styled.div`
  width: 100%;
  height: 20rem;
`;

export const TabItem = styled.p<TabItemProps>`
  color: white;
  cursor: pointer;
  font-weight: bolder;

  ${({ active }) =>
    active &&
    css`
      color: #5429ff;
    `}
`;
