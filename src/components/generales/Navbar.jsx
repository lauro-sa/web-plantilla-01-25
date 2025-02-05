import React, { useState, useEffect, useRef } from 'react';
import { DatosNavbar } from '../../datos/datos';
import SelectorDeTema from '../botones/SelectorDeTema';
import ModalContacto from '../modales/ModalContacto';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [dropdownAbierto, setDropdownAbierto] = useState(null);
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  const alternarMenu = () => setMenuAbierto(!menuAbierto);
  const alternarDropdown = (index) => {
    setDropdownAbierto(dropdownAbierto === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every(
          (ref) => !ref || !ref.contains(event.target)
        )
      ) {
        setDropdownAbierto(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const manejarClickServicios = (event) => {
    event.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { logo, enlaces, mostrarSelectorDeTema } = DatosNavbar;

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-marca-principal text-texto dark:text-texto-oscuro bg-fondo dark:bg-fondo-oscuro">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
          <div className="relative h-8 w-auto">
            <img src={logo.claro} alt={logo.alt} className="h-8 w-auto object-contain dark:hidden" />
            <img src={logo.oscuro} alt={logo.alt} className="h-8 w-auto object-contain hidden dark:block" />
          </div>
          {logo.texto && (
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              {logo.texto}
            </span>
          )}
        </a>

        {/* Botón Tema y Hamburguesa */}
        <div className="flex md:order-2">
          {mostrarSelectorDeTema && (
            <div className="hidden md:block">
              <SelectorDeTema />
            </div>
          )}
          <button
            onClick={alternarMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-texto dark:text-oscuro-texto"
          >
            <span className="sr-only">Abrir menú principal</span>
            {menuAbierto ? (
              <svg className="w-7 h-7 text-texto dark:text-texto-oscuro" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-texto dark:text-texto-oscuro" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" stroke="currentColor">
                <path d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú principal */}
        <div className={`${menuAbierto ? 'block' : 'hidden'} md:flex md:w-auto`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 m-4 font-medium rounded-lg md:space-x-8 md:flex-row">
            {enlaces.map((enlace, index) => (
              <li key={index} className="relative">
                {enlace.opciones?.length > 0 ? (
                  <>
                    <button
                      onClick={() => alternarDropdown(index)}
                      ref={(el) => (dropdownRefs.current[index] = el)}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-marca-principal dark:hover:bg-marca-principal hover:text-white"
                    >
                      {enlace.titulo}
                      <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" stroke="currentColor">
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </button>
                    {dropdownAbierto === index && (
                      <div className="absolute mt-2 w-44 bg-fondo-secundario dark:bg-fondo-secundario-oscuro rounded-lg shadow">
                        <ul className="py-2 text-sm text-texto dark:text-texto-oscuro">
                          {enlace.opciones.map((opcion, subIndex) => (
                            <li key={subIndex}>
                              <a href={opcion.url} className="block px-4 py-2 hover:bg-marca-principal hover:text-white">
                                {opcion.texto}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : enlace.titulo === "Servicios" ? (
                  <button onClick={manejarClickServicios} className="block py-2 px-3 hover:bg-marca-principal hover:text-white rounded-lg dark:hover:bg-oscuro-destacado">
                    {enlace.titulo}
                  </button>
                ) : enlace.texto === "Contacto" ? (
                  <ModalContacto />
                ) : (
                  <a href={enlace.url} className="block py-2 px-3 hover:bg-marca-principal hover:text-white rounded-lg dark:hover:bg-oscuro-destacado">
                    {enlace.texto}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
