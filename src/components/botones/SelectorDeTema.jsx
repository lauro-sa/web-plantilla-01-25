import React, { useState, useContext, useRef, useEffect } from 'react';
import { ContextoTema } from '../../contexto/ContextoTema';
import modoOscuro1 from '../../assets/iconosModos/modo-oscuro-1.png';
import modoOscuro2 from '../../assets/iconosModos/modo-oscuro-2.png';
import modoOscuro3 from '../../assets/iconosModos/modo-oscuro-3.png';

function SelectorDeTema() {
  const { tema, cambiarModoTema, sistemaModo } = useContext(ContextoTema);
  const [abierto, setAbierto] = useState(false);
  const [tiempoEsperaClic, setTiempoEsperaClic] = useState(null);
  const referencia = useRef(null);

  // Detecta clics fuera del componente para cerrar el menú desplegable
  useEffect(() => {
    const manejarClicFuera = (evento) => {
      if (referencia.current && !referencia.current.contains(evento.target)) {
        setAbierto(false);
      }
    };

    document.addEventListener('mousedown', manejarClicFuera);

    return () => {
      document.removeEventListener('mousedown', manejarClicFuera);
    };
  }, []);

  // Cambia entre los temas al hacer clic en el botón
  const manejarClicBoton = () => {
    if (tiempoEsperaClic) {
      clearTimeout(tiempoEsperaClic);
      setTiempoEsperaClic(null);
      setAbierto(true); // Maneja un doble clic o clic prolongado
    } else {
      // Maneja un clic simple
      setTiempoEsperaClic(setTimeout(() => {
        cambiarTema();
        setTiempoEsperaClic(null);
      }, 300));
    }
  };

  // Cicla entre los modos claro, oscuro y sistema
  const cambiarTema = () => {
    const siguienteTema = tema === 'claro' ? 'oscuro' : (tema === 'oscuro' ? 'sistema' : 'claro');
    cambiarModoTema(siguienteTema);
  };

  // Determina la clase de fondo para el menú desplegable basada en el modo actual
  const obtenerClaseFondoDropdown = () => {
    if (tema === 'sistema') {
      return sistemaModo === 'oscuro' ? 'bg-fondo-secundario-oscuro' : 'bg-fondo-secundario';
    }
    return tema === 'oscuro' ? 'bg-fondo-secundario-oscuro' : 'bg-fondo-secundario';
  };  

  // Obtiene el icono apropiado para el tema actual
  const obtenerIconoTema = () => {
    return tema === 'sistema' ? modoOscuro3 : (tema === 'oscuro' ? modoOscuro1 : modoOscuro2);
  };

  // Verifica si el modo actual está seleccionado
  const estaSeleccionado = (modo) => {
    return tema === modo;
  };

  // Ajusta la posición del dropdown para que no se salga de la pantalla
  useEffect(() => {
    if (abierto && referencia.current) {
      const dropdown = referencia.current.querySelector('.dropdown-menu');
      const rect = dropdown.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        dropdown.style.right = '0';
        dropdown.style.left = 'auto';
      } else {
        dropdown.style.left = '0';
        dropdown.style.right = 'auto';
      }
    }
  }, [abierto]);

  return (
    <div className="inline-block relative" ref={referencia}>

      <button
        onClick={manejarClicBoton}
        className={`rounded-full text-sm p-1 w-10 h-10
       transition duration-300 ease-in-out 
       transform hover:-translate-y-0.1 active:translate-y-0.5
       hover:shadow-none active:shadow-2xl
       ${tema === 'oscuro' ? 'bg-fondo-oscuro text-texto-oscuro shadow-lg shadow-fondo-secundario-oscuro hover:bg-fondo-secundario-oscuro active:bg-fondo-secundario' : 'bg-fondo text-texto shadow-md shadow-fondo-secundario hover:bg-fondo-secundario active:bg-texto-invariable-claro'}
       border-2 cursor-pointer focus:outline-none`}
        aria-label="Seleccionar tema"
      >
        <img src={obtenerIconoTema()} alt="Modo Tema" className="w-full h-full" />
      </button>

      {abierto && (
        <div className={`dropdown-menu absolute mt-2 py-2 w-48 ${obtenerClaseFondoDropdown()} shadow-xl rounded-lg z-50`}>
          <button onClick={() => { cambiarModoTema('claro'); setAbierto(false); }}
            className={`text-left px-4 py-2 block w-full text-sm hover:bg-estado-exito hover:text-texto-invariable-claro ${estaSeleccionado('claro') ? 'border-l-4 border-marca-secundaria' : ''}`}>
            Modo Claro
          </button>
          <button onClick={() => { cambiarModoTema('oscuro'); setAbierto(false); }}
            className={`text-left px-4 py-2 block w-full text-sm hover:bg-estado-error hover:text-texto-invariable-claro ${estaSeleccionado('oscuro') ? 'border-l-4 border-estado-error-oscuro' : ''}`}>
            Modo Oscuro
          </button>
          <button onClick={() => { cambiarModoTema('sistema'); setAbierto(false); }}
            className={`text-left px-4 py-2 block w-full text-sm hover:bg-estado-alerta hover:text-texto-invariable-claro ${estaSeleccionado('sistema') ? 'border-l-4 border-estado-alerta-oscuro' : ''}`}>
            Sistema ({sistemaModo})
          </button>
        </div>
      )}

    </div>
  );
}

export default SelectorDeTema;
