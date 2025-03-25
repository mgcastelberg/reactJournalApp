import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes } from 'react-router'
import { AppRouter } from './router/AppRouter'
import { JournalApp } from './JournalApp'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
