import React from 'react'

function CardEditForm({ card }) {
  return (
    <li className="cardForm">
      <p className="id">{card.id}</p>
      <input type="text" name="name" placeholder="이름" />
      <input type="text" name="company" placeholder="회사" />
      <select name="theme">
        <option value="">다크</option>
        <option value="">컬러풀</option>
        <option value="">라이트</option>
      </select>

      <input type="text" name="job" placeholder="직군" />
      <input type="email" name="email" placeholder="이메일" />

      <input type="text" name="msg" placeholder="메시지" />

      <input type="file" name="img" />
      <button className="delete">삭제</button>
    </li>
  )
}

export default CardEditForm
