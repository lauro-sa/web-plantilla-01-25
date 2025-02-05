// ModalContacto.jsx

import React, { useState, useContext } from 'react';
import { ContextoTema } from '../../contexto/ContextoTema';
import { DatosModalContacto } from '../../datos/datos';
import { MdClose } from 'react-icons/md';

function ModalContacto() {
  const { tema } = useContext(ContextoTema);
  const [isOpen, setIsOpen] = useState(false);

  const abrirModal = () => setIsOpen(true);
  const cerrarModal = () => setIsOpen(false);

  const obtenerIcono = (iconoClaro, iconoOscuro) => {
    const esOscuro =
      tema === 'oscuro' ||
      (tema === 'sistema' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    return esOscuro ? iconoOscuro : iconoClaro;
  };

  function cerrarSiTocaFuera(e) {
    if (e.target.id === 'fondoModal') {
      cerrarModal();
    }
  }

  const { titulo, descripcion, contactos } = DatosModalContacto;

  return (
    <>
      <button
        onClick={abrirModal}
        className="px-3 md:px py-2 rounded-lg font-semibold text-texto dark:text-texto-oscuro hover:text-texto-oscuro hover:bg-marca-principal transition duration-300"
      >
        Contactar
      </button>

      {isOpen && (
        <div
          id="fondoModal"
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={cerrarSiTocaFuera}
        >
          <div
            className="bg-fondo dark:bg-fondo-oscuro shadow-xl rounded-lg overflow-hidden w-full max-w-lg transition-all duration-300 animate-fadeInModal"
          >
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-center text-texto dark:text-texto-oscuro">
                {titulo}
              </h2>
              <button
                onClick={cerrarModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <MdClose className="w-6 h-6" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm pb-4 text-texto dark:text-texto-oscuro mb-4">
                {descripcion}
              </p>
              <div className="flex justify-around items-center mb-4">
                {contactos.map((contacto, index) => (
                  <a
                    key={index}
                    href={contacto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:text-marca-principal font-bold"
                  >
                    <img
                      src={obtenerIcono(contacto.iconoClaro, contacto.iconoOscuro)}
                      alt={contacto.nombre}
                      className="w-8 h-8"
                    />
                    <span className="text-sm mt-2">{contacto.texto}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalContacto;

