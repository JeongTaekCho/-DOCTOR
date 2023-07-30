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
  },
  HOSPITAL: {
    path: '/hospital',
    link: '/hospital',
    element: <HospitalPage />,
    exact: true
  },
  REPORTADMINTREAT: {
    path: '/report-treat-admin',
    link: '/report-treat-admin',
    element: <ReportAdminPage />,
    exact: true
  },
  REPORTADMINWAIT: {
    path: '/report-wait-admin',
    link: '/report-wait-admin',
    element: <ReportAdminPage />,
    exact: true
  },
  CERTIFIEDADMINTREAT: {
    path: '/certified-treat-admin',
    link: '/certified-treat-admin',
    element: <CertifiedAdminTreatPage />,
    exact: true
  },
  CERTIFIEDADMINWAIT: {
    path: '/certified-wait-admin',
    link: '/certified-wait-admin',
    element: <CertifiedAdminWaitPage />,
    exact: true
  },
  FREEDETAIL: {
    path: '/free/:userId',
    link: '/free',
    element: <FreeDetail />,
    exact: true
  }
};

export const ROUTE_ARR = Object.values(ROUTE);
