import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Main from './components/main'

function App({ authService }) {
  // 페이지: /login, /main
  return (
    <div>
      {/* <h1>Business Card Maker</h1> */}
      <Routes>
        <Route path="/" element={<Login authService={authService} />}></Route>
        <Route
          path="/main"
          element={<Main authService={authService} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
