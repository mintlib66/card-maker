import React from 'react'
import Button from './button'

function CardEditForm({ card, updateCard, deleteCard, FileInput }) {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card

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
  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    deleteCard(card)
  }

  return (
    <form className="cardForm" data-id={id}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="이름"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className="input"
        type="text"
        name="company"
        placeholder="회사"
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className="select"
        name="theme"
        defaultValue={theme}
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
        onChange={onChange}
      />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="이메일"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className="textarea"
        name="message"
        placeholder="메시지"
        defaultValue={message}
        onChange={onChange}
      />
      <div className="fileInput">
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="삭제" type="delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
