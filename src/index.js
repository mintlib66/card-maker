import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthService from './service/auth_service'
import ImageUploader from './service/image_uploader'
import ImageFileInput from './components/imageFileInput'
import CardRepository from './service/card_repository'

const root = ReactDOM.createRoot(document.getElementById('root'))
const authService = new AuthService()
const cardRepository = new CardRepository()
const imageUploader = new ImageUploader()
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        authService={authService}
        FileInput={FileInput}
        cardRepository={cardRepository}
      />
    </BrowserRouter>
  </React.StrictMode>
)
