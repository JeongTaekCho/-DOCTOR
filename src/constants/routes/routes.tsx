import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_ARR } from './routeData';

const RouteComponents = () => {
  return (
    <Routes>
      {ROUTE_ARR.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default RouteComponents;
