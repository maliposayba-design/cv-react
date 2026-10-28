import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Experiences from './Experiences.jsx'
import Competences from './Competences.jsx'
import Infopersos from './Infopersos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Infopersos/>
    <Experiences/>
    <Competences/>
  </StrictMode>,
)
