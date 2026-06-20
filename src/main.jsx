import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { AdminProvider } from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </StrictMode>,
)
