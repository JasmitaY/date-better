import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DietaryRestrictions from './components/pages/DietaryRestrictions.jsx'
import Quiz from './components/pages/Quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
