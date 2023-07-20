import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { RESPONSIVE } from '../../../styles/responsive';
import { STYLE } from '../../../styles/commonStyle';

export const Wrap = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 9999;
`;

export const container = styled.header`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${RESPONSIVE.tablet} {
    width: 90%;
  }
`;

export const LogoBox = styled.div`
  width: 10rem;
  img {
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  @media ${RESPONSIVE.tablet} {
    display: none;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center;

  li {
    a {
      font-size: 2rem;
      font-weight: 400;
      color: ${STYLE.subFontColor};
    }
  }
`;

export const ProfileWrap = styled.div`
  position: relative;
`;

export const ProfileBox = styled.button`
  width: 215px;
  padding: 6px 0;
  background-color: #344054;
  border-radius: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 101;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const ProfileImgBox = styled.div`
  position: relative;
  width: 40px;
  img {
    width: 100%;
  }
`;

export const AlarmImgBox = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 18px;
  img {
    width: 100%;
  }
`;

export const ProfileDetailBox = styled.div`
  width: 225px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #ae9aff 6.77%,
    rgba(52, 64, 84, 0.00520833) 99.99%,
    rgba(52, 64, 84, 0) 100%
  );
  padding-top: 80px;
  position: absolute;
  top: -5px;
  left: -5px;
  border-radius: 30px;
  z-index: 10;
`;

export const ProfileBoxMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    a,
    button {
      display: block;
      width: 100%;
      padding: 10px 0;
      font-size: 1.6rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
    }
  }
`;

export const SubBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const LoginBtn = styled.div`
  width: 215px;
  background-color: #344054;
  border-radius: 52px;
  a {
    display: block;
    width: 100%;
    padding: 1.8rem 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }
`;

export const MobileMenuBtn = styled.button`
  @media ${RESPONSIVE.pc} {
    display: none;
  }

  svg {
    font-size: 3.2rem;
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
  z-index: 9999;
  transition: ease-in-out 0.2s;
  opacity: 0;

  &.active {
    left: 0;
    opacity: 1;
  }
`;

export const MobileMenuContainer = styled.div`
  @media ${RESPONSIVE.tablet} {
    width: 60%;
    padding: 1.8rem 0;
    margin: 0 auto;
  }

  @media ${RESPONSIVE.mobile} {
    width: 90%;
  }
`;

export const MobileMenuHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileLogoBox = styled.div`
  @media ${RESPONSIVE.tablet} {
    width: 10rem;
  }
  @media ${RESPONSIVE.mobile} {
    width: 21.875%;
  }

  img {
    width: 100%;
  }
`;

export const MobileMenuCloseBtn = styled.button`
  @media ${RESPONSIVE.tablet} {
    width: 5rem;
  }
  @media ${RESPONSIVE.mobile} {
    width: 10%;
  }

  img {
    width: 100%;
  }
`;

export const LoginMent = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${STYLE.mainFontColor};
  margin: 3rem 0 1rem;
`;

export const LoginMenuBtn = styled(Link)`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${STYLE.subFontColor};
  text-decoration: underline;
`;

export const MobileNavigation = styled.nav`
  width: 100%;
  margin-top: 3rem;
  border-top: 1px solid #333;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    li {
      width: 100%;

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1.5rem 0;

        span {
          font-size: 2.4rem;
          font-weight: 500;
          color: ${STYLE.mainFontColor};
        }
      }
    }
  }
`;

export const MobileLoginBox = styled.div``;

export const MobileProfileBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 3rem;

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${STYLE.mainFontColor};
  }

  button {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${STYLE.subFontColor};
    margin-left: 0.5rem;
  }
`;
