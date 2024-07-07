// Importamos React y el hook useState desde la biblioteca 'react'
import React, { useState } from 'react';
// Importamos el componente ProductCard desde './ProductCard'
import ProductCard from './ProductCard';

// Array inicial de productos
const initialProducts = [
  {
    id: 1,
    name: 'Casco',
    price: 10.0,
    description: 'Casco para obra',
    image: '/images/casco-eco.jpg',
  },
  {
    id: 2,
    name: 'Bota',
    price: 20.0,
    description: 'Bota Action tipo ingeniero',
    image: '/images/action-1-1.png',
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 30.0,
    description: 'Descripción del producto 3',
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 40.0,
    description: 'Descripción del producto 4',
    image: '/images/product4.jpg',
  },
  {
    id: 5,
    name: 'Producto 5',
    price: 50.0,
    description: 'Descripción del producto 5',
    image: '/images/product5.jpg',
  },
];

// Definimos el componente funcional ProductList que recibe una prop 'products'
const ProductList = ({ products }) => {
  // Renderizamos la lista de productos
  return (
    <div>
      {/* Mapeamos cada producto y renderizamos el componente ProductCard */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Exportamos el componente ProductList como exportación predeterminada
export default ProductList;


