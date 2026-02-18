import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logoArtflowers from '@/assets/logo-artflowers.png';

const HERO_VIDEO_SRC = '/Video-Project-1.webm';

const HeroLight = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-primary/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-40 left-32 w-96 h-96 rounded-full border-2 border-primary/15"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full border-2 border-primary/20"
        />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Company Type */}
            <p className="text-gray-600 text-base md:text-lg mb-4 font-medium">
              Транспортно-логистическая компания
            </p>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src={logoArtflowers} alt="Art Flowers" className="h-8 md:h-10 w-auto invert" />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6"
            >
              {t.hero.slogan}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.contactUs}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="relative flex justify-center lg:justify-end items-center overflow-hidden rounded-2xl p-4 w-full aspect-video lg:aspect-auto lg:h-[70vh]"
            style={{ perspective: '1000px' }}
          >
            <motion.video
              src={HERO_VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl relative z-10 shadow-xl"
              style={{ filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.1))' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLight;
