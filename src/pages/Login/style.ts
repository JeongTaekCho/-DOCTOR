import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';
import { RESPONSIVE } from '../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 400px;
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

export const RememberBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  a {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${STYLE.mainColor};
  }

  .css-ahj2mt-MuiTypography-root {
    font-size: 1.4rem !important;
    font-weight: 400;
    color: ${STYLE.mainFontColor};
  }
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

export const SocialLoginBtn = styled.button`
  width: 100%;
  padding: 0.9rem 0;
  background-color: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 0.8rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${STYLE.mainFontColor};
  }

  img {
    width: 24px;
  }
`;
