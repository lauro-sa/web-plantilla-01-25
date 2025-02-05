// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProveedorTema } from './contexto/ContextoTema';

// Generales
import Navbar from './components/generales/Navbar';
import Hero from './components/generales/Hero';
import Footer from './components/generales/Footer';

import BotonWhatsApp from './components/botones/BotonWhatsApp';

// Páginas/Secciones
import SeccionTarjetas from './components/secciones/seccionTarjetas/SeccionTarjetas';
import SeccionTextoImagen from './components/secciones/SeccionTextoImagen';
import SeccionFlujos from './components/secciones/seccionFlujos/SeccionFlujos';
import ComparadorImagenes from './components/secciones/ComparadorImagenes';

// Banners
import BannerPublicidad from "./components/banners/BannerPublicidad";
import BannerCambiante from './components/banners/BannerCambiante';
import BannerDestacado from './components/banners/BannerDestacado';

// Datos importados
import {
  DatosSeccionTarjetas01, DatosSeccionTextoImagen01, DatosSeccionTextoImagen02,
  DatosBannerPublicidad01, DatosBannerCambiante01, BannerDeslizable02, DatosBannerDestacado01, 
  DatosBannerDestacado02, DatosSeccionFlujos01, DatosComparadorImagenes
} from "./datos/datos";




function App() {
  return (
    <ProveedorTema>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-fondo text-texto dark:bg-fondo-oscuro dark:text-oscuro-texto">

          <Navbar />
          <BotonWhatsApp />

          <main className="flex-grow">

            <Routes>

              {/* Ruta para la página de inicio */}
              <Route
                path="/"
                element={
                  <div className="space-y-24 py-16 md:py-20">
                    <div>
                    <Hero />
                    <BannerPublicidad datos={DatosBannerPublicidad01} />
                    </div>

                    <div>
                      <ComparadorImagenes datos={DatosComparadorImagenes} />
                    </div>

                    <div id="servicios" className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4 mt-20 md:mt-28">
                        <SeccionTarjetas datos={DatosSeccionTarjetas01} />
                      </div>
                    </div>


                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4">
                        <BannerCambiante datos={DatosBannerCambiante01} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4">
                        <BannerCambiante datos={BannerDeslizable02} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4">
                        <SeccionTextoImagen datos={DatosSeccionTextoImagen01} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <BannerDestacado datos={DatosBannerDestacado01} />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4">
                        <SeccionFlujos datos={DatosSeccionFlujos01} />
                      </div>
                    </div>
                  </div>
                }
              />


              {/* Ruta para la página de "Acerca" */}
              <Route
                path="/acerca"
                element={
                  <div className="space-y-24 py-16 md:py-20">

                    <div className="flex flex-col items-center">
                      <div className="w-full max-w-[1200px] mx-auto p-4">
                        <SeccionTextoImagen datos={DatosSeccionTextoImagen02} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <BannerDestacado datos={DatosBannerDestacado02} />
                    </div>
                  </div>
                }
              />
            </Routes>


          </main>

          <Footer />

        </div>
      </BrowserRouter>
    </ProveedorTema>
  );
}

export default App;
