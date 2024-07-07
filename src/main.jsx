// index.js (o index.jsx)

// Importamos React y ReactDOM para la renderización
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importamos el componente principal de la aplicación

// Utilizamos ReactDOM.render para inicializar nuestra aplicación React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderizamos la aplicación en el elemento con id 'root' del HTML
);
