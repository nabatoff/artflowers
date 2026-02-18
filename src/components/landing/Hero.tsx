import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logoArtflowers from '@/assets/logo-artflowers.png';

const HERO_VIDEO_SRC = '/Video-Project-1.webm';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-end justify-center overflow-hidden pt-32 sm:pt-40 md:pt-56 lg:pt-64">
      {/* Background Video - Truck prominently visible */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/webm" />
        </video>
        {/* Red glow overlay at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />
        {/* Dark gradient at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content - Centered at bottom */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-16 lg:pb-28 safe-bottom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Subtitle */}
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 px-2">
            Транспортно-логистическая компания
          </p>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <img src={logoArtflowers} alt="Art Flowers" className="h-8 sm:h-10 md:h-14 w-auto" />
          </motion.div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-6 sm:mb-8 px-2"
          >
            {t.hero.slogan}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center px-4"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacts')}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 glow-primary w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t.hero.contactUs}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
