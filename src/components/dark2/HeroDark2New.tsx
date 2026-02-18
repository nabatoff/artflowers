import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg-port.jpeg';

const HeroDark2New = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="ArtTime logistics"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
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
            <p className="text-muted-foreground text-base md:text-lg mb-4 font-medium uppercase tracking-wide">
              Транспортно-логистическая компания
            </p>

            {/* Main Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-foreground">{t.hero.slogan}</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contacts')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wide px-8 glow-primary"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.contactUs}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-border hover:bg-muted uppercase tracking-wide px-8"
              >
                {t.nav.services}
              </Button>
            </div>
          </motion.div>

          {/* Right side - empty for background visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroDark2New;
