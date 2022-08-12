import React, { useRef, useState } from 'react'
import Button from './button'

function CardAddForm({ onAdd, FileInput }) {
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const themeRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [file, setFile] = useState({ fileName: null, fileURL: null })

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    })
  }
  const onSubmit = event => {
    event.preventDefault()

    //미리 보기란에 카드 추가
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    formRef.current.reset() //UI상의 값 초기화
    onAdd(newCard)
    setFile({ fileName: null, fileURL: null })
  }

  return (
    <form className="cardForm" ref={formRef}>
      <input
        className="input"
        type="text"
        name="name"
        ref={nameRef}
        placeholder="이름"
      />
      <input
        className="input"
        type="text"
        name="company"
        ref={companyRef}
        placeholder="회사"
      />
      <select className="select" name="theme" ref={themeRef}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className="input"
        type="text"
        name="title"
        ref={titleRef}
        placeholder="직군"
      />
      <input
        className="input"
        type="email"
        ref={emailRef}
        placeholder="이메일"
      />
      <textarea
        className="textarea"
        name="message"
        ref={messageRef}
        placeholder="메시지"
      />
      <div className="fileInput">
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="추가" onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm
