import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import logoArtflowers from '@/assets/logo-artflowers-blue.png';

const HeaderBlack = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'О КОМПАНИИ' },
    { id: 'offers', label: 'ЧТО ПРЕДЛАГАЕМ' },
    { id: 'why-us', label: 'ПОЧЕМУ МЫ' },
    { id: 'contacts', label: 'КОНТАКТЫ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoArtflowers} alt="Art Flowers" className="h-10 md:h-12 lg:h-14" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="text-xs font-medium text-gray-700 hover:text-[#0047BB] transition-colors tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button with Popup */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#0047BB] hover:bg-[#003a99] text-white text-xs md:text-sm uppercase tracking-wider px-4 md:px-6 py-4 md:py-5">
                  Связаться
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-gray-200 text-gray-900 max-w-sm">
                <DialogHeader>
                  <DialogTitle className="text-gray-900 text-center text-xl">Свяжитесь с нами</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {/* Phones */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-[#0047BB]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0047BB]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Позвонить</p>
                      <a href="tel:+77077515144" className="text-gray-900 font-semibold hover:text-[#0047BB] transition-colors block">
                        +7 (707) 751-51-44
                      </a>
                      <a href="tel:+77715257082" className="text-gray-900 font-semibold hover:text-[#0047BB] transition-colors block">
                        +7 (771) 525-70-82
                      </a>
                    </div>
                  </div>
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/77077515144" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                      <p className="text-gray-900 font-semibold">Написать в WhatsApp</p>
                    </div>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-left py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2 mx-4">
                <a href="tel:+77077515144" className="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded-lg text-gray-900">
                  <Phone className="w-4 h-4 text-[#0047BB]" />
                  +7 (707) 751-51-44
                </a>
                <a href="tel:+77715257082" className="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded-lg text-gray-900">
                  <Phone className="w-4 h-4 text-[#0047BB]" />
                  +7 (771) 525-70-82
                </a>
                <a 
                  href="https://wa.me/77077515144" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 rounded-lg text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderBlack;