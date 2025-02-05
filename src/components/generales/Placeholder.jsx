import React from 'react';
import { MdImage } from 'react-icons/md';

const Placeholder = ({
  type = 'default',
  className = '',
  style = {},
  lineas = 3,
  iconSize = '3rem',
  iconPosition = 'center', // Permite ajustar la posición del icono
  width = '100%',
  height = '100%'
}) => {
  switch (type) {
    case 'image': {
      // Clases para alinear el ícono dinámicamente
      const iconAlignment = {
        center: 'items-center justify-center',
        top: 'items-start justify-center pt-4',
        bottom: 'items-end justify-center pb-4',
        left: 'items-center justify-start pl-4',
        right: 'items-center justify-end pr-4'
      }[iconPosition] || 'items-center justify-center';

      return (
        <div
          style={{ width, height, ...style }}
          className={`relative bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md flex ${iconAlignment} ${className}`}
        >
          <MdImage
            className="text-gray-500 dark:text-gray-400 opacity-50"
            style={{ fontSize: iconSize }}
          />
        </div>
      );
    }

    case 'text': {
      const lines = Array.from({ length: lineas }).map((_, i) => {
        const margen = i < lineas - 1 ? 'mb-2' : '';
        const ancho = ['w-3/4', 'w-full', 'w-5/6', 'w-2/3', 'w-4/5', 'w-1/2'][i % 6];

        return (
          <span
            key={i}
            className={`block bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md ${ancho} ${margen} ${className}`}
            style={{ height: '1em', ...style }}
          />
        );
      });
      return <>{lines}</>;
    }

    default:
      return (
        <div
          style={{ width, height, ...style }}
          className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md flex items-center justify-center ${className}`}
        />
      );
  }
};

export default Placeholder;
