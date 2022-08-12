import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Main from './components/main'

function App({ FileInput, authService }) {
  // 페이지: /login, /main
  return (
    <Routes>
      <Route path="/" element={<Login authService={authService} />}></Route>
      <Route
        path="/main"
        element={<Main authService={authService} FileInput={FileInput} />}
      ></Route>
    </Routes>
  )
}

export default App
