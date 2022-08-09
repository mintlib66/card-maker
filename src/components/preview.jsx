import React from 'react'
import Card from './card'

function Preview({ cards }) {
  return (
    <div className="preview">
      <h2>미리보기</h2>
      <ul className="cardList">
        {cards.map(card => {
          return <Card card={card} key={card.id} />
        })}
      </ul>
    </div>
  )
}

export default Preview
