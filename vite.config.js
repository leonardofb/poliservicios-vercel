import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Permite importar con "@/ruta"
    },
  },
  base: process.env.NODE_ENV === "production" ? "/poliservicios/" : "/", // ✅ Para GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name][extname]"; // ✅ Organiza imágenes
          }
          if (/\.(woff|woff2|ttf|otf)$/.test(assetInfo.name)) {
            return "assets/fonts/[name][extname]"; // ✅ Organiza fuentes
          }
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]"; // ✅ Organiza CSS
          }
          if (assetInfo.name?.endsWith(".js")) {
            return "assets/js/[name]-[hash][extname]"; // ✅ Organiza JS
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