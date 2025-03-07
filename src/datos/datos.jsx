// datos.jsx

// Importar Logo
import logoPrincipalBlanco from '../assets/LogoWebBlanco.png'
import logoPrincipalNegro from '../assets/LogoWebNegro.png'

// Importar imagen antes y despues
import imagenAntes from '../assets/comparadorImagenes/imagenComparador01.jpeg'
import imagenDespues from '../assets/comparadorImagenes/imagenComparador02.jpeg'

// Importamos los iconos para Contactos y Footer
// WhatsApp
import iconoWhatsAppClaro from '../assets/iconosRedes/icono-whatsapp-negro.png';
import iconoWhatsAppOscuro from '../assets/iconosRedes/icono-whatsapp-blanco.png';
// Telefono
import iconoTelefonoClaro from '../assets/iconosRedes/icono-telefono-negro.png';
import iconoTelefonoOscuro from '../assets/iconosRedes/icono-telefono-blanco.png';
//Instagram
import iconoInstagramClaro from '../assets/iconosRedes/icono-instagram-negro.png';
import iconoInstagramOscuro from '../assets/iconosRedes/icono-instagram-blanco.png';
// Correo
import iconoCorreoClaro from '../assets/iconosRedes/icono-correo-negro.png';
import iconoFacebookClaro from '../assets/iconosRedes/icono-facebook-negro.png';
//Facebook
import iconoFacebookOscuro from '../assets/iconosRedes/icono-facebook-blanco.png';
import iconoCorreoOscuro from '../assets/iconosRedes/icono-correo-blanco.png';


// --- Navbar ---
export const DatosNavbar = {
  logo: {
    claro: logoPrincipalNegro,
    oscuro: logoPrincipalBlanco,
    alt: "Logo de la Web",
    texto: "TU WEB POR SAL" // Puedes cambiar este texto o dejarlo vacío si solo quieres el logo
  },
  enlaces: [
    { texto: "Inicio", url: "/" },
    {
      titulo: "Servicios", opciones: [
        //{ texto: "Servicios 1", url: "/servicios/1" },
        //{ texto: "Servicios 2", url: "/servicios/2" }
      ]
    },
    { texto: "Acerca", url: "/acerca" },
    { texto: "Contacto", url: "/contacto" }
  ],
  mostrarSelectorDeTema: true
};


// --- Sección Hero ---
export const DatosHero01 = {
  imagenFondo: 'https://images.unsplash.com/photo-1608126841830-53832c4b326f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbGxlciUyMG1ldGFsfGVufDB8fDB8fHww',
  titulo: 'Título llamativo y directo. Debe captar la atención y reflejar el propósito. Ejemplo: "Innovación a tu alcance", "Transformamos ideas en realidades".',
  subtitulo: 'Describe en una frase qué ofrece el sitio. Explica de forma breve lo que el usuario encontrará. Puede ser inspirador, informativo o generar curiosidad. Ejemplo: "Descubre nuestros servicios innovadores", "Soluciones digitales para tu negocio", "La calidad que buscas, al mejor precio".',
  enlaceContacto: '541124970311', // Si lo sacamos elimionamos el boton directamente.
  textoBoton: 'Contactános'
};

// --- Sección Tarjetas 01 ---
export const DatosSeccionTarjetas01 = {
  tituloSeccion: "Aquí título breve. 'Nuestros Servicios', 'Lo que ofrecemos', 'Explora nuestras soluciones', etc.",

  tarjetas: [
    {
      imagen: "URL de la imagen o deja vacío si no es necesaria.",
      titulo: "Título corto y claro. Máximo 3-4 palabras.",
      descripcion: "Descripción breve. Máximo 1 o 2 frases. Explica de manera concisa el servicio o producto. Ejemplo: 'Soluciones rápidas para tu negocio'."
    },
    {
      imagen: "https://media.istockphoto.com/id/1740127568/photo/group-of-construction-workers-working-on-scaffolding.jpg?s=612x612&w=0&k=20&c=FNMCLa5uLPZTbOkFXNLvC64zJ2GAQ0IC4vBjmbC3Xbw=",
      titulo: "Diseño Web",
      descripcion: "Creamos sitios modernos, optimizados y adaptables a cualquier dispositivo."
    },
    {
      imagen: "/ruta/imagen3.jpg",
      titulo: "Reparación Express",
      descripcion: "Soluciones rápidas y eficientes para cualquier falla técnica o mecánica."
    },
    {
      imagen: "/ruta/imagen4.jpg",
      titulo: "Servicio adicional",
      descripcion: "Complementa tu experiencia con este servicio opcional y personalizado."
    },
    {
      imagen: "/ruta/imagen5.jpg",
      titulo: "Consultoría IT",
      descripcion: "Asesoramiento experto en tecnología para optimizar tu empresa o proyecto."
    },
    {
      imagen: "/ruta/imagen6.jpg",
      titulo: "Kit Inicial",
      descripcion: "Todo lo que necesitas para empezar con nuestro servicio, en un solo paquete."
    },
    {
      imagen: "/ruta/imagen7.jpg",
      titulo: "Trabajo Final",
      descripcion: "Entrega del proyecto con todas las especificaciones y detalles personalizados."
    },
    {
      imagen: "/ruta/imagen8.jpg",
      titulo: "Mantenimiento",
      descripcion: "Nos aseguramos de que todo siga funcionando correctamente a lo largo del tiempo."
    },
    {
      imagen: "/ruta/imagen9.jpg",
      titulo: "Automatización",
      descripcion: "Mejora la eficiencia de tus procesos con soluciones automatizadas."
    }
  ]
};

// --- Sección Tarjetas 02 ---
export const DatosSeccionTarjetas02 = {
  tituloSeccion: "Nuestros Servicios 02 DATOS",
  tarjetas: [
    {
      imagen: "/ruta/imagen1.jpg",
      titulo: "Servicio 1",
      descripcion: "Descripción breve del servicio 1."
    },
    {
      imagen: "/ruta/imagen2.jpg",
      titulo: "Servicio 2",
      descripcion: "Descripción breve del servicio 2."
    },
    {
      imagen: "/ruta/imagen3.jpg",
      titulo: "Servicio 3",
      descripcion: "Descripción breve del servicio 3."
    },
    {
      imagen: "/ruta/imagen3.jpg",
      titulo: "Servicio 3",
      descripcion: "Descripción breve del servicio 4."
    }
  ]
};

// --- Banner Publicitario --- 
export const DatosBannerPublicidad01 = [
  { 
    texto: "Texto breve y llamativo. Ejemplo: '¡Gran oferta de temporada!'", 
    imagen: "/path/to/imagen1.jpg" // Imagen relacionada con la promoción o mensaje. 
  },
  { 
    texto: "Otro mensaje promocional. Ejemplo: 'Envío gratis en todas las compras'.", 
    imagen: "/path/to/imagen2.jpg" 
  },
  { 
    texto: "Texto que genere interés. Ejemplo: 'Inscripciones abiertas para cursos'.", 
    imagen: "/path/to/imagen3.jpg" 
  }
];

// --- Banner Cambiante 01 ---
export const DatosBannerCambiante01 = {
  imagenes: [
    {
      url: 'https://media.istockphoto.com/id/506473594/photo/manual-worker-on-a-workshop.jpg?s=1024x1024&w=is&k=20&c=OiF16fzWMy8oluDhylsv4RgljEFDnGwioo0-uZDn1zs=',
      titulo: 'Título breve sobre la actividad. Ejemplo: "Trabajo Manual", "Técnica Precisa".'
    },
    {
      url: 'https://images.unsplash.com/photo-1511651432281-5cf2a44004f4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Título reflejando profesionalismo. Ejemplo: "Elegancia Corporativa", "Visión Empresarial".'
    },
    {
      url: 'https://media.istockphoto.com/id/1740127568/photo/group-of-construction-workers-working-on-scaffolding.jpg?s=612x612&w=0&k=20&c=FNMCLa5uLPZTbOkFXNLvC64zJ2GAQ0IC4vBjmbC3Xbw=',
      titulo: 'Título sobre colaboración o sector. Ejemplo: "Equipo de Construcción", "Trabajo en Altura".'
    }
  ]
};

// --- Banner Cambiante 02 ---
export const BannerDeslizable02 = {
  imagenes: [
    { url: '', titulo: 'Título 1' },
    { url: '', titulo: 'Título 2' },
    { url: '', titulo: 'Título 3' },
  ],
};

// --- Sección Texto Imagen ---
export const DatosSeccionTextoImagen01 = {
  titulo: "Título breve y claro. Ejemplo: 'Innovación', 'Soluciones eficientes', 'Calidad garantizada'.",
  texto: "Redacta un párrafo breve que amplíe la idea del título. Debe ser claro, directo y generar interés. Puede incluir beneficios, valores o detalles importantes. Ejemplo: 'Nos especializamos en ofrecer soluciones innovadoras para mejorar tu negocio, adaptándonos a tus necesidades con la mejor calidad y tecnología avanzada.'.",
  imagenUrl: "https://images.unsplash.com/photo-1737031681027-fb111b4b745f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imagenAlt: "Descripción de la imagen"
};

// --- Sección Sobre Nosotros ---
export const DatosSeccionTextoImagen02 = {
  titulo: "Título breve sobre la empresa. Ejemplo: 'Quiénes Somos', 'Nuestra Historia', 'Compromiso y Calidad'.",
  texto: "Describe la empresa en pocas frases. Incluye su propósito, valores o historia. Ejemplo: 'Somos un equipo apasionado por la innovación, ofreciendo soluciones de calidad con un enfoque centrado en el cliente.'.",
  imagenUrl: "URL de una imagen representativa del equipo, la oficina o algo simbólico de la empresa.",
  imagenAlt: "Breve descripción de la imagen. Ejemplo: 'Nuestro equipo en acción', 'Oficinas de la empresa'."
};

// --- Banner Destacado ---
export const DatosBannerDestacado01 = {
  titulo: "Título breve y llamativo. Ejemplo: 'Descuento Especial', 'Oferta Limitada', 'Solo por Hoy'.",
  descripcion: "Texto corto que refuerce el título. Muestra el beneficio o promoción en pocas palabras. Ejemplo: 'Aprovecha descuentos exclusivos esta semana.'",
  textoBoton: '¡Hablemos!',
  enlaceBoton: 'https://wa.me/541124970311'
};

// --- Banner Destacado ---
export const DatosBannerDestacado02 = {
  titulo: "Título breve sobre la empresa. Ejemplo: 'Nuestra Filosofía', 'Compromiso Real'.",
  descripcion: "Mensaje corto que refleje la visión o valores. Ejemplo: 'Nos apasiona innovar y crear soluciones que marcan la diferencia.'.",
  textoBoton: '¿Hablamos?',
  enlaceBoton: 'https://wa.me/541124970311'
};

// --- Flujo de Trabajo ---
export const DatosSeccionFlujos01 = {
  tituloSeccion: "Título del Flujo", // Debe ser claro y general. Ejemplo: "Nuestro Proceso", "Cómo Trabajamos".

  etapas: [
    {
      icono: "", 
      titulo: "Paso 1", // Nombre corto y directo. Ejemplo: "Inicio", "Consulta".
      descripcion: "Descripción breve del primer paso en el proceso."
    },
    {
      icono: "MdSend",
      titulo: "Paso 2", // Describe la acción clave de esta etapa. Ejemplo: "Planificación", "Cotización".
      descripcion: "Explica cómo proceder en esta fase de manera concisa."
    },
    {
      icono: "MdBuild",
      titulo: "Paso 3", // Nombre claro de la actividad principal. Ejemplo: "Ejecución", "Desarrollo".
      descripcion: "Describe qué ocurre en esta etapa y cómo se avanza."
    },
    {
      icono: "MdCheckCircle",
      titulo: "Final", // Indica que es la última fase. Ejemplo: "Entrega", "Cierre".
      descripcion: "Explica el resultado final del proceso o flujo de trabajo."
    }
  ]
};

// --- Footer ---
export const DatosFooter = {
  contacto: {
    telefono: "+54 9 11 2345-6789",
    email: "contacto@misitio.com",
    direccion: "Av. Siempre Viva 123, CABA"
  },
  enlacesRapidos: [
    { texto: "Productos", url: "/productos" },
    { texto: "Servicios", url: "/servicios" },
    { texto: "Sobre Nosotros", url: "/sobre-nosotros" },
    { texto: "Contacto", url: "/contacto" }
  ],
  redesSociales: [
    {
      nombre: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=5491123456789",
      iconoClaro: iconoWhatsAppClaro,
      iconoOscuro: iconoWhatsAppOscuro
    },
    {
      nombre: "Correo",
      url: "mailito:contacto@misitio.com",
      iconoClaro: iconoCorreoClaro,
      iconoOscuro: iconoCorreoOscuro
    },
    {
      nombre: "instagram",
      url: "https://instagram.com",
      iconoClaro: iconoInstagramClaro,
      iconoOscuro: iconoInstagramOscuro
    },

  ],
  mensajeFooter: "WEB realizada por S7ian con pasión",
  derechos: "Mi Sitio - Todos los derechos reservados."
};

// --- Modal Contacto ---
export const DatosModalContacto = {
  titulo: "Contáctanos ahora DATO",
  descripcion: "Para cualquier consulta, no dudes en contactarnos directamente:",
  contactos: [
    {
      nombre: "whatsapp",
      texto: "WhatsApp",
      enlace: "https://wa.me/541124970311",
      iconoClaro: iconoWhatsAppClaro, // Ícono para modo claro
      iconoOscuro: iconoWhatsAppOscuro // Ícono para modo oscuro
    },
    {
      nombre: "llamado",
      texto: "Llamar",
      enlace: "tel:+541123456789",
      iconoClaro: iconoTelefonoClaro, // Ícono para modo claro
      iconoOscuro: iconoTelefonoOscuro // Ícono para modo oscuro
    },
    {
      nombre: "correo",
      texto: "Correo",
      enlace: "mailto:contacto@misitio.com",
      iconoClaro: iconoCorreoClaro, // Ícono para modo claro
      iconoOscuro: iconoCorreoOscuro // Ícono para modo oscuro
    },
    {
      nombre: "instagram",
      texto: "Instagram",
      enlace: "https://instagram.com/tu_usuario",
      iconoClaro: iconoInstagramClaro, // Ícono para modo claro
      iconoOscuro: iconoInstagramOscuro // Ícono para modo oscuro
    }
  ]
};

// --- Boton WhatsApp ---
export const datosBotonWhatsApp = {
  enlaceBase: "https://wa.me/541124970311",
  mensajeInicial: "Hola, te contacto desde la web, quisiera más información sobre...",
  textoAnimadoPC: "Hablamos?",
  textoAnimadoMovil: "",
  iconos: {
    claro: iconoWhatsAppOscuro,
    oscuro: iconoWhatsAppOscuro
  }
};

// --- Datos para el Comparador de Imágenes ---
export const DatosComparadorImagenes = {
  titulo: "Comparación Antes y Después",
  descripcion: "Desliza para ver el cambio antes y después de la renovación.",
  descripcion2: "ANTES ———————|——————— AHORA",
  imagenAntes: imagenAntes,
  imagenDespues: imagenDespues
};













// Sotano digital

// --- Config Modo Claro/Oscuro ---
export const configuracionModoClaroOscuro = {
  temaPredeterminado: 'oscuro'  // Puedes cambiar esto a 'oscuro' según necesites
};