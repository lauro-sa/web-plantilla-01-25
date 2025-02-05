import React, { createContext, useState, useEffect } from 'react';

// Crear un contexto para almacenar y gestionar el tema de la interfaz de usuario.
export const ContextoTema = createContext();

export function ProveedorTema({ children }) {
  // Estado para almacenar el tema actual, inicializado desde el almacenamiento local o por defecto a 'sistema'.
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'sistema');
  // Estado para almacenar el modo del sistema operativo, oscuro o claro.
  const [sistemaModo, setSistemaModo] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro'
  );

  // Efecto para suscribirse a cambios en las preferencias de esquema de color del sistema operativo.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const manejarCambioMedia = () => {
      const nuevoModoSistema = mediaQuery.matches ? 'oscuro' : 'claro';
      setSistemaModo(nuevoModoSistema);
      // Aplica el tema si el tema actual está configurado para seguir el sistema.
      if (tema === 'sistema') {
        aplicarTema(nuevoModoSistema);
      }
    };

    mediaQuery.addEventListener('change', manejarCambioMedia);
    // Limpieza de la suscripción al desmontar el componente.
    return () => mediaQuery.removeEventListener('change', manejarCambioMedia);
  }, [tema]);

  // Efecto para actualizar el almacenamiento local y aplicar el tema seleccionado.
  useEffect(() => {
    localStorage.setItem('tema', tema);
    // Aplica el tema seleccionado o el del sistema si está configurado en 'sistema'.
    aplicarTema(tema === 'sistema' ? sistemaModo : tema);
  }, [tema, sistemaModo]);

  // Función para aplicar el tema al cuerpo del documento.
  const aplicarTema = (modo) => {
    document.body.className = modo === 'oscuro' ? 'dark' : '';
  };

  // Función para cambiar el tema.
  const cambiarModoTema = (modo) => {
    setTema(modo);
  };

  // Proveedor del contexto que expone el tema, la función para cambiarlo y el modo del sistema.
  return (
    <ContextoTema.Provider value={{ tema, cambiarModoTema, sistemaModo }}>
      {children}
    </ContextoTema.Provider>
  );
}
