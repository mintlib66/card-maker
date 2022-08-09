import React from 'react'
import Button from './button'
import ImageFileInput from './imageFileInput'

function CardEditForm({ card }) {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card
  const DEFAULT_IMAGE = 'images/default_logo.png'
  const url = fileURL || DEFAULT_IMAGE

  const onSubmit = () => {}

  return (
    <form className="cardForm">
      <input
        className="input"
        type="text"
        name="name"
        placeholder="이름"
        value={name}
      />
      <input
        className="input"
        type="text"
        name="company"
        placeholder="회사"
        value={company}
      />
      <select className="select" name="theme" value={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className="input"
        type="text"
        name="title"
        placeholder="직군"
        value={title}
      />
      <input
        className="input"
        type="email"
        placeholder="이메일"
        value={email}
      />
      <textarea
        className="textarea"
        name="message"
        placeholder="메시지"
        value={message}
      />
      <div className="fileInput">
        <ImageFileInput />
      </div>
      <Button name="삭제" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
