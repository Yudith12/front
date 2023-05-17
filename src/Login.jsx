import { useState } from 'react'
import coffeeIcon from './assets/taza.png'
import jwtDecode from 'jwt-decode'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandle = (e) => {
    e.preventDefault()
    // login and get an user with JWT token
    fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((tokenData) => {
        window.localStorage.setItem('accessToken', JSON.stringify(tokenData.access))
        console.log(tokenData);
        console.log(jwtDecode(tokenData.access).user_id);
        onLogin(jwtDecode(tokenData.access).user_id)
      })
  }

  return (
    <form onSubmit={loginHandle}>
      <img src={coffeeIcon} alt="Coffee Icon" width={100} />
      <h2>CAFETERIA</h2>
      <p>Accede a tu cuenta</p>
  
      <input
        aria-label="Username"
        placeholder="Usuario"
        id="username"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input
        aria-label="Password"
        placeholder="Contraseña"
        id="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
