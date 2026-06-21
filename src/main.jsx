import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ProveedorAdmin } from './context/AdminContext.jsx';
import './css/index.css';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorAdmin>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ProveedorAdmin>
  </StrictMode>,
);
