// Importamos React y el hook useState desde la biblioteca 'react' y useNavigate desde 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Definimos el componente funcional ProductForm que recibe una prop 'onAddProduct'
const ProductForm = ({ onAddProduct }) => {
  // Usamos el hook useNavigate para la navegación
  const navigate = useNavigate();
  
  // Definimos estados locales para el formulario
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageFile(file);
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Por favor selecciona una imagen.');
      return;
    }
    // Crear un nuevo producto con datos del formulario
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      price: parseFloat(price),
      description,
      image: imageUrl,
    };
    
    // Llamar a la función onAddProduct para agregar el nuevo producto
    onAddProduct(newProduct);

    // Limpiar los campos del formulario después de agregar el producto
    setName('');
    setPrice('');
    setDescription('');
    setImageUrl('');
    setImageFile(null);

    // Redirigir a la lista de productos después de agregar
    navigate('/product-list'); // Utiliza navigate en lugar de history.push
  };

  // Renderizamos el formulario de producto
  return (
    <form onSubmit={handleSubmit} className="product-form">
      {/* Input para el nombre del producto */}
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* Input para el precio del producto */}
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      {/* Textarea para la descripción del producto */}
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      {/* Div para subir la imagen del producto */}
      <div className="image-upload">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {/* Mostrar la imagen previa si está disponible */}
        {imageUrl && (
          <img src={imageUrl} alt="Producto" className="preview-image" />
        )}
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

// Exportamos el componente ProductForm como exportación predeterminada
export default ProductForm;
