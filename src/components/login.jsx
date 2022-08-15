// 로그인 화면
// import GoogleLoginBtn from './GoogleLoginBtn'
import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import '../style/login.css'
import { useNavigate } from 'react-router-dom'

function Login({ authService }) {
  const navigate = useNavigate()

  //다음페이지에 사용자 정보 전달
  const gotoMaker = userId => {
    navigate('/main', {
      state: { id: userId },
    })
  }
  const onLogin = event => {
    authService //
      .login(event.currentTarget.value)
      .then(data => {
        gotoMaker(data.user.uid)
      })
  }
  useEffect(() => {
    //사용자가 바뀌면 수행
    authService.onAuthChange(user => {
      //로그아웃 시 user = null
      if (user) gotoMaker(user.uid)
    })
  })

  return (
    <section className="login">
      <Header />
      <div className="content">
        <h2>로그인</h2>
        <ul>
          <li>
            <button onClick={onLogin} value="Google">
              Google 로그인
            </button>
          </li>
          <li>
            <button onClick={onLogin} value="Github">
              Github 로그인
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  )
}

//로그인 완료 시 Main으로 이동

export default Login
