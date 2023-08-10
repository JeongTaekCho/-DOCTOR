import React from 'react';
import { LayoutRouteProps, Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from '../IconImg';

const AdminLayout = ({ children }: LayoutRouteProps) => {
  const location = useLocation();

  return (
    <Wrap>
      <NavBar>
        <Title>
          <TitleName>관리자 페이지</TitleName>
        </Title>
        <Menu
          to="/admin-userinfo"
          //onClick={handleMenuClick('admin-userinfo')}
          isSelected={location.pathname === '/admin-userinfo'}
        >
          <Icon w="2rem" h="2rem" src="/images/commons/usermanage1.png" />
          <MenuName>유저 관리</MenuName>
        </Menu>
        <Menu
          to="/admin-certified"
          //onClick={handleMenuClick('admin-certified')}
          isSelected={location.pathname === '/admin-certified'}
        >
          <Icon w="2rem" h="2.5rem" src="/images/commons/certified1.png" />
          <MenuName>수의사 인증 접수</MenuName>
        </Menu>
        <Menu to="/admin-report-post">
          <Icon w="2rem" h="2rem" src="/images/commons/report1.png" />
          <MenuName>신고 접수</MenuName>
        </Menu>
        <List
          to="/admin-report-post"
          //onClick={handleMenuClick('admin-report-post')}
          isSelected={location.pathname === '/admin-report-post'}
        >
          <ListName>게시글 신고</ListName>
        </List>
        <List
          to="/admin-report-comment"
          //onClick={handleMenuClick('admin-report-comment')}
          isSelected={location.pathname === '/admin-report-comment'}
        >
          <ListName>댓글 신고</ListName>
        </List>
      </NavBar>
      {children}
    </Wrap>
  );
};

export default AdminLayout;
//--------------------------------
//--------------------------------
const Wrap = styled.div`
  width: 100%;
`;

const NavBar = styled.div`
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

//--------------------------------
//--------------------------------
const Title = styled.div`
  // 관리자페이지[]
  width: 100%;
`;
const TitleName = styled.div`
  // 관리자페이지['관리자 페이지']
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: #667085;
  padding: 1rem 0 1rem 2rem;
  margin: 5rem 0 3rem 0;
`;

//--------------------------------
const Menu = styled(Link)<{ isSelected?: boolean }>`
  // 신고접수[]
  // 수의사 인증 접수[]
  // 유저관리[]
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3rem 0 2rem 2rem;
  background-color: ${props => (props.isSelected ? '#2c2d33' : 'transparent')};
  &:hover {
    background-color: #2c2d33;
  }
`;
const MenuName = styled.div`
  // 신고접수['신고접수']
  // 수의사 인증 접수['수의사 인증 접수']
  // 유저관리['유저관리']
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 2rem;
  padding-left: 1.5rem;
`;

//--------------------------------
const List = styled(Link)<{ isSelected?: boolean }>`
  // 게시글신고[]
  // 댓글신고[]
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  align-items: center;
  background-color: ${props => (props.isSelected ? '#2c2d33' : 'transparent')};
  &:hover {
    background-color: #37383f;
    color: #ebebeb;
    border-left: #dadffb 0.5rem solid;
  }
`;
const ListName = styled.div`
  // 게시글신고['게시글신고']
  // 댓글신고['댓글신고']
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  padding: 0rem 0 0 2rem;
  margin: 1rem 0 1rem 4rem;
  border-left: #51535c 0.3rem solid;
`;
