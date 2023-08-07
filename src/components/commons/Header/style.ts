import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { RESPONSIVE } from '../../../styles/responsive';
import { STYLE } from '../../../styles/commonStyle';

export const Wrap = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  padding: 1.2rem 0;
  z-index: 9999;
`;

export const container = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  width: 14rem;
  a {
    img {
      width: 100%;
    }
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
      font-size: 1.8rem;
      font-weight: 400;
      color: ${STYLE.subFontColor};

      &.selected {
        font-weight: 500;
        color: ${STYLE.mainColor};
      }

      &:hover {
        font-weight: 500;
        color: ${STYLE.mainColor};
        transition: all 0.2s;
      }
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

  &:hover {
    opacity: 0.9;
    transition: all 0.2s;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

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
      font-weight: 400;
      color: #fff;
      text-align: center;

      &:hover {
        font-weight: 600;
      }
    }
  }
`;

export const SubBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const LoginBtn = styled.div`
  width: 150px;
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
    width: 33%;
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
    width: 7%;
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

export const SubMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MobileSubMenu = styled(SubMenuWrap)`
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const AlramBox = styled.div`
  position: relative;
  svg {
    font-size: 4rem;
  }
`;

export const AlramContainer = styled.div`
  width: 40rem;
  border: 1px solid #111;
  background-color: #fff;
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  border-radius: 0.6rem;

  @media ${RESPONSIVE.mobile} {
    width: 100%;
    height: 93vh;
    position: fixed;
    top: 8rem;
    left: 0;
    right: 0;
  }
`;

export const AlramHead = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid #111;
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 400;
    color: #111;

    button {
      font-size: 2rem;
    }
  }
`;

export const AlramBody = styled.div`
  width: 100%;
  padding: 2rem;

  @media ${RESPONSIVE.mobile} {
    height: 93%;
  }
`;

export const AlramList = styled.ul`
  width: 100%;
  height: 46rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media ${RESPONSIVE.mobile} {
    height: 100%;
  }

  li {
    border-bottom: 1px solid #aaa;
    &:last-child {
      border-bottom: none;
    }

    a {
      display: flex;
      width: 100%;
      padding: 1.5rem 0;
      align-items: center;
      gap: 1rem;

      span {
        width: 75%;
        font-size: 1.5rem;
        font-weight: 400;
        color: #111;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
  }
`;

export const AlramNumBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.8rem;
  height: 1.8rem;
  background-color: #eb4335;
  border-radius: 50%;

  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
  }
`;
