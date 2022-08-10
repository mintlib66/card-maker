import React from 'react'
import CardEditForm from './cardEditForm'
import CardAddForm from './cardAddForm'

function Editor({ cards, addCard }) {
  console.log(cards)
  return (
    <div className="editor">
      <h2>카드 편집</h2>
      <ul className="cardFormList">
        {cards.map(card => {
          return <CardEditForm card={card} key={card.id} />
        })}
        <CardAddForm onAdd={addCard} />
      </ul>
    </div>
  )
}

export default Editor
