import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import ImagenesIA from "./components/ImagenesIA"; // Importa el nuevo componente
import '@fortawesome/fontawesome-free/css/all.min.css';

// ✅ Detectamos si estamos en GitHub Pages
//const isProduction = process.env.NODE_ENV === "production";
//const isGitHubPages = window.location.hostname.includes("github.io");

// ✅ Si es GitHub Pages, usamos "/poliservicios", de lo contrario "/"
//const basename = isProduction && isGitHubPages ? "/poliservicios" : "/";
// colocar esto en el Router cambiarlo por el pimer <Router basename={basename}> {/* ✅ Solo si es GitHub Pages */}

const App = () => {
  return (
    <ThemeProvider>
      <Router> {/* ✅ Solo si es GitHub Pages <Router basename={basename}>*/}
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imagenesIA LEO" element={<ImagenesIA />} /> {/* Ruta para el componente IA */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
