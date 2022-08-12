import React from 'react'

function Card({ card }) {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card
  const DEFAULT_IMAGE = 'images/default_logo.png'
  const url = fileURL || DEFAULT_IMAGE
  return (
    <li className={`card ${theme}`}>
      <img className="avatar" src={url} alt="profile photo" />
      <div className="infoBox">
        <h3 className="name">{name}</h3>
        <p className="company">{company}</p>
        <p className="title">{title}</p>
        <p className="email">{email}</p>
        <p className="message">{message}</p>
      </div>
    </li>
  )
}

export default Card
