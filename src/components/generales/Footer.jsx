import React, { useContext } from 'react';
import { ContextoTema } from '../../contexto/ContextoTema';
import { DatosFooter, DatosNavbar } from '../../datos/datos'; // Importamos los datos del footer y del navbar

function Footer() {
  const { tema } = useContext(ContextoTema); // Obtiene el tema actual del contexto
  const { contacto, redesSociales, mensajeFooter, derechos } = DatosFooter;
  const enlacesRapidos = DatosNavbar.enlaces;

  const obtenerIcono = (iconoClaro, iconoOscuro) => {
    const esOscuro = tema === 'oscuro' || (tema === 'sistema' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return esOscuro ? iconoOscuro : iconoClaro;
  };

  return (
    <footer className="text-texto dark:text-texto-oscuro p-4 border-t border-marca-principal">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

        {/* Contacto */}
        <div className="order-2 md:order-1 mb-3 md:mb-0">
          <h5 className="text-lg font-semibold mb-2">Contacto</h5>
          <ul className="list-none text-sm">
            <li>Tel: {contacto.telefono}</li>
            <li>Email: {contacto.email}</li>
            <li>Dirección: {contacto.direccion}</li>
          </ul>
        </div>

        {/* Enlaces Rápidos */}
        <div className="hidden md:block order-3 md:order-2">
          <h5 className="text-lg font-semibold mb-2">Enlaces Rápidos</h5>
          <ul className="list-none text-sm">
            {enlacesRapidos.map((enlace, index) => (
              enlace.url ? (
                <li key={index}>
                  <a href={enlace.url} className="hover:underline">
                    {enlace.texto || enlace.titulo}
                  </a>
                </li>
              ) : null
            ))}
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="order-1 md:order-3">
          <h5 className="text-lg font-semibold mb-2">Síguenos</h5>
          <ul className="flex justify-center gap-3">
            {redesSociales.map((red, index) => (
              <li key={index}>
                <a href={red.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={obtenerIcono(red.iconoClaro, red.iconoOscuro)}
                    alt={red.nombre}
                    className="h-5 w-5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Mensaje Footer */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center mt-3 md:mt-6 text-xs">
        <a
          href="https://www.stiancode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:scale-105 transition-transform duration-300"
        >
          {mensajeFooter}
        </a>
        <p>© {new Date().getFullYear()} {derechos}</p>
      </div>
    </footer>
  );
}

export default Footer;
