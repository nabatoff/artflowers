import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import logoLabel from '@/assets/logo-label.png';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определение активной секции
      const sections = ['services', 'about', 'contacts'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Проверка при загрузке
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'kz', label: 'KZ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 mx-auto max-w-7xl safe-top">
      <motion.div
        initial={false}
        animate={{
          boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: isScrolled ? 'rgba(var(--background), 0.95)' : 'rgba(var(--background), 0.8)',
        }}
        transition={{ duration: 0.3 }}
        className="rounded-xl sm:rounded-2xl border border-border/50 backdrop-blur-xl"
      >
        <div className="px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logoLabel} alt="ArtTime" className="h-6 sm:h-8 w-auto" />
              <span className="text-lg sm:text-xl font-display font-bold text-foreground">ArtTime</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`relative transition-colors font-medium text-sm ${
                  activeSection === 'services'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t.nav.services}
                {activeSection === 'services' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`relative transition-colors font-medium text-sm ${
                  activeSection === 'about'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t.nav.about}
                {activeSection === 'about' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`relative transition-colors font-medium text-sm ${
                  activeSection === 'contacts'
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t.nav.contacts}
                {activeSection === 'contacts' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button 
                onClick={() => scrollToSection('contacts')}
                size="sm"
                className="glow-primary-sm"
              >
                {t.nav.getQuote}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-6 border-t border-border/30 bg-background rounded-b-xl">
                  <nav className="flex flex-col gap-1">
                    {/* Navigation Links */}
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                      onClick={() => scrollToSection('services')}
                      className={`text-left transition-colors font-medium py-3 px-4 rounded-lg touch-manipulation ${
                        activeSection === 'services'
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted/50 active:bg-muted'
                      }`}
                    >
                      {t.nav.services}
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      onClick={() => scrollToSection('about')}
                      className={`text-left transition-colors font-medium py-3 px-4 rounded-lg touch-manipulation ${
                        activeSection === 'about'
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted/50 active:bg-muted'
                      }`}
                    >
                      {t.nav.about}
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      onClick={() => scrollToSection('contacts')}
                      className={`text-left transition-colors font-medium py-3 px-4 rounded-lg touch-manipulation ${
                        activeSection === 'contacts'
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted/50 active:bg-muted'
                      }`}
                    >
                      {t.nav.contacts}
                    </motion.button>

                    {/* Divider */}
                    <div className="h-px bg-border/50 my-3 mx-4" />
                    
                    {/* Language Switcher Mobile */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="px-4 py-2"
                    >
                      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Язык</p>
                      <div className="flex items-center gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all touch-manipulation ${
                              language === lang.code
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-muted/80 text-muted-foreground hover:bg-muted active:bg-muted/60'
                            }`}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      className="px-4 pt-3"
                    >
                      <Button 
                        onClick={() => scrollToSection('contacts')}
                        className="w-full h-12 text-base glow-primary touch-manipulation"
                      >
                        {t.nav.getQuote}
                      </Button>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
