// Importamos React desde la biblioteca 'react' y el componente 'Link' desde 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';

// Definimos el componente funcional ProductCard que recibe una prop 'product'
const ProductCard = ({ product }) => {
  // Renderizamos la tarjeta de producto
  return (
    // Div con clase CSS 'product-card' que contiene la información del producto
    <div className="product-card">
      {/* Imagen del producto */}
      <img src={product.image} alt={product.name} className="product-image" />
      {/* Información del producto */}
      <div className="product-info">
        {/* Nombre del producto */}
        <h2 className="product-name">{product.name}</h2>
        {/* Descripción del producto */}
        <p className="product-description">{product.description}</p>
        {/* Precio del producto */}
        <p className="product-price">${product.price.toFixed(2)}</p>
        {/* Enlace para ver detalles del producto */}
        <Link to={`/product/${product.id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

// Exportamos el componente ProductCard como exportación predeterminada
export default ProductCard;
