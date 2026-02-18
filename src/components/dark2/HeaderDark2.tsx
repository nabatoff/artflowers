import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import logoLabel from '@/assets/logo-label.png';

const HeaderDark2 = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contacts', label: t.nav.contacts },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isScrolled 
            ? 'hsl(0 0% 8% / 0.95)' 
            : 'hsl(0 0% 8% / 0.8)',
        }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-md border-b border-border/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logoLabel} alt="ArtTime" className="h-8 w-auto" />
              <span className="text-xl font-display font-bold text-foreground">ArtTime</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 text-xs font-medium transition-colors ${
                      language === lang.code
                        ? 'text-primary'
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wide"
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
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-border/30">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left py-3 px-4 text-foreground hover:bg-muted/50 rounded-lg uppercase tracking-wide text-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="flex items-center gap-2 px-4 py-3">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`px-3 py-1.5 rounded text-sm font-medium ${
                            language === lang.code
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
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

export default HeaderDark2;
