// 카드 편집 화면
import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import Editor from './editor'
import Preview from './preview'
import '../style/main.css'

function Main({ authService }) {
  const navigate = useNavigate()

  const onLogout = () => {
    authService.logout() //
  }
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/')
      }
    })
  })

  return (
    <section className="main">
      <Header
        userName={
          authService.getUserInfo()
            ? authService.getUserInfo().displayName
            : null
        }
        onLogout={onLogout}
      />
      <div className="content">
        <Editor></Editor>
        <Preview></Preview>
      </div>
      <Footer />
    </section>
  )
}

export default Main
