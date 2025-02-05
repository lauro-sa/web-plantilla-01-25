import React from 'react';
import TarjetaServicio from './TarjetaServicio';
import Placeholder from '../../generales/Placeholder.jsx';

const SeccionTarjetas = ({ datos }) => {
  const { tituloSeccion, tarjetas } = datos || {}; // Maneja cuando `datos` es undefined

  return (
    <section>
      {/* Título con placeholder */}
      <h1 className="text-xl font-bold mb-6 text-texto dark:text-texto-oscuro">
        {tituloSeccion ? tituloSeccion : <Placeholder type="text" lineas={1} className="w-1/2" />}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Si no hay tarjetas, muestra placeholders */}
        {tarjetas?.length > 0
          ? tarjetas.map((item, index) => <TarjetaServicio key={index} item={item} />)
          : Array.from({ length: 4 }).map((_, index) => (
              <div key={`placeholder-${index}`} className="p-4">
                <Placeholder type="image" className="w-full h-40 rounded-md mb-4" />
                <Placeholder type="text" lineas={1} className="w-3/4 mb-4" />
                <Placeholder type="text" lineas={2} className="w-full" />
              </div>
            ))}

        {/* Relleno para completar las columnas */}
        {tarjetas?.length > 0 &&
          Array.from({ length: (4 - (tarjetas.length % 4)) % 4 }).map((_, index) => (
            <div key={`placeholder-${index}`} className="invisible bg-transparent" />
          ))}
      </div>
    </section>
  );
};

export default SeccionTarjetas;
