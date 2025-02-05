import React, { useState } from 'react';
import Placeholder from '../generales/Placeholder.jsx'; // Ajusta la ruta según tu estructura

const SeccionTextoImagen = ({ datos }) => {
  const { titulo, texto, imagenUrl, imagenAlt } = datos || {}; // Manejo seguro de datos
  const [mostrarPlaceholderImagen, setMostrarPlaceholderImagen] = useState(false);

  return (
    <div className="w-full py-8 flex flex-col-reverse md:flex-row items-center justify-between bg-fondo dark:bg-fondo-oscuro rounded-lg">
      {/* Texto */}
      <div className="w-full md:w-1/2 p-4">
        {/* Placeholder dinámico para el título */}
        <h2 className="text-xl font-bold text-texto dark:text-texto-oscuro mb-4">
          {titulo ? (
            titulo
          ) : (
            <Placeholder type="text" lineas={1} className="w-3/4 h-8" />
          )}
        </h2>

        {/* Placeholder dinámico para el texto */}
        <p className="text-base text-texto-secundario dark:text-texto-secundario-oscuro">
          {texto ? (
            texto
          ) : (
            <Placeholder type="text" lineas={4} className="w-full h-6" />
          )}
        </p>
      </div>

      {/* Imagen o Placeholder */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="w-full h-64 max-h-96 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          {!imagenUrl || mostrarPlaceholderImagen ? (
            <Placeholder
              type="image"
              className="w-full h-full"
              iconSize="4rem" // Tamaño del ícono del placeholder
              iconPosition="center" // Posición del ícono
            />
          ) : (
            <img
              src={imagenUrl}
              alt={imagenAlt || 'Imagen de sección'}
              className="w-full h-full object-cover"
              onError={() => setMostrarPlaceholderImagen(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SeccionTextoImagen;
