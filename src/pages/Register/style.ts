import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 360px;
  margin: 8rem auto 0;

  @media ${RESPONSIVE.mobile} {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: ${STYLE.mainFontColor};
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

export const InputContainer = styled.div`
  position: relative;
`;

export const PositionBtn = styled.button`
  position: absolute;
  width: 2rem;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);

  img {
    width: 100%;
  }

  span {
    display: block;
    width: 5.5rem;
    padding: 0.7rem 0;
    background-color: ${STYLE.mainColor};
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const AuthBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  width: 5.5rem;
  padding: 0.7rem 0;
  background-color: ${STYLE.mainColor};
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
`;

export const InputLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${STYLE.mainFontColor};
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

export const LinkMent = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${STYLE.mainFontColor};
  margin: 1.8rem auto 0;
  text-align: center;

  a {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${STYLE.mainColor};
  }
`;
