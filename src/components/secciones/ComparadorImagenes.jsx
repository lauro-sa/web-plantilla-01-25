import { useState } from "react";
import { BiMoveHorizontal } from "react-icons/bi";
import { DatosComparadorImagenes } from "../../datos/datos";

const ComparadorImagenes = () => {
  const [posicion, setPosicion] = useState(50);
  const [particulas, setParticulas] = useState([]);

  const generarParticulas = (tipo) => {
    const nuevasParticulas = Array.from({ length: Math.floor(Math.random() * 2) + 1 }).map(() => ({
      id: Math.random(),
      left: `${posicion}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 15}px`, // Tamaño de los emojis
      transformX: `${(Math.random() - 0.5) * 20}px`, // Movimiento más corto
      transformY: `${(Math.random() - 0.5) * 20}px`, // Movimiento más corto
      tipo,
    }));

    setParticulas((prev) => [...prev, ...nuevasParticulas]);

    // Eliminar partículas después de 300ms
    setTimeout(() => {
      setParticulas((prev) => prev.filter((p) => !nuevasParticulas.includes(p)));
    }, 
    300);
  };

  const manejarCambio = (e) => {
    const nuevaPosicion = e.target.value;
    setPosicion(nuevaPosicion);

    if (nuevaPosicion > posicion) {
      generarParticulas("despues"); // Genera estrellas ✨💖🪄💉🩹
    } else {
      generarParticulas("antes"); // Genera chispas ⚡😵🤧❤️‍🩹💥
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-fondo-secundario dark:bg-fondo-secundario-oscuro rounded-2xl shadow-lg">
      {/* Título y descripción */}
      <h2 className="text-xl font-bold text-texto dark:text-texto-oscuro text-center">
        {DatosComparadorImagenes.titulo}
      </h2>
      <p className="text-texto-secundario dark:text-texto-secundario-oscuro text-center mt-2 mb-4">
        {DatosComparadorImagenes.descripcion}
      </p>

      {/* Contenedor de imágenes */}
      <div className="relative w-full aspect-square overflow-hidden rounded shadow-lg">
        {/* Imagen de fondo (después) */}
        <img
          src={DatosComparadorImagenes.imagenDespues}
          alt="Después"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Imagen superior (antes) con máscara dinámica */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - posicion}% 0 0)` }}
        >
          <img
            src={DatosComparadorImagenes.imagenAntes}
            alt="Antes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Línea del deslizador */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-texto-invariable-claro shadow-md"
          style={{ left: `${posicion}%`, transform: "translateX(-50%)" }}
        ></div>

        {/* Partículas animadas más sutiles */}
        {particulas.map((p) => (
          <div
            key={p.id}
            className="absolute opacity-100 animate-fade-out"
            style={{
              left: p.left,
              top: p.top,
              fontSize: p.size,
              transform: `translate(${p.transformX}, ${p.transformY})`,
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              color: p.tipo === "despues" ? "#FFD700" : "#FF4500", // Dorado para estrellas, rojo para chispas
            }}
          >
            {p.tipo === "despues" ? "🪄" : "💥"}
          </div>
        ))}

        {/* Botón deslizante con animación hover */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-marca-principal rounded-full flex items-center justify-center shadow-lg cursor-pointer text-texto-invariable-claro text-2xl transition-transform duration-200 ease-in-out hover:scale-125"
          style={{ left: `${posicion}%` }}
        >
          <BiMoveHorizontal />
        </div>

        {/* Input de rango oculto pero funcional */}
        <input
          type="range"
          min="0"
          max="100"
          value={posicion}
          onChange={manejarCambio}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
    </div>
  );
};

export default ComparadorImagenes;
