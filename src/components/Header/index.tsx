import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';
import { HiMenu } from 'react-icons/hi';
import ProfileImg from '../commons/ProfileImg';

const MENU = [
  {
    name: '서비스 소개',
    link: '/'
  },
  {
    name: 'AI 자가진단',
    link: '/ai'
  },
  {
    name: '동물병원 찾기',
    link: '/'
  },
  {
    name: '실시간 상담',
    link: ROUTE.CHATLIST.link
  },
  {
    name: '커뮤니티',
    link: '/'
  }
];

const PROFILE_MENU = [
  {
    name: '마이페이지',
    link: '/'
  },
  {
    name: '채팅',
    link: `${ROUTE.CHATDETAIL.link}/:유저아이디`
  }
];

const Header = () => {
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const [userToken] = useState(true);

  const onClickProfileBox = () => {
    setIsProfileMenu(prev => !prev);
  };

  const onClickMobileMenuBtn = () => {
    setIsMobileMenu(prev => !prev);
  };

  return (
    <S.Wrap>
      <S.container>
        <S.LogoBox>
          <img src="/images/commons/logo.png" alt="" />
        </S.LogoBox>
        <S.Navigation>
          <S.MenuBox>
            <S.MenuList>
              {MENU.map(({ name, link }, index) => (
                <li key={index}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </S.MenuList>
            {/* <S.SubBox>
              <S.LoginBtn>
                <Link to={ROUTE.LOGIN.link}>로그인 / 회원가입</Link>
              </S.LoginBtn>
            </S.SubBox> */}
            {userToken && (
              <S.ProfileWrap>
                <S.ProfileBox onClick={onClickProfileBox}>
                  <S.ProfileContainer>
                    <p>깜장이 님</p>
                    <S.ProfileImgBox>
                      <img src="/images/commons/profile.png" alt="" />
                      <S.AlarmImgBox>
                        <img src="/images/commons/alarm.png" alt="" />
                      </S.AlarmImgBox>
                    </S.ProfileImgBox>
                  </S.ProfileContainer>
                </S.ProfileBox>
                {isProfileMenu && (
                  <S.ProfileDetailBox>
                    <S.ProfileBoxMenu>
                      {PROFILE_MENU.map(({ name, link }, index) => (
                        <li key={index}>
                          <Link to={link} onClick={onClickProfileBox}>
                            {name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to="/">로그아웃</Link>
                      </li>
                    </S.ProfileBoxMenu>
                  </S.ProfileDetailBox>
                )}
              </S.ProfileWrap>
            )}
          </S.MenuBox>
        </S.Navigation>
        <S.MobileMenuBtn type="button" onClick={onClickMobileMenuBtn}>
          <HiMenu />
        </S.MobileMenuBtn>
        <S.MobileMenu className={isMobileMenu ? 'active' : ''}>
          <S.MobileMenuContainer>
            <S.MobileMenuHead>
              <S.MobileLogoBox>
                <img src="/images/commons/logo.png" alt="" />
              </S.MobileLogoBox>
              <S.MobileMenuCloseBtn type="button" onClick={onClickMobileMenuBtn}>
                <img src="/images/commons/close.png" alt="" />
              </S.MobileMenuCloseBtn>
            </S.MobileMenuHead>
            {/* <S.MobileLoginBox>
              <S.LoginMent>로그인 후 이용해 주세요.</S.LoginMent>
              <S.LoginMenuBtn to={ROUTE.LOGIN.link} onClick={onClickMobileMenuBtn}>
                로그인 하러가기 &gt;
              </S.LoginMenuBtn>
            </S.MobileLoginBox> */}
            <S.MobileProfileBox>
              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
              <p>깜장이 수의사 님</p>
              <button type="button">로그아웃</button>
            </S.MobileProfileBox>
            <S.MobileNavigation>
              <ul>
                {MENU.map(({ name, link }, index) => (
                  <li key={index}>
                    <Link to={link} onClick={onClickMobileMenuBtn}>
                      <span>{name}</span>
                      <span>&gt;</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={`${ROUTE.CHATDETAIL.link}/:유저아이디`} onClick={onClickMobileMenuBtn}>
                    <span>채팅</span>
                    <span>&gt;</span>
                  </Link>
                </li>
              </ul>
            </S.MobileNavigation>
          </S.MobileMenuContainer>
        </S.MobileMenu>
      </S.container>
    </S.Wrap>
  );
};

export default Header;
