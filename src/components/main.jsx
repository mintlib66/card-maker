// 카드 편집 화면
import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import Editor from './editor'
import Preview from './preview'
import '../style/main.css'

function Main({ authService }) {
  const [cards, setCards] = useState([
    {
      id: '1',
      company: 'bt company',
      name: 'Amy',
      theme: 'dark',
      title: 'Frontend Engineer',
      email: 'amy123@gmail.com',
      message: 'go for it',
      fileName: 'amy',
      fileURL: 'amy.png',
    },
    {
      id: '2',
      company: 'bt company',
      name: 'Larkin',
      theme: 'light',
      title: 'Frontend Engineer',
      email: 'Larkin@gmail.com',
      message: 'go for it',
      fileName: 'larkin',
      fileURL: null,
    },
    {
      id: '3',
      company: 'bt company',
      name: 'Licto',
      theme: 'colorful',
      title: 'Frontend Engineer',
      email: 'licto@gmail.com',
      message: 'go for it',
      fileName: 'licto',
      fileURL: null,
    },
  ])

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Main
