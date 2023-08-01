/* eslint-disable no-unused-vars */
import React from 'react';
import MainPage from '../../pages/Main';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';
import ChatsPage from '../../pages/Chats';
import ChatDetail from '../../pages/ChatDetail';
import AiPage from '../../pages/Ai';
import MyPage from '../../pages/MyPage';
import Community from '../../pages/Community';
import HospitalPage from '../../pages/Hospital';
import AdminReportPostPage from '../../components/admin/PagesAdmin/ReportPostPage';
import AdminReportCommentPage from '../../components/admin/PagesAdmin/ReportCommentPage';
import AdminCertifiedPage from '../../components/admin/PagesAdmin/CertifiedPage';
import AdminUserInfoPage from '../../components/admin/PagesAdmin/UserInfoPage';
import FreeDetail from '../../components/community/FreeDetail';

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
  COMMUNITY: {
    id: 8,
    path: '/community',
    link: '/community',
    element: <Community />,
    exact: true
  },
  HOSPITAL: {
    id: 9,
    path: '/hospital',
    link: '/hospital',
    element: <HospitalPage />,
    exact: true
  },

  ADMINREPORTPOST: {
    path: '/admin-report-post',
    link: '/admin-report-post',
    element: <AdminReportPostPage />,
    exact: true,
    id: 0
  },
  ADMINREPORTCOMMAND: {
    path: '/admin-report-comment',
    link: '/admin-report-comment',
    element: <AdminReportCommentPage />,
    exact: true,
    id: 0
  },
  ADMINUSERINFO: {
    path: '/admin-userinfo',
    link: '/admin-userinfo',
    element: <AdminUserInfoPage />,
    exact: true,
    id: 0
  },
  ADMINCERTIFIED: {
    path: '/admin-certified',
    link: '/admin-certified',
    element: <AdminCertifiedPage />,
    exact: true,
    id: 0
  },
  FREEDETAIL: {
    id: 11,
    path: '/free/:userId',
    link: '/free',
    element: <FreeDetail />,
    exact: true
  }
};

export const ROUTE_ARR = Object.values(ROUTE);
