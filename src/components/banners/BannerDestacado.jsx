import React from 'react';
import Placeholder from '../generales/Placeholder.jsx'; // Ajusta la ruta según tu estructura

const BannerDestacado = ({ datos }) => {
  const { titulo, descripcion, textoBoton, enlaceBoton } = datos;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-estado-alerta p-8">
      {/* Título o Placeholder */}
      <div className="w-3/4 mx-auto mb-4">
        {titulo ? (
          <h1 className="text-3xl font-bold text-texto-oscuro dark:text-texto text-center">
            {titulo}
          </h1>
        ) : (
          <Placeholder type="text" lineas={1} />
        )}
      </div>

      {/* Descripción o Placeholder */}
      <div className="w-3/4 mx-auto mb-6">
        {descripcion ? (
          <p className="text-lg text-texto-oscuro dark:text-texto text-center">
            {descripcion}
          </p>
        ) : (
          <Placeholder type="text" lineas={3} />
        )}
      </div>

      {/* Botón o Placeholder */}
      <div className="mt-4">
        {enlaceBoton ? (
          <a href={enlaceBoton} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 rounded-lg font-bold text-texto-oscuro hover:text-white bg-marca-principal hover:bg-marca-principal/80 transition-colors">
              {textoBoton ? (
                textoBoton
              ) : (
                <Placeholder type="text" lineas={1} className="w-24 h-4" />
              )}
            </button>
          </a>
        ) : (
          <Placeholder type="text" lineas={1} className="" />
        )}
      </div>
    </div>
  );
};

export default BannerDestacado;
