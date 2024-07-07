// Importamos React desde la biblioteca 'react'
import React from 'react';

// Definimos el componente funcional Home
const Home = ({}) => {
  // Renderizamos el contenido de la página de inicio
  return (
    <div>
      {/* Título de bienvenida */}
      <h2>Bienvenido al Sistema de Gestión de Inventarios</h2>
      {/* Párrafo de bienvenida */}
      <p>Bienvenido</p>
      {/* Descripción breve del sistema */}
      <p>Este es un sistema para administrar y gestionar tu inventario de productos.</p>
      {/* Instrucciones sobre la navegación */}
      <p>Puedes navegar a través de las diferentes secciones utilizando la barra de navegación.</p>
      {/* Indicaciones iniciales para el usuario */}
      <p>Empieza agregando productos o gestionando usuarios según tus necesidades.</p>
    </div>
  );
};

// Exportamos el componente Home como exportación predeterminada
export default Home;
