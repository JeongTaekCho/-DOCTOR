import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 8rem 0;
  margin-top: 10rem;
  border-top: 1px solid #eee;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 6rem;
`;

export const LogoBox = styled.div`
  width: 20rem;

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
`;
