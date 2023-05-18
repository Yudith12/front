import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManager = () => {
  const [productos, setProductos] = useState([]);
  const [editingProducto, setEditingProducto] = useState(null);

  const handleSaveProducto = (newProducto) => {
    if (editingProducto) {
      // Si hay un producto en edición, actualiza ese producto
      const updatedProductos = productos.map((producto) =>
        producto.id === editingProducto.id ? { ...producto, ...newProducto } : producto
      );
      setProductos(updatedProductos);
      setEditingProducto(null);
    } else {
      // Si no hay un producto en edición, agrega un nuevo producto
      const id = Date.now(); // Genera un ID único (puedes usar tu propio sistema de generación de IDs)
      const newProductoWithId = { ...newProducto, id };
      setProductos([...productos, newProductoWithId]);
    }
  };

  const handleEditProducto = (producto) => {
    setEditingProducto(producto);
  };

  const handleDeleteProducto = (productoId) => {
    const updatedProductos = productos.filter((producto) => producto.id !== productoId);
    setProductos(updatedProductos);
  };

  return (
    <div>
      <h1>Productos</h1>
      <ProductForm onSave={handleSaveProducto} />
      <ProductList
        productos={productos}
        onEdit={handleEditProducto}
        onDelete={handleDeleteProducto}
      />
    </div>
  );
};

export default ProductManager;
