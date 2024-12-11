import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { HelmetProvider } from 'react-helmet-async'
import { MycontextProvider } from './utils/contextapi/Contextapi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MycontextProvider>
        <HelmetProvider>
          <CssBaseline />
          <App />
        </HelmetProvider>
    </MycontextProvider>
  </StrictMode>
)
