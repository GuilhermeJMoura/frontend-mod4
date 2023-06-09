import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Navbar } from './components/navbar.tsx'
import { App } from './App.tsx'
import { Status } from './components/Status.tsx'
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
