import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ Se importa `path` correctamente

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/poliservicios/" : "/", // ✅ Ajuste automático para GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // ✅ Corrige `resolve` correctamente
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name][extname]"; // ✅ Carpeta de imágenes
          }
          if (/\.(woff|woff2|ttf|otf)$/.test(assetInfo.name)) {
            return "assets/fonts/[name][extname]"; // ✅ Carpeta de fuentes
          }
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]"; // ✅ Mantiene CSS organizado
          }
          if (assetInfo.name?.endsWith(".js")) {
            return "assets/js/[name]-[hash][extname]"; // ✅ Mantiene JS organizado
          }
          return "assets/[name]-[hash][extname]"; // ✅ Otros archivos
        },
      },
    },
  },
});



/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/poliservicios/" : "/", // ✅ Se ajusta según el entorno
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Asegura que el HTML sea la entrada principal
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name)) {
            return 'assets/images/[name][extname]'; // Mantiene la estructura de imágenes
          }
          if (/\.(woff|woff2|ttf|otf)$/.test(assetInfo.name)) {
            return 'assets/webfonts/[name][extname]'; // Mantiene la estructura de fuentes
          }
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]'; // Mantiene la estructura de CSS
          }
          if (assetInfo.name?.endsWith('.js')) {
            return 'assets/js/[name]-[hash][extname]'; // Mantiene la estructura de JS
          }
          return 'assets/[name]-[hash][extname]'; // Para otros tipos de archivos
        }
      }
    }
  }
});
*/