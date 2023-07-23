import React from 'react';
import MainPage from '../../pages/Main';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';
import ChatsPage from '../../pages/Chats';
import ChatDetail from '../../pages/ChatDetail';
import AiPage from '../../pages/Ai';
import MyPage from '../../pages/MyPage';
import Community from '../../pages/Community';

interface Route {
  path: string;
  link: string;
  element: JSX.Element;
  exact: boolean;
}

export const ROUTE: { [key: string]: Route } = {
  HOME: {
    path: '/',
    link: '/',
    element: <MainPage />,
    exact: true
  },
  REGISTER: {
    path: '/register',
    link: '/register',
    element: <RegisterPage />,
    exact: true
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: <LoginPage />,
    exact: true
  },
  CHATLIST: {
    path: '/chats',
    link: '/chats',
    element: <ChatsPage />,
    exact: true
  },
  CHATDETAIL: {
    path: '/chats/:userId',
    link: '/chats',
    element: <ChatDetail />,
    exact: true
  },
  AI: {
    path: '/ai',
    link: '/ai',
    element: <AiPage />,
    exact: true
  },
  MYPAGE: {
    path: '/mypage/:userId',
    link: '/mypage',
    element: <MyPage />,
    exact: true
  },
  COMMUNITY: {
    path: '/community',
    link: '/community',
    element: <Community />,
    exact: true
  }
};

export const ROUTE_ARR = Object.values(ROUTE);
