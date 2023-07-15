import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 360px;
  margin: 8rem auto 0;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #344054;
  margin-bottom: 6rem;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  color: #344054;
`;

export const InputError = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #eb4335;
`;

export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 3.2rem;
`;
