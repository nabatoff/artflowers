import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import logoArtflowers from '@/assets/logo-artflowers-blue.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import type { Language } from '@/lib/i18n';

const LangButton = ({ code, label }: { code: Language; label: string }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      type="button"
      onClick={() => setLanguage(code)}
      className={cn(
        'min-w-[2.25rem] rounded px-2 py-1 text-xs font-bold uppercase tracking-wide transition-colors',
        language === code
          ? 'bg-white text-[#0047BB]'
          : 'text-white/90 hover:bg-white/15'
      )}
      aria-pressed={language === code}
    >
      {label}
    </button>
  );
};

const HeaderBlack = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, openLanguagePicker, language } = useLanguage();
  const currentLangLabel =
    language === 'ru' ? t.af.lang.ru : language === 'kz' ? t.af.lang.kz : t.af.lang.en;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: t.af.nav.about },
    { id: 'offers', label: t.af.nav.offers },
    { id: 'why-us', label: t.af.nav.whyUs },
    { id: 'contacts', label: t.af.nav.contacts },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0047BB]/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-2 md:h-16">
          <div className="flex min-w-0 flex-1 items-center md:flex-none">
            <img
              src={logoArtflowers}
              alt="Art Flowers"
              className="h-8 md:h-10 lg:h-11 brightness-0 invert"
            />
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-medium tracking-wider text-white transition-colors hover:text-white/70"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div
              className="flex items-center gap-0.5 rounded-md border border-white/30 bg-white/10 p-0.5"
              role="group"
              aria-label="Language"
            >
              <LangButton code="ru" label={t.af.lang.ru} />
              <LangButton code="kz" label={t.af.lang.kz} />
              <LangButton code="en" label={t.af.lang.en} />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="!bg-white !text-[#0047BB] border-2 border-white px-4 py-4 text-xs font-bold uppercase tracking-wider hover:!bg-white hover:!text-[#0047BB] active:!bg-white md:px-6 md:py-5 md:text-sm"
                >
                  {t.af.header.contact}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm border-gray-200 bg-white text-gray-900">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl text-gray-900">
                    {t.af.header.contactUsTitle}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0047BB]/10">
                      <Phone className="h-6 w-6 text-[#0047BB]" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                        {t.af.header.call}
                      </p>
                      <a
                        href="tel:+77077515144"
                        className="block font-semibold text-gray-900 hover:text-[#0047BB] transition-colors"
                      >
                        +7 (707) 751-51-44
                      </a>
                      <a
                        href="tel:+77715257082"
                        className="block font-semibold text-gray-900 hover:text-[#0047BB] transition-colors"
                      >
                        +7 (771) 525-70-82
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/77077515144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">WhatsApp</p>
                      <p className="font-semibold text-gray-900">{t.af.header.writeWhatsapp}</p>
                    </div>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => openLanguagePicker()}
              className="flex items-center gap-1.5 rounded-lg border border-white/35 bg-white/10 px-2.5 py-2 text-white transition-colors hover:bg-white/20"
              aria-label={t.af.header.langButtonAria}
            >
              <Languages className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
              <span className="text-xs font-bold uppercase tracking-wide">{currentLangLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-white"
              aria-expanded={isMenuOpen}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-lg px-4 py-3 text-left text-sm text-white hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderBlack;
