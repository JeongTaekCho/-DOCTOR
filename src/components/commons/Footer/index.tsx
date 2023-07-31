import React from 'react';
import * as S from './style';

const Footer = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.LogoBox>
          <img src="/images/commons/logo.png" alt="" />
        </S.LogoBox>
        <S.FooterContents>
          <p>독터 | 사업자등록번호 : 000-00-00000</p>
          <p>주소 : 서울특별시 성동구 성수동 | 대표번호 1644-0000</p>
          <p>Copyright(c) 2023 독터. All Rights Reserved.</p>
        </S.FooterContents>
      </S.Container>
    </S.Wrap>
  );
};

export default Footer;
