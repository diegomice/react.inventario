// Importamos React desde la biblioteca 'react'
import React from 'react';

// Definimos el componente funcional Notification que recibe una prop 'message'
const Notification = ({ message }) => (
  // Renderizamos un div con clase CSS 'notification' que muestra el mensaje recibido
  <div className="notification">
    {message}
  </div>
);

// Exportamos el componente Notification como exportación predeterminada
export default Notification;

