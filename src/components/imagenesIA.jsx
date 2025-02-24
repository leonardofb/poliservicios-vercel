import React, { useState } from "react";
import styles from "./ImagenesIA.module.css"; // Importar el archivo de estilos

const ImagenesIA = () => {
  const [description, setDescription] = useState("");  // Estado para la descripción
  const [imageUrl, setImageUrl] = useState("");  // Estado para la URL de la imagen
  const [isLoading, setIsLoading] = useState(false);  // Estado para el cargando

  const generateImage = async () => {
    if (!description) {
      alert("Por favor, ingresa una descripción.");
      return;
    }

    setIsLoading(true);  // Inicia el estado de carga

    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,  // Usar la variable de entorno aquí
        },
        body: JSON.stringify({
          prompt: description,
          n: 1,
          size: "1024x1024",
        }),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al generar la imagen.");
      }

      const data = await response.json();
      setImageUrl(data.data[0].url);  // Actualiza la URL de la imagen
    } catch (error) {
      alert(error.message);  // Muestra el mensaje de error al usuario
    } finally {
      setIsLoading(false);  // Finaliza el estado de carga
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Generador de Imágenes IA</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe tu imagen..."
        className={styles.input}
      />
      <br />
      <button
        onClick={generateImage}
        className={styles.button}
        disabled={isLoading}  // Deshabilitar el botón mientras se genera la imagen
      >
        {isLoading ? "Generando..." : "Generar Imagen"}  {/* Mostrar el texto de carga */}
      </button>
      <br />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Imagen generada por IA"
          className={styles.image}
        />
      )}
    </div>
  );
};

export default ImagenesIA;
