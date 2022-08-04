import React from 'react'
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'

const responseGoogle = response => {
  console.log(response)
}

function GoogleLoginBtn({ onGoogleLogin }) {
  const onSuccess = async response => {
    const {
      googleId,
      profileObj: { email, name },
    } = response

    await onGoogleLogin()
    //서버 전달 데이터
  }

  const onFailure = error => {
    console.error(error)
  }

  return (
    <GoogleLogin
      clientId="157528317580-42sbjm0rjcs7k384enl6965005t0rvo3.apps.googleusercontent.com"
      responseType={'id_token'}
      buttonText="구글 계정으로 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleLoginBtn
