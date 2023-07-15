import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  padding: 3rem 0;
  position: fixed;
`;

export const container = styled.header`
  width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  width: 10rem;
  img {
    width: 100%;
  }
`;

export const Navigation = styled.nav``;

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
      color: #667085;
    }
  }
`;

export const ProfileWrap = styled.div`
  position: relative;
`;

export const ProfileBox = styled.button`
  width: 215px;
  padding: 6px 0;
  background-color: #ae9aff;
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
    #344054 6.77%,
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
    a {
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
  width: 145px;
  background-color: #5429ff;
  border-radius: 30px;
  a {
    display: block;
    width: 100%;
    padding: 1.6rem 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }
`;

export const RegisterBtn = styled.div`
  width: 145px;
  border: 1px solid #5429ff;
  border-radius: 30px;
  a {
    display: block;
    width: 100%;
    padding: 1.6rem 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: #5429ff;
    text-align: center;
  }
`;
