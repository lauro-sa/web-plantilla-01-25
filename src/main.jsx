// Archivo: main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProveedorTema } from './contexto/ContextoTema';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>
);
