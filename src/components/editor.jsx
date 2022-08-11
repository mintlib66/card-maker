import React from 'react'
import CardEditForm from './cardEditForm'
import CardAddForm from './cardAddForm'

function Editor({ cards, addCard, updateCard, deleteCard }) {
  return (
    <div className="editor">
      <h2>카드 편집</h2>
      <ul className="cardFormList">
        {Object.keys(cards).map(key => {
          return (
            <CardEditForm
              key={key}
              card={cards[key]}
              updateCard={updateCard}
              onDelete={deleteCard}
            />
          )
        })}
        <CardAddForm onAdd={addCard} />
      </ul>
    </div>
  )
}

export default Editor
