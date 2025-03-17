import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

// Obtener la ruta absoluta del directorio actual
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Verificar si import.meta.env está disponible
const mode = import.meta.env ? import.meta.env.MODE : "development"; // Fallback a "development"

export default defineConfig({
  plugins: [react()],
  
  // Base correcta para GitHub Pages y local
  // base: mode === "production" ? "/poliservicios/" : "/", // Solo para GitHub Pages

  // Incluir archivos multimedia en la compilación
  assetsInclude: ["**/*.mp4", "**/*.webm", "**/*.ogg"],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // Limpia "dist/" antes de construir
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Nombre con hash para evitar caché
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true, // Abre automáticamente en el navegador
  },
});





/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

// Obtener la ruta absoluta del directorio actual
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Verificar si import.meta.env está disponible
const mode = import.meta.env ? import.meta.env.MODE : "development"; // Fallback a "development"

export default defineConfig({
  plugins: [react()],
  
  // Base correcta para GitHub Pages y local
 // base: mode === "production" ? "/poliservicios/" : "/", ESTA HAY QUE COLOCARLO SI CORREMOS EN GITPAGES

  // Mantener los archivos de public/
  publicDir: "src/assets",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // Limpia "dist/" antes de construir
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Ahora __dirname está bien definido
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Ahora usa una cadena directa para evitar errores
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true, // Abre automáticamente en el navegador
  },
});*/