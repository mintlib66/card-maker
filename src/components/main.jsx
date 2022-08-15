// 카드 편집 화면
import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import { useNavigate, useLocation } from 'react-router-dom'
import Editor from './editor'
import Preview from './preview'
import '../style/main.css'

function Main({ authService, FileInput, cardRepository }) {
  const navigate = useNavigate()
  const location = useLocation()
  const locationState = location.state

  //배열이 아니라 object형태로 관리
  const [cards, setCards] = useState({
    // '00': {
    //   id: '00',
    //   company: 'bt company',
    //   name: 'Amy',
    //   theme: 'dark',
    //   title: 'Frontend Engineer',
    //   email: 'amy123@gmail.com',
    //   message: 'go for it',
    //   fileName: 'amy',
    //   fileURL: 'amy.png',
    // },
    // '01': {
    //   id: '01',
    //   company: 'bt company',
    //   name: 'Larkin',
    //   theme: 'light',
    //   title: 'Frontend Engineer',
    //   email: 'Larkin@gmail.com',
    //   message: 'go for it',
    //   fileName: 'larkin',
    //   fileURL: null,
    // },
    // '02': {
    //   id: '02',
    //   company: 'bt company',
    //   name: 'Licto',
    //   theme: 'colorful',
    //   title: 'Frontend Engineer',
    //   email: 'licto@gmail.com',
    //   message: 'go for it',
    //   fileName: 'licto',
    //   fileURL: null,
    // },
  })
  const [userId, setUserId] = useState(locationState && locationState.id)

  function updateCard(card) {
    setCards(cards => {
      const updateCards = { ...cards }
      updateCards[card.id] = card
      return updateCards
    })
    cardRepository.saveCard(userId, card)
  }
  function deleteCard(card) {
    setCards(cards => {
      const updateCards = { ...cards }
      delete updateCards[card.id]
      return updateCards
    })
    cardRepository.removeCard(userId, card)
  }

  const onLogout = () => {
    authService.logout()
  }
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/')
      } else {
        setUserId(user.uid)
      }
    })
  })
  useEffect(() => {
    if (!userId) {
      return
    } else {
      return () => {
        cardRepository.getCards(userId, cards => setCards(cards))
      }
    }
  }, [])

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
        <Editor
          cards={cards}
          addCard={updateCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Main
