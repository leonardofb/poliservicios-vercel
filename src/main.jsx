import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importar estilos correctamente
import './assets/css/style-starter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


