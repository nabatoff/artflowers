import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import labelRed from '@/assets/label-red.png';
import logoBlack from '@/assets/logo-black-new.png';

const HeaderLight = () => {
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
    handleScroll();
    
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
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.div
        initial={false}
        animate={{
          boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
        }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-black/10 backdrop-blur-xl"
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={labelRed} alt="A" className="h-8 w-auto" />
              <img src={logoBlack} alt="ArtTime" className="h-5 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`relative transition-colors font-medium text-sm ${
                  activeSection === 'services'
                    ? 'text-black'
                    : 'text-black/70 hover:text-black'
                }`}
              >
                {t.nav.services}
                {activeSection === 'services' && (
                  <motion.div
                    layoutId="activeSectionLight"
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
                    ? 'text-black'
                    : 'text-black/70 hover:text-black'
                }`}
              >
                {t.nav.about}
                {activeSection === 'about' && (
                  <motion.div
                    layoutId="activeSectionLight"
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
                    ? 'text-black'
                    : 'text-black/70 hover:text-black'
                }`}
              >
                {t.nav.contacts}
                {activeSection === 'contacts' && (
                  <motion.div
                    layoutId="activeSectionLight"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1 bg-black/5 rounded-lg p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-primary text-white'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Button 
                onClick={() => scrollToSection('contacts')}
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(192,13,30,0.3)]"
              >
                {t.nav.getQuote}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black"
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
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-gray-200 backdrop-blur-sm bg-white/50">
                  <nav className="flex flex-col gap-3">
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      onClick={() => scrollToSection('services')}
                      className={`text-left transition-colors font-medium py-2 ${
                        activeSection === 'services'
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t.nav.services}
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      onClick={() => scrollToSection('about')}
                      className={`text-left transition-colors font-medium py-2 ${
                        activeSection === 'about'
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t.nav.about}
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => scrollToSection('contacts')}
                      className={`text-left transition-colors font-medium py-2 ${
                        activeSection === 'contacts'
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t.nav.contacts}
                    </motion.button>
                
                {/* Language Switcher Mobile */}
                <div className="flex items-center gap-2 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        language === lang.code
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <Button 
                        onClick={() => scrollToSection('contacts')}
                        className="mt-2 bg-primary hover:bg-primary/90"
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

export default HeaderLight;
