import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import ProfileImg from '../ProfileImg';
import { ROUTE } from '../../../constants/routes/routeData';
import { tokenAtom } from '../../../atoms/atoms';
import { MENU, PROFILE_MENU } from '../../../constants/commons/menus';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery';
import { useAtomValue } from 'jotai';
import Swal from 'sweetalert2';
import { imgUrl } from '../../../api';

const Header = () => {
  const auth = useAtomValue(tokenAtom);
  const { pathname } = useLocation();

  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  // const [isAlramMenu, setIsAlramMenu] = useState(false);

  const { data: userData } = useGetUsersQuery();

  // const handleModalClose = () => {
  //   setIsAlramMenu(false);
  // };

  const handleProfileBox = () => {
    setIsProfileMenu(prev => !prev);
  };

  const handleMobileMenuBtn = () => {
    setIsMobileMenu(prev => !prev);
  };

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  // const handleToggleAlramBtn = () => {
  //   setIsAlramMenu(prev => !prev);
  // };

  useEffect(() => {
    if (userData?.user?.deleted_at) {
      Swal.fire('서비스 이용이 불가능한 계정입니다.');

      setTimeout(() => {
        handleLogout();
      }, 3000);
    }
  }, [userData]);

  return (
    <S.Wrap>
      <S.container>
        <S.LogoBox>
          <Link to={ROUTE.HOME.link}>
            <img src="/images/commons/logo.png" alt="독터 로고" />
          </Link>
        </S.LogoBox>
        <S.Navigation>
          <S.MenuBox>
            <S.MenuList>
              {MENU.map(({ id, name, link }) => (
                <li key={id}>
                  <Link className={pathname.includes(link.slice(0, 4)) ? 'selected' : ''} to={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </S.MenuList>
            <S.SubMenuWrap>
              {/* {auth && (
                <S.AlramBox>
                  <S.AlramNumBox>
                    <span>10</span>
                  </S.AlramNumBox>
                  <button type="button" onClick={handleToggleAlramBtn}>
                    <IoMdNotifications />
                  </button>
                  {isAlramMenu && (
                    <S.AlramContainer>
                      <S.AlramHead>
                        <h4>
                          <span>채팅 및 댓글 알림</span>
                          <button type="button" onClick={handleModalClose}>
                            X
                          </button>
                        </h4>
                      </S.AlramHead>
                      <S.AlramBody>
                        <S.AlramList>
                          <li>
                            <Link to="/">
                              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                              <span>
                                [댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                              <span>
                                [댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?
                              </span>
                            </Link>
                          </li>
                        </S.AlramList>
                      </S.AlramBody>
                    </S.AlramContainer>
                  )}
                </S.AlramBox>
              )} */}
              {auth ? (
                <S.ProfileWrap>
                  <S.ProfileBox onClick={handleProfileBox}>
                    <S.ProfileContainer>
                      <p>{userData?.user?.nickname}</p>
                      <S.ProfileImgBox>
                        <ProfileImg
                          w="4rem"
                          h="4rem"
                          src={`${imgUrl}${userData?.user?.img_path}`}
                        />
                      </S.ProfileImgBox>
                    </S.ProfileContainer>
                  </S.ProfileBox>
                  {isProfileMenu && (
                    <S.ProfileDetailBox>
                      <S.ProfileBoxMenu>
                        {PROFILE_MENU.map(({ id, name, link }) => (
                          <li key={id}>
                            <Link to={link} onClick={handleProfileBox}>
                              {name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button onClick={handleLogout}>로그아웃</button>
                        </li>
                      </S.ProfileBoxMenu>
                    </S.ProfileDetailBox>
                  )}
                </S.ProfileWrap>
              ) : (
                <S.SubBox>
                  <S.LoginBtn>
                    <Link to={ROUTE.LOGIN.link}>로그인</Link>
                  </S.LoginBtn>
                </S.SubBox>
              )}
            </S.SubMenuWrap>
          </S.MenuBox>
        </S.Navigation>
        <S.MobileSubMenu>
          {/* {auth && (
            <S.AlramBox>
              <S.AlramNumBox>
                <span>10</span>
              </S.AlramNumBox>
              <button type="button" onClick={handleToggleAlramBtn}>
                <IoMdNotifications />
              </button>
              {isAlramMenu && (
                <S.AlramContainer>
                  <S.AlramHead>
                    <h4>
                      <span>채팅 및 댓글 알림</span>
                      <button type="button" onClick={handleModalClose}>
                        X
                      </button>
                    </h4>
                  </S.AlramHead>
                  <S.AlramBody>
                    <S.AlramList>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <ProfileImg w="6rem" h="6rem" src="/images/commons/kkam.png" />
                          <span>[댓글] 깜장이님 : 건대입구 주변에 어느 동물병원이 갈만한가요?</span>
                        </Link>
                      </li>
                    </S.AlramList>
                  </S.AlramBody>
                </S.AlramContainer>
              )}
            </S.AlramBox>
          )} */}
          <S.MobileMenuBtn type="button" onClick={handleMobileMenuBtn}>
            <HiMenu />
          </S.MobileMenuBtn>
        </S.MobileSubMenu>
        <S.MobileMenu className={isMobileMenu ? 'active' : ''}>
          <S.MobileMenuContainer>
            <S.MobileMenuHead>
              <S.MobileLogoBox>
                <img src="/images/commons/logo.png" alt="" />
              </S.MobileLogoBox>

              <S.MobileMenuCloseBtn type="button" onClick={handleMobileMenuBtn}>
                <img src="/images/commons/close.png" alt="" />
              </S.MobileMenuCloseBtn>
            </S.MobileMenuHead>
            {auth ? (
              <>
                <S.MobileProfileBox>
                  <ProfileImg w="6rem" h="6rem" src={`${imgUrl}${userData?.user?.img_path}`} />
                  <p>{userData?.user?.nickname} 님</p>
                  <button type="button" onClick={handleLogout}>
                    로그아웃
                  </button>
                </S.MobileProfileBox>
                <S.MyPageLink to={ROUTE.MYPAGE.link} onClick={handleMobileMenuBtn}>
                  마이페이지
                </S.MyPageLink>
              </>
            ) : (
              <S.MobileLoginBox>
                <S.LoginMent>로그인 후 이용해 주세요.</S.LoginMent>
                <S.LoginMenuBtn to={ROUTE.LOGIN.link} onClick={handleMobileMenuBtn}>
                  로그인 하러가기 &gt;
                </S.LoginMenuBtn>
              </S.MobileLoginBox>
            )}

            <S.MobileNavigation>
              <ul>
                {MENU.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link to={link} onClick={handleMobileMenuBtn}>
                      <span>{name}</span>
                      <span>&gt;</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={ROUTE.CHATDETAIL.link} onClick={handleMobileMenuBtn}>
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
