// Importamos React y el hook useState desde la biblioteca 'react'
import React, { useState } from 'react';

// Definimos el componente funcional UserManagement
const UserManagement = () => {
  // Definimos estados locales para la gestión de usuarios
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente');

  // Función para manejar la adición de un nuevo usuario
  const handleAddUser = (e) => {
    e.preventDefault();
    // Creamos un nuevo usuario con datos del formulario
    const newUser = { id: Math.random().toString(36).substr(2, 9), username, password, role };
    // Agregamos el nuevo usuario al array de usuarios utilizando spread operator
    setUsers([...users, newUser]);
    // Limpiamos los campos del formulario después de agregar el usuario
    setUsername('');
    setPassword('');
    setRole('cliente');
  };

  // Renderizamos la gestión de usuarios
  return (
    <div className="user-management">
      {/* Título de la sección */}
      <h2>Gestión de Usuarios</h2>
      {/* Formulario para agregar usuarios */}
      <form onSubmit={handleAddUser} className="user-form">
        {/* Input para el nombre de usuario */}
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* Input para la contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Select para seleccionar el rol del usuario */}
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="cliente">Cliente</option>
          <option value="empleado">Empleado</option>
          <option value="administrador">Administrador</option>
        </select>
        {/* Botón para agregar usuario */}
        <button type="submit">Agregar Usuario</button>
      </form>
      {/* Lista de usuarios */}
      <div className="user-list">
        {/* Título de la lista */}
        <h3>Lista de Usuarios</h3>
        {/* Lista de usuarios renderizada con mapeo */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Exportamos el componente UserManagement como exportación predeterminada
export default UserManagement;
