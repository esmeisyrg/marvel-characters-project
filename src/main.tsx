import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/home.tsx'
import './styles/main.css'
import './styles/reset.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <HomePage/>
 
  </React.StrictMode>,
)