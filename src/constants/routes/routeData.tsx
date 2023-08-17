/* eslint-disable no-unused-vars */
import React from 'react';
import MainPage from '../../pages/Main';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';
import ChatsPage from '../../pages/Chats';
import ChatDetail from '../../pages/ChatDetail';
import AiPage from '../../pages/Ai';
import MyPage from '../../pages/MyPage';
import HospitalPage from '../../pages/Hospital';

import FreeDetail from '../../components/community/FreeDetail';
import Free from '../../pages/Community/Free';
import Info from '../../pages/Community/Info';
import AdminReportPostPage from '../../pages/Admin/ReportPostPage';
import AdminReportCommentPage from '../../pages/Admin/ReportCommentPage';
import AdminUserInfoPage from '../../pages/Admin/UserInfoPage';
import AdminCertifiedPage from '../../pages/Admin/CertifiedPage';

interface Route {
  id: number;
  path: string;
  link: string;
  element: JSX.Element;
  exact: boolean;
}

export const ROUTE: { [key: string]: Route } = {
  HOME: {
    id: 1,
    path: '/',
    link: '/',
    element: <MainPage />,
    exact: true
  },
  REGISTER: {
    id: 2,
    path: '/register',
    link: '/register',
    element: <RegisterPage />,
    exact: true
  },
  LOGIN: {
    id: 3,
    path: '/login',
    link: '/login',
    element: <LoginPage />,
    exact: true
  },
  CHATLIST: {
    id: 4,
    path: '/chat-list',
    link: '/chat-list',
    element: <ChatsPage />,
    exact: true
  },
  CHATDETAIL: {
    id: 5,
    path: '/chats',
    link: '/chats',
    element: <ChatDetail />,
    exact: true
  },
  AI: {
    id: 6,
    path: '/ai',
    link: '/ai',
    element: <AiPage />,
    exact: true
  },
  MYPAGE: {
    id: 7,
    path: '/mypage',
    link: '/mypage',
    element: <MyPage />,
    exact: true
  },
  FREECOMMUNITY: {
    id: 8,
    path: '/community/free',
    link: '/community/free',
    element: <Free />,
    exact: true
  },
  INFOCOMMUNITY: {
    id: 9,
    path: '/community/info',
    link: '/community/info',
    element: <Info />,
    exact: true
  },
  HOSPITAL: {
    id: 10,
    path: '/hospital',
    link: '/hospital',
    element: <HospitalPage />,
    exact: true
  },
  FREEDETAIL: {
    id: 11,
    path: '/community/:postId',
    link: '/community',
    element: <FreeDetail />,
    exact: true
  },
  ADMINREPORTPOST: {
    id: 12,
    path: '/admin-report-post',
    link: '/admin-report-post',
    element: <AdminReportPostPage />,
    exact: true
  },
  ADMINREPORTCOMMAND: {
    id: 13,
    path: '/admin-report-comment',
    link: '/admin-report-comment',
    element: <AdminReportCommentPage />,
    exact: true
  },
  ADMINUSERINFO: {
    id: 14,
    path: '/admin-userinfo',
    link: '/admin-userinfo',
    element: <AdminUserInfoPage />,
    exact: true
  },
  ADMINCERTIFIED: {
    id: 15,
    path: '/admin-certified',
    link: '/admin-certified',
    element: <AdminCertifiedPage />,
    exact: true
  }
};

export const ROUTE_ARR = Object.values(ROUTE);
