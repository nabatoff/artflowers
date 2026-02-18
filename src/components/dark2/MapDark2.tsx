import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import mapImage from '@/assets/map-black.jpeg';

interface Country {
  name: { ru: string; en: string; kz: string };
  x: number;
  y: number;
}

const countries: Country[] = [
  { name: { ru: 'Монголия', en: 'Mongolia', kz: 'Моңғолия' }, x: 199, y: 118 },
  { name: { ru: 'Узбекистан', en: 'Uzbekistan', kz: 'Өзбекстан' }, x: 522, y: 128 },
  { name: { ru: 'Европа', en: 'Europe', kz: 'Еуропа' }, x: 874, y: 131 },
  { name: { ru: 'Казахстан', en: 'Kazakhstan', kz: 'Қазақстан' }, x: 602, y: 336 },
  { name: { ru: 'Россия', en: 'Russia', kz: 'Ресей' }, x: 447, y: 533 },
  { name: { ru: 'Беларусь', en: 'Belarus', kz: 'Беларусь' }, x: 763, y: 526 },
  { name: { ru: 'Китай', en: 'China', kz: 'Қытай' }, x: 1045, y: 527 },
];

interface CountryMarkerProps {
  country: Country;
  index: number;
  onHover: (country: Country | null) => void;
  hoveredCountry: Country | null;
  language: 'ru' | 'en' | 'kz';
  scale: { x: number; y: number };
}

const CountryMarker = ({ country, index, onHover, hoveredCountry, language, scale }: CountryMarkerProps) => {
  const isHovered = hoveredCountry?.name[language] === country.name[language];

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
        left: `${country.x * scale.x}px`,
        top: `${country.y * scale.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto',
      }}
      className="relative z-10"
      onMouseEnter={() => onHover(country)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.3 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative cursor-pointer"
      >
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
        
        <div
          className={`rounded-full transition-colors duration-200 ${
            isHovered ? 'bg-primary' : 'bg-primary/80'
          }`}
          style={{ width: '12px', height: '12px', boxShadow: '0 0 10px rgba(192, 13, 30, 0.5)' }}
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg whitespace-nowrap z-20"
          >
            <p className="text-sm font-medium text-foreground">{country.name[language]}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-card border-r border-b border-border transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MapDark2 = () => {
  const { language, t } = useLanguage();
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

  const scale = {
    x: imageSize.naturalWidth > 0 ? imageSize.width / imageSize.naturalWidth : 1,
    y: imageSize.naturalHeight > 0 ? imageSize.height / imageSize.naturalHeight : 1,
  };

  return (
    <section className="py-20 lg:py-28 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            {t.services.international.title}
          </h2>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-lg overflow-hidden border border-border"
        >
          <img
            ref={imageRef}
            src={mapImage}
            alt="Карта стран доставки"
            className="w-full h-auto"
            loading="lazy"
            style={{ display: 'block' }}
          />

          {/* Country Markers */}
          {imageSize.width > 0 && countries.map((country, index) => (
            <CountryMarker
              key={country.name.ru}
              country={country}
              index={index}
              onHover={setHoveredCountry}
              hoveredCountry={hoveredCountry}
              language={language}
              scale={scale}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MapDark2;
