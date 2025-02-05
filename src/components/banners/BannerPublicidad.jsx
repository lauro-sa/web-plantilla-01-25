import React, { useState, useEffect } from 'react';
import Placeholder from '../generales/Placeholder.jsx'; // Ajusta la ruta según tu estructura

const BannerPublicidad = ({ datos }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [imagenesCargadas, setImagenesCargadas] = useState({});

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % datos.length);
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(intervalo);
  }, [datos]);

  const manejarCargaImagen = (index) => {
    setImagenesCargadas((prev) => ({ ...prev, [index]: true }));
  };

  const manejarErrorImagen = (index) => {
    setImagenesCargadas((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="relative w-full h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden">
      {datos.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center transition-transform duration-1000 ease-in-out ${
            index === indiceActual ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Imagen (izquierda) con Placeholder */}
          <div className="w-1/3 h-full flex items-center justify-center">
            {item.imagen && imagenesCargadas[index] !== false ? (
              <img
                src={item.imagen}
                alt={item.texto}
                className="w-full h-full object-cover"
                onLoad={() => manejarCargaImagen(index)}
                onError={() => manejarErrorImagen(index)}
              />
            ) : (
              <Placeholder type="image" className="w-full h-full" />
            )}
          </div>

          {/* Texto (derecha) con Placeholder */}
          <div className="w-2/3 h-full bg-marca-principal text-white flex items-center justify-center px-6">
            {item.texto ? (
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-center">
                {item.texto}
              </h2>
            ) : (
              <Placeholder type="text" lineas={1} className="w-3/4 h-4" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerPublicidad;
