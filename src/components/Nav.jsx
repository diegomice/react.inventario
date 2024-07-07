// Importamos React desde la biblioteca 'react' y el componente 'Link' desde 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';

// Definimos el componente funcional Nav
const Nav = () => {
  // Renderizamos la barra de navegación
  return (
    // Elemento nav que contiene una lista de elementos de navegación
    <nav>
      <ul>
        {/* Elementos de la lista que contienen enlaces utilizando el componente Link */}
        <li><Link to="/Home">Inicio</Link></li>
        <li><Link to="/Productlist">Lista de Productos</Link></li>
        <li><Link to="/add-product">Agregar Producto</Link></li>
        <li><Link to="/user-management">Gestión de Usuarios</Link></li>
      </ul>
    </nav>
  );
};

// Exportamos el componente Nav como exportación predeterminada
export default Nav;
