import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle.ts';
import RouteComponents from './constants/routes/routs.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <RouteComponents />
    </Router>
  </React.StrictMode>,
);
