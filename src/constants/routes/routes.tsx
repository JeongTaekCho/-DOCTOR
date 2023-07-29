import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_ARR } from './routeData';
import uuid from 'react-uuid';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../atoms/atoms';
import { useGetUsersQuery } from '../../hooks/query/useGetUsersQuery';

const RouteComponents = () => {
  const [, setUserToken] = useAtom(tokenAtom);

  const { refetch } = useGetUsersQuery();

  useEffect(() => {
    const cookieToken = document.cookie
      .split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith('token='));

    if (cookieToken) {
      const tokenValue = cookieToken.split('=')[1];

      sessionStorage.setItem('token', tokenValue);
      setUserToken(tokenValue);
    }
    refetch();
  }, []);

  return (
    <Routes>
      {ROUTE_ARR.map(({ path, element }) => (
        <Route key={uuid()} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default RouteComponents;
