// Importamos React y el hook useState desde la biblioteca 'react'
import React, { useState } from 'react';

// Definimos el componente funcional Auth que recibe una prop 'onAuth'
const Auth = ({ onAuth }) => {
  // Definimos el estado local 'username' con su función de actualización 'setUsername', inicializado como una cadena vacía
  const [username, setUsername] = useState('');
  // Definimos el estado local 'password' con su función de actualización 'setPassword', inicializado como una cadena vacía
  const [password, setPassword] = useState('');

  // Definimos la función handleSubmit que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    // Prevenimos el comportamiento predeterminado del formulario de recargar la página
    e.preventDefault();
    // Llamamos a la función onAuth con los valores actuales de 'username' y 'password'
    onAuth(username, password);
  };

  // Renderizamos el formulario de autenticación
  return (
    // Asignamos la función handleSubmit al evento onSubmit del formulario y le aplicamos una clase CSS 'auth-form'
    <form onSubmit={handleSubmit} className="auth-form">
      {/* Input para el nombre de usuario */}
      <input
        type="text"  // El tipo de input es texto
        placeholder="Usuario"  // Texto de marcador de posición
        value={username}  // El valor del input se vincula al estado 'username'
        onChange={(e) => setUsername(e.target.value)}  // Actualiza el estado 'username' con el valor actual del input
        required  // Campo obligatorio
      />
      {/* Input para la contraseña */}
      <input
        type="password"  // El tipo de input es contraseña
        placeholder="Contraseña"  // Texto de marcador de posición
        value={password}  // El valor del input se vincula al estado 'password'
        onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado 'password' con el valor actual del input
        required  // Campo obligatorio
      />
      {/* Botón para enviar el formulario */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

// Exportamos el componente Auth como exportación predeterminada
export default Auth;

