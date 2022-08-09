import React from 'react'

function Preview(props) {
  return (
    <div className="preview">
      <h2>미리보기</h2>
      <ul className="cardList">
        <li className="card">
          <img src="../../public/images/default_logo.png" alt="" srcset="" />
          <div className="infoBox">
            <h3 className="name">이름</h3>
            <p className="company">회사</p>
            <p>직군</p>
            <p>이메일@mail.com</p>
            <p>메시지</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Preview
