import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // Usa "/" a menos que estés usando GitHub Pages (entonces usa "/poliservicios/")
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Asegura que el index.html es el archivo principal
      },
      output: {
        entryFileNames: "assets/js/[name].js", // Nombres de archivos JS sin hash
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name][extname]";
          }
          if (/\.(woff|woff2|ttf|otf)$/.test(assetInfo.name)) {
            return "assets/webfonts/[name][extname]";
          }
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name][extname]"; // Sin hash en CSS
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});


/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from 'path';



export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/poliservicios/" : "/", //  Cambia "poliservicios" por el nombre correcto de tu repo en GitHub
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