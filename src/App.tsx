import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle.ts';
import RouteComponents from './constants/routes/routs.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutComponents from './components/layout/Layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <LayoutComponents>
          <GlobalStyle />
          <RouteComponents />
        </LayoutComponents>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
