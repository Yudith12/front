import React from 'react';

const ProductList = ({ productos, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.cantidad}</td>
            <td>
              <button className="btn btn-primary" onClick={() => onEdit(producto)}>Editar</button>
              <button className="btn btn-danger" onClick={() => onDelete(producto.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
