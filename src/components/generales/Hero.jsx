// Hero.jsx
import React, { useState } from 'react';
import Placeholder from '../generales/Placeholder.jsx'; // Ajusta la ruta según tu estructura
import { DatosHero01 } from '../../datos/datos'; 

const Hero = () => {
  const { imagenFondo, titulo, subtitulo, enlaceContacto, textoBoton } = DatosHero01;
  const mostrarPlaceholderFondo = !imagenFondo; // Condición para mostrar el placeholder de la imagen

  return (
    <div
      className={`w-full py-28 bg-cover bg-center text-center relative`}
      style={{
        backgroundImage: imagenFondo && !mostrarPlaceholderFondo ? `url(${imagenFondo})` : 'none',
      }}
    >
      {/* Placeholder para el fondo si falta la imagen */}
      {mostrarPlaceholderFondo && (
        <div className="absolute inset-0">
          <Placeholder type="image" className="w-full h-full bg-gray-300" />
        </div>
      )}

      <div className="relative z-10 backdrop-filter backdrop-blur p-4 bg-fondo-translucido dark:bg-oscuro-fondo-translucido">
        {/* Placeholder dinámico para el título */}
        <h1 className="text-xl text-texto dark:text-texto-oscuro font-bold">
          {titulo ? (
            titulo
          ) : (
            <Placeholder type="text" lineas={1} className="w-3/4 mx-auto" />
          )}
        </h1>

        {/* Placeholder dinámico para el subtítulo */}
        <p className="m-4 text-texto-secundario dark:text-texto-secundario-oscuro">
          {subtitulo ? (
            subtitulo
          ) : (
            <Placeholder type="text" lineas={2} className="w-2/3 mx-auto" />
          )}
        </p>

        {/* Botón de contacto o Placeholder */}
        <div className="mt-8 flex justify-center">
          {enlaceContacto ? (
            <a href={`https://wa.me/${enlaceContacto}`} target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 mx-2 rounded-lg text-white font-bold bg-estado-alerta dark:bg-estado-alerta-oscuro hover:bg-[#25D366] dark:hover:bg-[#25D366] transition duration-300 ease-in-out">
                {textoBoton ? textoBoton : <Placeholder type="text" lineas={1} className="w-24 h-4 mx-auto" />}
              </button>
            </a>
          ) : (
            <Placeholder
              type="text"
              lineas={1}
              className="w-40 h-10 rounded-lg bg-estado-alerta/60"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
