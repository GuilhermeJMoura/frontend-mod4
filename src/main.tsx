import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Navbar } from './components/navbar.tsx'
import { AppRoutes } from './AppRoutes.tsx'
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
