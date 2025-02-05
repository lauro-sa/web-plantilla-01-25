// BotonWhatsApp.jsx
import React, { useState, useEffect } from 'react';
import { datosBotonWhatsApp } from '../../datos/datos';

function BotonWhatsApp() {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timerShow = setTimeout(() => {
      setMostrarBoton(true);
    }, 5000);

    const timerJump = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 10000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMostrarBoton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timerShow);
      clearInterval(timerJump);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mensajeEncoded = encodeURIComponent(datosBotonWhatsApp.mensajeInicial);
  const enlaceCompleto = `${datosBotonWhatsApp.enlaceBase}?text=${mensajeEncoded}`;

  return (
    <a
      href={enlaceCompleto}
      className={`fixed bottom-10 right-10 z-50 p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out bg-whatsapp dark:bg-whatsapp-dark ${mostrarBoton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${animate ? 'animate-multiJump' : ''} hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-opacity-50`}
      style={{ transitionDelay: mostrarBoton ? '0ms' : '500ms' }}
    >
      <img src={datosBotonWhatsApp.iconos.claro} alt="WhatsApp" className="w-8 h-8 dark:hidden" />
      <img src={datosBotonWhatsApp.iconos.oscuro} alt="WhatsApp" className="w-8 h-8 hidden dark:block" />
    </a>
  );
}

export default BotonWhatsApp;
