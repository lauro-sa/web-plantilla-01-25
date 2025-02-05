import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import Placeholder from '../../generales/Placeholder.jsx';

const TarjetaFlujo = ({ etapa }) => {
  const [mostrarPlaceholder, setMostrarPlaceholder] = useState(false);
  const Icono = etapa?.icono && MdIcons[etapa.icono] ? MdIcons[etapa.icono] : null;

  return (
    <div className="bg-fondo-secundario dark:bg-fondo-secundario-oscuro p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center min-h-[220px]">
      {/* Icono o Placeholder */}
      <div className="mb-4 flex items-center justify-center w-16 h-16 min-h-16">
        {(!Icono || mostrarPlaceholder) ? (
          <Placeholder type="image" className="w-16 h-16 rounded-full" />
        ) : (
          <Icono
            className="text-marca-principal transition-all duration-300"
            style={{ fontSize: '3rem' }}
            onError={() => setMostrarPlaceholder(true)}
          />
        )}
      </div>

      {/* Título o Placeholder */}
      <h2 className="text-lg font-semibold text-texto dark:text-texto-oscuro mb-4 w-full text-center">
        {etapa?.titulo ? (
          etapa.titulo
        ) : (
          <span className="block w-full mx-auto">
            <Placeholder type="text" lineas={1} />
          </span>
        )}
      </h2>

      {/* Descripción o Placeholder */}
      <p className="text-sm text-texto-secundario dark:text-texto-secundario-oscuro text-center w-full">
        {etapa?.descripcion ? (
          etapa.descripcion
        ) : (
          <span className="block w-full mt-4">
            <Placeholder type="text" lineas={3} />
          </span>
        )}
      </p>
    </div>
  );
};

export default TarjetaFlujo;
