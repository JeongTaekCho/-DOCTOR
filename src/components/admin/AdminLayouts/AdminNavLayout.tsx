import React from 'react';
import { LayoutRouteProps, Link } from 'react-router-dom';
import { styled } from 'styled-components';

const AdminLayout = ({ children }: LayoutRouteProps) => {
  return (
    <Wrap>
      <Nav>
        <NavTitle>
          <TitleName>
            <LogoImgBox>
              <img src="/images/commons/doctor.png" />
            </LogoImgBox>
            <span>관리자 페이지</span>
          </TitleName>
        </NavTitle>
        <NavMenu to="/report-wait-admin">
          <MenuName>신고 접수</MenuName>
        </NavMenu>
        <NavMenu to="/certified-wait-admin">
          <MenuName>수의사 인증 접수</MenuName>
        </NavMenu>
        {/* <NavMenu to="/">메뉴이름 3</NavMenu> */}
      </Nav>
      {children}
    </Wrap>
  );
};

export default AdminLayout;

const Wrap = styled.div`
  width: 100%;
`;

const Nav = styled.div`
  position: fixed;
  width: 20.83%;
  height: 100%;
  padding-top: 10rem;
  font-size: 4rem;
  background-color: #363740;
  color: #667085;
  top: 0;
  left: 0;
`;

const NavTitle = styled.div`
  // <관리자페이지>
  width: 100%;
`;

const TitleName = styled.div`
  //'관리자 페이지'
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bolder;
  color: #cbcce8;
  padding: 1rem 0 1rem 3rem;
  margin-bottom: 6rem;
`;

const NavMenu = styled(Link)`
  // <메뉴바>
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  align-items: center;
  padding: 1rem 0 3rem 3rem;

  &:hover {
    background-color: #3e4049;
    color: #ebebeb;
    border-left: #dadffb 1rem solid;
    padding-left: 7%;
  }
`;

const LogoImgBox = styled.div`
  width: 5rem;

  img {
    width: 100%;
  }
`;

const MenuName = styled.div`
  // 메뉴 이름
  font-size: 2rem;
  padding-top: 2rem;
`;
