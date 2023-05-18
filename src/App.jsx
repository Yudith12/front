import { useState, useEffect } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import jwtDecode from 'jwt-decode'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken')
    if (token){
      setUserId(jwtDecode(JSON.parse(token)).user_id)
    }
  }, [])

  const onLoginHandler = (userId) => {
    console.log(userId)
    setUserId(userId)
  }

  const onLogoutHandler = () => {
    setUserId(null)
    window.localStorage.removeItem('accessToken')
  }

  return (
    <>
      {userId ? (
        <Home onLogout={onLogoutHandler} userId={userId} />
      ) : (
        <Login onLogin={onLoginHandler} />
      )}
    </>
  )
}

export default App
