import { useState, useEffect } from 'react'

const Home = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/productos/', {
            method: 'GET' /* or POST/PUT/PATCH/DELETE */,
            headers: {
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('accessToken'))}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProductos(data)
            })
    }, [])

    return (
        <>
            <h2>Productos</h2>
            <ul>
                {productos.map((producto) => {
                    return <li>{producto.nombre} - {producto.precio}</li>
                })}
            </ul>
        </>
    )
}

export default Home
