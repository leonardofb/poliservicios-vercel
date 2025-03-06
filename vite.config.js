import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

// Obtener la ruta absoluta del directorio actual
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],

  // Base correcta para GitHub Pages y local
  base: import.meta.env.MODE === "production" ? "/poliservicios/" : "/",

  // Mantener los archivos de public/
  publicDir: "public",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // Limpia "dist/" antes de construir
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Ahora __dirname está bien definido
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(css|js)$/.test(assetInfo.name)) {
            return "assets/[name]-[hash][extname]"; // Asegura nombres correctos
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});





/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  // Base correcta para GitHub Pages y local
  base: process.env.NODE_ENV === "production" ? "/poliservicios/" : "/",

  // Mantener los archivos de public/
  publicDir: "public",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // Limpia "dist/" antes de construir
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(css|js)$/.test(assetInfo.name)) {
            return "assets/[name]-[hash][extname]"; // Asegura nombres correctos
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});

*/

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