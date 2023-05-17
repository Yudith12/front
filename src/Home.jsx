import { useState, useEffect } from 'react'
import Productos from './Productos'

const Home = ({ onLogout, userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/usuario/' + userId, {
      method: 'GET' /* or POST/PUT/PATCH/DELETE */,
      headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('accessToken'))}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData)
      })
  }, [])

  const logoutHandler = () => {
    onLogout()
  }

  const role = user ? user.group_name : null

  const content = role && role === 'recepcion' ? <Productos /> : <p>INICIO</p>

  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
      {user && <>
        <h1>Bienvenido {user.username}!</h1>
        <p>{user.group_name}</p>
        {content}
      </>}
    </>
  )
}

export default Home
