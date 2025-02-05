import React, { useState } from 'react';
import Placeholder from '../../generales/Placeholder.jsx';

const TarjetaServicio = ({ item }) => {
  const [mostrarPlaceholder, setMostrarPlaceholder] = useState(false);

  return (
    <div className="bg-fondo-secundario dark:bg-fondo-secundario-oscuro p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Imagen con placeholder */}
      <div className="relative w-full h-40 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-700">
        {!item?.imagen || mostrarPlaceholder ? (
          <Placeholder type="image" className="w-full h-full" />
        ) : (
          <img
            src={item.imagen}
            alt={item.titulo || 'Imagen de tarjeta'}
            className="w-full h-full object-cover"
            onError={() => setMostrarPlaceholder(true)}
          />
        )}
      </div>

      {/* Título con placeholder */}
      <h2 className="text-lg font-semibold text-texto dark:text-texto-oscuro mt-4 mb-2">
        {item?.titulo ? (
          item.titulo
        ) : (
          <Placeholder type="text" lineas={1} className="w-3/4" />
        )}
      </h2>

      {/* Descripción con placeholder */}
      <p className="text-sm text-texto-secundario dark:text-texto-secundario-oscuro">
        {item?.descripcion ? (
          item.descripcion
        ) : (
          <Placeholder type="text" lineas={2} className="w-full" />
        )}
      </p>
    </div>
  );
};

export default TarjetaServicio;
