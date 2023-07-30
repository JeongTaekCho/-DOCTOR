import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData';
const SideBar = () => {
  return (
    <>
      <S.Side>
        <Link to={ROUTE.COMMUNITY.path}>
          <S.Free>자유게시판</S.Free>
        </Link>
        <Link to={ROUTE.COMMUNITY.path}>
          <S.Info>정보게시판</S.Info>
        </Link>
      </S.Side>
    </>
  );
};

export default SideBar;
