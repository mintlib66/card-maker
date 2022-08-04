import React from 'react'
import '../style/header.css'

function Header(props) {
  return (
    <header>
      <h1 className="headerTitle">Business Card Maker</h1>
      <div className="userInfo">
        <span className="userName">{props.userName ? props.userName : ''}</span>
        {props.onLogout && (
          <button className="logoutBtn" onClick={props.onLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
