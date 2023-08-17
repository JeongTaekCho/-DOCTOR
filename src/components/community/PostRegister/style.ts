import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TitleDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5%;
  border: 1px solid lightgrey;
`;

export const Title = styled.input`
  font-size: 1.8rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
`;

export const DetailDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  height: 40rem;
`;

export const Detail = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 1rem;
  font-size: 1.5rem;
  outline: none;
  white-space: pre-line;
`;

export const ButtonDiv = styled.div`
  width: 80%;
  margin: auto;
  text-align: right;
  margin-top: 2rem;
`;

export const Register = styled.button`
  width: 5.5rem;
  height: 3.5rem;
  font-size: 1.8rem;
  color: white;
  border-radius: 5px;
  border: none;
  background-color: #9747ff;
  margin-right: 2%;
`;

export const Cancel = styled.button`
  width: 5.5rem;
  height: 3.5rem;
  font-size: 1.8rem;
  color: black;
  border-radius: 5px;
  border: none;
  background-color: lightgrey;
`;
