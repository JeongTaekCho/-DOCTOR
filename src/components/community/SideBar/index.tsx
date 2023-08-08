import React from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData';
const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <S.Side>
        <Link to={ROUTE.FREECOMMUNITY.path}>
          <S.Free className={pathname === '/community/free' ? 'selected' : ''}>
            <p>자유게시판</p>
          </S.Free>
        </Link>
        <Link to={ROUTE.INFOCOMMUNITY.path}>
          <S.Info className={pathname === '/community/info' ? 'selected' : ''}>
            <p>정보게시판</p>
          </S.Info>
        </Link>
      </S.Side>
    </>
  );
};

export default SideBar;
