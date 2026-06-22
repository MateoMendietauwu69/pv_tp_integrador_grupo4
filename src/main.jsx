import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { AdminProvider } from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <RouterProvider router={Router} />
    </AdminProvider>
  </StrictMode>,
)
