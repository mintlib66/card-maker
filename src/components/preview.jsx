import React from 'react'
import Card from './card'

function Preview({ cards }) {
  return (
    <div className="preview">
      <h2>미리보기</h2>
      <ul className="cardList">
        {Object.keys(cards).map(key => {
          return <Card key={key} card={cards[key]} />
        })}
      </ul>
    </div>
  )
}

export default Preview
