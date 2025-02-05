import React, { useState, useEffect } from 'react';
import { datosBotonWhatsApp } from '../../datos/datos';

function BotonWhatsApp() {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [textoMostrado, setTextoMostrado] = useState('');
  const [indice, setIndice] = useState(0);
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const [animarBoton, setAnimarBoton] = useState(false);

  const esMovil = window.innerWidth < 768; // Detecta si es un móvil
  const textoPC = datosBotonWhatsApp.textoAnimadoPC;
  const textoMovil = datosBotonWhatsApp.textoAnimadoMovil;
  const textoActivo = esMovil ? textoMovil : textoPC; // Selecciona el texto según el dispositivo

  useEffect(() => {
    // Mostrar el botón después de 5 segundos
    const timerMostrarBoton = setTimeout(() => {
      setMostrarBoton(true);

      if (!textoActivo) {
        // Si NO hay texto, esperar 10 segundos y activar el primer salto
        setTimeout(() => setAnimarBoton(true), 10000);
      } else {
        // Si hay texto, mostrarlo después de 5s
        setTimeout(() => setMostrarTexto(true), 5000);
      }
    }, 5000);

    return () => clearTimeout(timerMostrarBoton);
  }, [textoActivo]);

  useEffect(() => {
    if (!textoActivo) {
      // Si no hay texto, hacer la animación de salto cada 10s
      const intervaloSalto = setInterval(() => {
        setAnimarBoton(true);
        setTimeout(() => setAnimarBoton(false), 1000);
      }, 10000);

      return () => clearInterval(intervaloSalto);
    } else {
      // Si hay texto, asegurarse de que el botón NO se anime
      setAnimarBoton(false);
    }
  }, [textoActivo]);

  useEffect(() => {
    if (!mostrarTexto) return;

    const intervaloTexto = setInterval(() => {
      if (indice < textoActivo.length) {
        setTextoMostrado(prev => prev + textoActivo.charAt(indice));
        setIndice(indice + 1);
      } else {
        clearInterval(intervaloTexto);
        setTimeout(() => {
          setTextoMostrado('');
          setIndice(0);
          setMostrarTexto(false);
          setTimeout(() => setMostrarTexto(true), 10000);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(intervaloTexto);
  }, [mostrarTexto, indice]);

  const mensajeCodificado = encodeURIComponent(datosBotonWhatsApp.mensajeInicial);
  const enlaceCompleto = `${datosBotonWhatsApp.enlaceBase}?text=${mensajeCodificado}`;

  return (
    <a
      href={enlaceCompleto}
      className={`fixed bottom-10 right-10 z-50 flex items-center px-2 py-2 rounded-full shadow-lg transform transition-all duration-300 ease-in-out bg-whatsapp dark:bg-whatsapp-dark
    ${mostrarBoton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    ${animarBoton ? 'animate-btnAnimacionWhatsapp' : ''} 
    hover:shadow-2xl hover:outline-none hover:ring-2 hover:ring-whatsapp hover:ring-opacity-50`}
      style={{ transitionDelay: mostrarBoton ? '0ms' : '500ms' }}
    >
      <img src={datosBotonWhatsApp.iconos.claro} alt="WhatsApp" className="w-6 h-6 dark:hidden" />
      <img src={datosBotonWhatsApp.iconos.oscuro} alt="WhatsApp" className="w-6 h-6 hidden dark:block" />
      {textoActivo ? (
        <span className={`ml-2 text-white font-semibold ${textoMostrado ? 'inline' : 'hidden'}`}>
          {textoMostrado}
        </span>
      ) : null}
    </a>
  );
}

export default BotonWhatsApp;
