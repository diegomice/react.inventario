// Importamos React y los componentes necesarios de 'react-router-dom'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos los componentes personalizados y estilos
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import UserManagement from './components/UserManagement';
import Auth from './components/Auth';
import Nav from './components/Nav';
import Home from './components/Home'; // Ajustamos la importación de Home según convención de nombre de archivo
import './assets/styles.css'; // Estilos globales
import './App.css'; // Estilos específicos de la aplicación

// Definimos el componente funcional App
const App = () => {
  // Estado inicial de los productos
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

  // Estados locales para productos, autenticación y usuario actual
  const [products, setProducts] = useState(initialProducts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Función para agregar un nuevo producto
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Función para manejar la autenticación de usuarios
  const handleAuth = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
      setCurrentUser({ username, role: 'administrador' });
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Renderizamos la aplicación utilizando React Router
  return (
    <Router>
      <div className="App">
        {/* Componente de encabezado */}
        <Header />
        {/* Componente de navegación */}
        <Nav />
        {/* Contenido principal */}
        <main className="container">
          {/* Definición de rutas */}
          <Routes>
            {/* Rutas con sus respectivos componentes */}
            <Route path="/ProductList" element={<ProductList products={products} />} />
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<ProductForm onAddProduct={handleAddProduct} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Ruta protegida por autenticación */}
            <Route path="/user-management" element={isAuthenticated ? <UserManagement /> : <Auth onAuth={handleAuth} />} />
            <Route path="/auth" element={<Auth onAuth={handleAuth} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Exportamos el componente App como exportación predeterminada
export default App;
