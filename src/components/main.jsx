// 카드 편집 화면
import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'

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
    <section className="maker">
      <Header
        userName={
          authService.getUserInfo()
            ? authService.getUserInfo().displayName
            : null
        }
        onLogout={onLogout}
      />
      <div className="content">
        <h2>카드 만들기</h2>
        {/* <Maker></Maker>
        <Preview></Preview> */}
      </div>
      <Footer />
    </section>
  )
}

export default Main
