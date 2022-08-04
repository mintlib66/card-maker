import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthService from './service/auth_service'

const root = ReactDOM.createRoot(document.getElementById('root'))
const authService = new AuthService()
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>
)
