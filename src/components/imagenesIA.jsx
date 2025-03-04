import React, { useState } from "react";
import axios from "axios";
import styles from "./ImagenesIA.module.css"; // Importar estilos

const ImagenesIA = () => {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("low quality, blurry");
  const [aspectRatio, setAspectRatio] = useState("3:2");
  const [seed, setSeed] = useState(0);
  const [outputFormat, setOutputFormat] = useState("jpeg");
  const [imageUrl, setImageUrl] = useState("");
 // const API_KEY = "";  Reemplázala con tu API Key real
  const generarImagen = async () => {
    if (!prompt) {
      alert("Por favor ingresa un prompt.");
      return;
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("negative_prompt", negativePrompt);
    formData.append("aspect_ratio", aspectRatio);
    formData.append("seed", parseInt(seed)); // Convertir a número
    formData.append("output_format", outputFormat);

    try {
      const response = await axios.post(
        "https://api.stability.ai/v2beta/stable-image/generate/core", // Prueba con "core"
        formData,
        {
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Accept": "image/*",
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      const imageBlob = URL.createObjectURL(response.data);
      setImageUrl(imageBlob);
    } catch (error) {
      console.error("🚨 Error generando la imagen:", error);

      if (error.response) {
        if (error.response.status === 401) {
          alert("⚠️ Error 401: API Key inválida o incorrecta. Verifica tu clave.");
        } else if (error.response.status === 402) {
          alert("⚠️ Error 402: Sin crédito disponible en Stability AI.");
        } else {
          alert(`⚠️ Error ${error.response.status}: ${error.response.data.message}`);
        }
      } else {
        alert("⚠️ Error desconocido. Revisa tu conexión o configuración.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Generador de Imágenes IA</h2>

      <label>Prompt:</label>
      <input
        type="text"
        placeholder="Escribe un prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className={styles.input}
      />

      <label>Negative Prompt:</label>
      <input
        type="text"
        placeholder="Ejemplo: low quality, blurry"
        value={negativePrompt}
        onChange={(e) => setNegativePrompt(e.target.value)}
        className={styles.input}
      />

      <label>Aspect Ratio:</label>
      <select
        value={aspectRatio}
        onChange={(e) => setAspectRatio(e.target.value)}
        className={styles.input}
      >
        <option value="3:2">3:2</option>
        <option value="16:9">16:9</option>
        <option value="1:1">1:1</option>
      </select>

      <label>Seed (Número):</label>
      <input
        type="number"
        placeholder="0 para aleatorio"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        className={styles.input}
      />

      <label>Output Format:</label>
      <select
        value={outputFormat}
        onChange={(e) => setOutputFormat(e.target.value)}
        className={styles.input}
      >
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
      </select>

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
