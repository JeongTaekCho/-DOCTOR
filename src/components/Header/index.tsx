import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes/routeData';

const MENU = [
  {
    name: '서비스 소개',
    link: '/',
  },
  {
    name: 'AI 자가진단',
    link: '/',
  },
  {
    name: '동물병원 찾기',
    link: '/',
  },
  {
    name: '실시간 상담',
    link: ROUTE.CHATLIST.link,
  },
  {
    name: '커뮤니티',
    link: '/',
  },
];

const PROFILE_MENU = [
  {
    name: '마이페이지',
    link: '/',
  },
  {
    name: '채팅',
    link: '/',
  },
];

const Header = () => {
  const [isProfileMenu, setIsProfileMenu] = useState(false);

  const [userToken] = useState(true);

  const onClickProfileBox = () => {
    setIsProfileMenu(prev => !prev);
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
            <S.SubBox>
              <S.LoginBtn>
                <Link to={ROUTE.LOGIN.link}>로그인</Link>
              </S.LoginBtn>
              <S.RegisterBtn>
                <Link to={ROUTE.REGISTER.link}>회원가입</Link>
              </S.RegisterBtn>
            </S.SubBox>
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
      </S.container>
    </S.Wrap>
  );
};

export default Header;