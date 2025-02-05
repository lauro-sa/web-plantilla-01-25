import React from 'react';
import TarjetaFlujo from './TarjetaFlujo';
import Placeholder from '../../generales/Placeholder.jsx';

const SeccionFlujos = ({ datos }) => {
  return (
    <section>
      <h1 className="text-xl font-bold mb-6 text-center text-texto dark:text-texto-oscuro">
        {datos?.tituloSeccion ? datos.tituloSeccion : <Placeholder type="text" lineas={1} className="w-1/2 mx-auto h-8" />}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {datos?.etapas?.length > 0 ? (
          datos.etapas.map((etapa, index) => <TarjetaFlujo key={index} etapa={etapa} />)
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <TarjetaFlujo key={index} etapa={null} />
          ))
        )}
      </div>
    </section>
  );
};

export default SeccionFlujos;
