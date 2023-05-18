import { useState, useEffect } from 'react'
import Productos from './Productos'
// import ProductManager from './ProductManager';

const Home = ({ onLogout, userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/usuarios/' + userId, {
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
  // const content =  <ProductManager /> 

  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
      {user && <>
        <h1>Bienvenido/a {user.username}!</h1>
        <p>{user.group_name}</p>
        {content}
      </>}
    </>
  )
}

export default Home
