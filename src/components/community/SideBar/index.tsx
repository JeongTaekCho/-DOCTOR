import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData';
const SideBar = () => {
  return (
    <>
      <S.Side>
        <Link to={ROUTE.FREECOMMUNITY.path}>
          <S.Free>
            <p>자유게시판</p>
          </S.Free>
        </Link>
        <Link to={ROUTE.INFOCOMMUNITY.path}>
          <S.Info>
            <p>정보게시판</p>
          </S.Info>
        </Link>
      </S.Side>
    </>
  );
};

export default SideBar;
