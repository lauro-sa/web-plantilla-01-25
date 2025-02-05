import React, { useState, useEffect } from 'react';
import Placeholder from '../generales/Placeholder.jsx';

const BannerCambiante = ({ datos }) => {
  const imagenes = datos?.imagenes || []; // Manejo seguro de datos
  const [imagenActiva, setImagenActiva] = useState(0);
  const [imagenesCargadas, setImagenesCargadas] = useState({});

  useEffect(() => {
    if (imagenes.length > 0) {
      const intervalo = setInterval(() => {
        setImagenActiva((prev) => (prev + 1) % imagenes.length);
      }, 3000);

      return () => clearInterval(intervalo);
    }
  }, [imagenes]);

  const manejarCargaImagen = (index) => {
    setImagenesCargadas((prev) => ({ ...prev, [index]: true }));
  };

  const manejarErrorImagen = (index) => {
    setImagenesCargadas((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="w-full h-[300px] overflow-hidden relative rounded-lg shadow-md">
      {/* Placeholder global si no hay imágenes */}
      {imagenes.length === 0 ? (
        <div className="absolute inset-0">
          <Placeholder type="image" className="w-full h-full bg-gray-300" iconSize="5rem" iconPosition="left" />
        </div>
      ) : (
        imagenes.map((imagen, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === imagenActiva ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Imagen o Placeholder */}
            {imagen.url ? (
              <img
                src={imagen.url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                onLoad={() => manejarCargaImagen(index)}
                onError={() => manejarErrorImagen(index)}
              />
            ) : (
              <Placeholder
                type="image"
                className="w-full h-full bg-gray-300"
                iconSize="5rem"
                iconPosition="left"
              />
            )}

            {/* Contenedor del título o Placeholder */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              {imagen.titulo ? (
                <h2 className="text-xl text-white font-bold text-center">{imagen.titulo}</h2>
              ) : (
                <div className="w-3/4">
                  <Placeholder type="text text-center" lineas={1} className="h-6 mx-auto" />
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BannerCambiante;
