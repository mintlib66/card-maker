import React, { useRef } from 'react'
import Button from './button'
import ImageFileInput from './imageFileInput'

function CardEditForm({ card, updateCard, deleteCard }) {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card

  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const onChange = event => {
    if (event.currentTarget == null) {
      return
    }
    event.preventDefault()
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
      //동적으로 키 이름에 접근할 때는 대괄호를 써줘야함
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    deleteCard(card)
  }

  return (
    <form className="cardForm" data-id={id} ref={formRef}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="이름"
        defaultValue={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className="input"
        type="text"
        name="company"
        placeholder="회사"
        defaultValue={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className="select"
        name="theme"
        defaultValue={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className="input"
        type="text"
        name="title"
        placeholder="직군"
        defaultValue={title}
        ref={titleRef}
        onChange={onChange}
      />
      <input
        className="input"
        type="email"
        placeholder="이메일"
        defaultValue={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className="textarea"
        name="message"
        placeholder="메시지"
        defaultValue={message}
        ref={messageRef}
        onChange={onChange}
      />
      <div className="fileInput">
        <ImageFileInput />
      </div>
      <Button name="삭제" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
