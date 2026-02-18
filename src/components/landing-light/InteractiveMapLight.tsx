import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mapImage from '@/assets/map-white.jpeg';

interface Country {
  name: string;
  x: number; // координата в пикселях
  y: number; // координата в пикселях
}

const countries: Country[] = [
  { name: 'Монголия', x: 199, y: 118 },
  { name: 'Узбекистан', x: 522, y: 128 },
  { name: 'Европа', x: 874, y: 131 },
  { name: 'Казахстан', x: 602, y: 336 },
  { name: 'Россия', x: 447, y: 533 },
  { name: 'Беларусь', x: 763, y: 526 },
  { name: 'Китай', x: 1045, y: 527 },
];

interface CountryMarkerProps {
  country: Country;
  index: number;
  onHover: (country: Country | null) => void;
  hoveredCountry: Country | null;
}

const CountryMarker = ({ country, index, onHover, hoveredCountry }: CountryMarkerProps) => {
  const isHovered = hoveredCountry?.name === country.name;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      style={{
        position: 'absolute',
        left: `${country.x}px`,
        top: `${country.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto',
      }}
      className="relative z-10"
      onMouseEnter={() => onHover(country)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Marker */}
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="relative cursor-pointer"
      >
        {/* Outer pulse ring */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.6, 0, 0.6] : 0.3,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-primary"
          style={{ width: '20px', height: '20px', margin: '-10px' }}
        />
        
        {/* Marker dot */}
        <div
          className={`rounded-full transition-colors duration-200 ${
            isHovered ? 'bg-primary' : 'bg-primary/80'
          }`}
          style={{ width: '12px', height: '12px', boxShadow: '0 0 10px rgba(192, 13, 30, 0.5)' }}
        />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 shadow-lg whitespace-nowrap z-20"
            style={{ pointerEvents: 'none' }}
          >
            <p className="text-sm font-medium text-gray-900">{country.name}</p>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-white border-r border-b border-gray-200 transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Исходные размеры изображения (нужно узнать реальный размер)
const ORIGINAL_WIDTH = 1400; // Предполагаемый исходный размер, нужно будет уточнить
const ORIGINAL_HEIGHT = 800;

const InteractiveMapLight = () => {
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (imageRef.current) {
        const img = imageRef.current;
        setImageSize({
          width: img.offsetWidth,
          height: img.offsetHeight,
          naturalWidth: img.naturalWidth || img.offsetWidth,
          naturalHeight: img.naturalHeight || img.offsetHeight,
        });
      }
    };

    if (imageRef.current?.complete) {
      updateSize();
    }

    const img = imageRef.current;
    if (img) {
      img.addEventListener('load', updateSize);
      window.addEventListener('resize', updateSize);
    }

    return () => {
      if (img) {
        img.removeEventListener('load', updateSize);
      }
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Вычисляем коэффициент масштабирования
  const scaleX = imageSize.naturalWidth > 0 ? imageSize.width / imageSize.naturalWidth : 1;
  const scaleY = imageSize.naturalHeight > 0 ? imageSize.height / imageSize.naturalHeight : 1;

  return (
    <div className="relative w-full">
      {/* Map background image */}
      <img
        ref={imageRef}
        src={mapImage}
        alt="Карта стран доставки"
        className="w-full h-auto"
        loading="lazy"
        style={{ display: 'block' }}
      />

    </div>
  );
};

export default InteractiveMapLight;
