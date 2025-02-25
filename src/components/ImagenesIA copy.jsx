import React, { useState } from "react";
import styles from "./ImagenesIA.module.css"; // Importar estilos

const ImagenesIA = () => {
  const [description, setDescription] = useState(""); // Estado para la descripción
  const [imageUrl, setImageUrl] = useState(""); // Estado para la imagen
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  const generateImage = async () => {
    if (!description.trim()) {
      alert("Por favor, ingresa una descripción.");
      return;
    }

    setIsLoading(true); // Iniciar estado de carga

    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: description,
          n: 1,
          size: "1024x1024",
          quality: "standard",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || "Error al generar la imagen.");
      }

      const data = await response.json();
      setImageUrl(data.data[0].url);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
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
        disabled={isLoading}
      >
        {isLoading ? "Generando..." : "Generar Imagen"}
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

