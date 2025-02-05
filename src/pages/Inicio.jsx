// Archivo: Inicio.jsx

import React from 'react';

function Inicio() {
  return (
    <main className="px-4 py-8">
      <section className="mb-8 p-6 bg-primario text-blanco rounded-lg">
        <h2 className="text-xl font-bold mb-4">Sección 1</h2>
        <p>Contenido de la sección 1.</p>
      </section>
      <section className="mb-8 p-6 bg-secundario text-blanco rounded-lg">
        <h2 className="text-xl font-bold mb-4">Sección 2</h2>
        <p>Contenido de la sección 2.</p>
      </section>
    </main>
  );
}

export default Inicio;
