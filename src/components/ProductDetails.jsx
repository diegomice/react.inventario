// Importamos React desde la biblioteca 'react' y el hook 'useParams' desde 'react-router-dom'
import React from 'react';
import { useParams } from 'react-router-dom';

// Definimos el componente funcional ProductDetails que recibe una prop 'products'
const ProductDetails = ({ products }) => {
  // Obtenemos el parámetro 'id' de la URL utilizando el hook useParams
  const { id } = useParams();

  // Buscamos el producto con el ID correspondiente en la lista de productos
  const product = products.find((product) => product.id === id);

  // Si no se encuentra el producto, mostramos un mensaje de 'Producto no encontrado'
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderizamos los detalles del producto encontrado
  return (
    <div>
      {/* Nombre del producto */}
      <h2>{product.name}</h2>
      {/* Descripción del producto */}
      <p>{product.description}</p>
      {/* Precio del producto */}
      <p>${product.price}</p>
      {/* Imagen del producto */}
      <img src={product.image} alt={product.name} />
    </div>
  );
};

// Exportamos el componente ProductDetails como exportación predeterminada
export default ProductDetails;
