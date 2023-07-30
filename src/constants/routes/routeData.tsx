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
import ReportAdminPage from '../../components/admin/ReportAdmin/ReportAdminFalse';
import CertifiedAdminTreatPage from '../../components/admin/CertifiedAdmin/CertifiedAdminTreat';
import CertifiedAdminWaitPage from '../../components/admin/CertifiedAdmin/CertifiedAdminWait';
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

  REPORTADMINTREAT: {
    path: '/report-treat-admin',
    link: '/report-treat-admin',
    element: <ReportAdminPage />,
    exact: true,
    id: 0
  },
  REPORTADMINWAIT: {
    path: '/report-wait-admin',
    link: '/report-wait-admin',
    element: <ReportAdminPage />,
    exact: true,
    id: 0
  },
  CERTIFIEDADMINTREAT: {
    path: '/certified-treat-admin',
    link: '/certified-treat-admin',
    element: <CertifiedAdminTreatPage />,
    exact: true,
    id: 0
  },
  CERTIFIEDADMINWAIT: {
    path: '/certified-wait-admin',
    link: '/certified-wait-admin',
    element: <CertifiedAdminWaitPage />,
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
