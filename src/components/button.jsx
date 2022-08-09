import React from 'react'
import '../style/component.css'

const Button = ({ name, onClick }) => (
  <button className="button" onClick={onClick}>
    {name}
  </button>
)

export default Button
