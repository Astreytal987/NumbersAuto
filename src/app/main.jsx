import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './styles/reset.css';
import './styles/tailwind.css';

import CatalogPage from '../pages/CatalogPage/CatalogPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CatalogPage />
  </StrictMode>,
);