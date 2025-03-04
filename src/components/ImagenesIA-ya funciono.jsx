import React, { useState } from "react";
import axios from "axios";
import styles from "./ImagenesIA.module.css"; // Importar estilos

const ImagenesIA = () => {
  const [prompt, setPrompt] = useState(""); // Estado para el prompt
  const [imageUrl, setImageUrl] = useState(""); // Estado para la imagen generada
 // const API_KEY = "";  Reemplázala con tu API Key real

  const generarImagen = async () => {
    if (!prompt) {
      alert("Por favor ingresa un prompt.");
      return;
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("negative_prompt", "low quality, blurry"); // Opcional
    formData.append("aspect_ratio", "3:2");
    formData.append("seed", 0); // Seed numérico
    formData.append("output_format", "jpeg");

    try {
      const response = await axios.post(
        "https://api.stability.ai/v2beta/stable-image/generate/ultra",
        formData,
        {
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Accept": "image/*",
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob", // Importante para manejar imágenes
        }
      );

      // Crear URL de la imagen generada
      const imageBlob = URL.createObjectURL(response.data);
      setImageUrl(imageBlob);
    } catch (error) {
      console.error("🚨 Error generando la imagen:", error);
      alert("Hubo un error al generar la imagen. Revisa tu API Key y los datos enviados.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Generador de Imágenes IA</h2>
      <input
        type="text"
        placeholder="Escribe un prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className={styles.input}
      />
      <button onClick={generarImagen} className={styles.button}>
        Generar Imagen
      </button>

      {imageUrl && (
        <div className={styles.imageContainer}>
          <h3>Imagen Generada:</h3>
          <img src={imageUrl} alt="Imagen generada por IA" className={styles.image} />
        </div>
      )}
    </div>
  );
};

export default ImagenesIA;
