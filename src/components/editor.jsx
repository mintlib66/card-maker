import React from 'react'
import CardEditForm from './cardEditForm'

function Editor({ cards }) {
  return (
    <div className="editor">
      <h2>카드 편집</h2>
      <ul className="cardFormList">
        {cards.map(card => {
          return <CardEditForm card={card} key={card.id} />
        })}
      </ul>
    </div>
  )
}

export default Editor
