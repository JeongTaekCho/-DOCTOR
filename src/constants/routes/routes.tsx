import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_ARR } from './routeData';
import uuid from 'react-uuid';

const RouteComponents = () => {
  return (
    <Routes>
      {ROUTE_ARR.map(({ path, element }) => (
        <Route key={uuid()} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default RouteComponents;
