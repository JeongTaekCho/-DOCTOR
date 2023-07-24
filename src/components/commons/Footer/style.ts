import { styled } from 'styled-components';
import { RESPONSIVE } from '../../../styles/responsive';

export const Wrap = styled.div`
  width: 100%;
  padding: 8rem 0;
  margin-top: 10rem;
  border-top: 1px solid #eee;

  @media ${RESPONSIVE.tablet} {
    padding: 6rem 0;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 6rem;

  @media ${RESPONSIVE.tablet} {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const LogoBox = styled.div`
  width: 20rem;

  @media ${RESPONSIVE.tablet} {
    margin: 0 auto;
  }

  img {
    width: 100%;
  }
`;

export const FooterContents = styled.div`
  p {
    font-size: 1.7rem;
    color: #111;
    line-height: 3rem;

    &:last-child {
      margin-top: 2rem;
    }
  }

  @media ${RESPONSIVE.tablet} {
    p {
      text-align: center;
    }
  }
`;
