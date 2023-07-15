import React from 'react';
import MainPage from '../../pages/Main';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';

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
    exact: true,
  },
  REGISTER: {
    path: '/register',
    link: '/register',
    element: <RegisterPage />,
    exact: true,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: <LoginPage />,
    exact: true,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
