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
      // Añadir la configuración de animación
      animation: {
        vibrate: 'vibrate 0.5s ease-in-out infinite'
      },

      keyframes: {
        multiJump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%, 90%': { transform: 'translateY(0)' },
          '20%, 80%': { transform: 'translateY(-10px)' },
          '30%, 70%': { transform: 'translateY(0)' },
          '40%, 60%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      // Añadir la configuración de animación
      animation: {
        multiJump: 'multiJump 1s ease-in-out infinite'
      }

    }
  },
  plugins: [], // Plugins de Tailwind si se requieren
};