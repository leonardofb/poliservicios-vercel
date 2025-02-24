import React, { useState } from 'react';
import styles from './ImagenesIA.module.css';  // Importamos los estilos CSS

const ImagenesIA = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    setIsLoading(true);  // Indicamos que la solicitud está en progreso

    const apiKey = "TU_API_KEY";  // Reemplaza con tu API Key

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: 'Una descripción de la imagen',  // Personaliza el prompt
          n: 1,
          size: '1024x1024',
        }),
      });

      const data = await response.json();
      setImageUrl(data.data[0].url);  // Guarda la URL de la imagen generada
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);  // Termina el estado de carga
    }
  };

  return (
    <div className="imagenes-ia-container">
      <button className="generate-button" onClick={generateImage} disabled={isLoading}>
        {isLoading ? 'Generando...' : 'Generar Imagen'}
      </button>
      {imageUrl && <img className="generated-image" src={imageUrl} alt="Imagen generada por IA" />}
    </div>
  );
};

export default ImagenesIA;


