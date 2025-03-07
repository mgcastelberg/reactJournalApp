import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes } from 'react-router'
import { AppRouter } from './router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
