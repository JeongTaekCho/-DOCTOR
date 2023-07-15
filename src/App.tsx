import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle.ts';
import RouteComponents from './constants/routes/routs.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutComponents from './components/layout/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <LayoutComponents>
        <GlobalStyle />
        <RouteComponents />
      </LayoutComponents>
    </Router>
  </React.StrictMode>,
);
