import React from 'react'

const Button = ({ name, type, onClick }) => (
  <button
    className={`button ${type === 'add' ? 'add_button' : ''}`}
    onClick={onClick}
  >
    {name}
  </button>
)

export default Button
