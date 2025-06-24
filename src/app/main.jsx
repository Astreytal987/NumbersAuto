import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './styles/reset.css';
import './styles/tailwind.css';

import CatalogPage from '../pages/CatalogPage/CatalogPage';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CatalogPage />
    </QueryClientProvider>
  </StrictMode>,
);
