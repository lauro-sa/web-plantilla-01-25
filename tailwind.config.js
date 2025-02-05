module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        // Colores base para fondo
        'fondo': '#F5F5F5',
        'fondo-oscuro': '#121212',

        'fondo-secundario': '#EFEFEF',
        'fondo-secundario-oscuro': '#1E1E1E',

        // Colores base para texto
        'texto': '#333333',
        'texto-oscuro': '#E0E0E0',

        'texto-secundario': '#595959',
        'texto-secundario-oscuro': '#BDBDBD',

        // Colores de texto que no cambian con el tema
        'texto-invariable-claro': '#FFFFFF',
        'texto-invariable-oscuro': '#000000',

        // Colores de marca
        'marca-principal': '#206a5d',
        'marca-secundaria': '#81b214',

        // Colores para estados de UI
        'estado-alerta': '#E59849',
        'estado-exito': '#689D6A',
        'estado-error': '#CC444B',

        'estado-alerta-oscuro': '#F2B138',
        'estado-exito-oscuro': '#97A97C',
        'estado-error-oscuro': '#F47C7C',

        // Colores de texto sobre imágenes
        'texto-imagen-claro': 'rgba(255, 255, 255, 0.87)',
        'texto-imagen-oscuro': 'rgba(0, 0, 0, 0.87)',

        // WhatsApp colores
        'whatsapp': '#25D366',
        'whatsapp-dark': '#128C7E',

      },


      // Configuraciones de filtros de fondo y colores de fondo translúcidos
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
      backgroundColor: {
        'fondo-translucido': 'rgba(245, 245, 245, 0.5)',
        'oscuro-fondo-translucido': 'rgba(30, 30, 30, 0.5)',
      },

      // Configuración para propiedades de transición y animación
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke, box-shadow, transform',
        'transform': 'transform'
      },
      transitionDuration: {
        '300': '300ms'
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },

      // Animaciones personalizadas y sus keyframes MODAL
      animation: {
        fadeInModal: 'fadeInModal 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeInModal: {
          '0%': { opacity: '0', transform: 'scale(0.45)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },


      // Añadir keyframes para la animación de vibración WhatsApp
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' }
        }
      },
      // Configuración de animaciones
      animation: {
        fadeInModal: 'fadeInModal 0.5s ease-in-out forwards',
        btnAnimacionWhatsapp: 'btnAnimacionWhatsapp 1.5s ease-in-out'
      },

      // Keyframes de animaciones
      keyframes: {
        fadeInModal: {
          '0%': { opacity: '0', transform: 'scale(0.45)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        btnAnimacionWhatsapp: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
          '15%': { transform: 'translateY(-8px) scale(1.07)', opacity: 1 },
          '30%': { transform: 'translateY(4px) scale(0.98)', opacity: 1 },
          '50%': { transform: 'translateY(-6px) scale(1.03)', opacity: 1 },
          '70%': { transform: 'translateY(3px) scale(0.99)', opacity: 1 },
          '85%': { transform: 'translateY(-2px) scale(1.02)', opacity: 1 }
        },

        writeText: {
          '0%': { width: '0', opacity: 0 },
          '100%': { width: '100px', opacity: 1 } // Ajusta el ancho según necesites
        }
      }

    }
  },
  plugins: [], 
};