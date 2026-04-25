import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Another from './Another.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Another />
  </StrictMode>,
)
