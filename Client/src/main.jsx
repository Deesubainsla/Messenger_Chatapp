import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { HelmetProvider } from 'react-helmet-async'
import { MycontextProvider } from './utils/contextapi/Contextapi.jsx'
import { NcontextProvider } from './utils/contextapi/Ncontext.jsx'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MycontextProvider>
      <NcontextProvider>
        <HelmetProvider>
          <ToastContainer position='top-center' autoClose={1000}/>
          <CssBaseline />
          <App />
        </HelmetProvider>
      </NcontextProvider>
    </MycontextProvider>
  </StrictMode>
)
