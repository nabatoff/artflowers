import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoLabel from '@/assets/logo-label.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background pt-12 sm:pt-16 pb-6 sm:pb-8 safe-bottom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={logoLabel} alt="ArtTime" className="h-6 sm:h-8 w-auto" />
              <span className="text-lg sm:text-xl font-display font-bold">ArtTime</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-6">
              {t.footer.description}
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+77077515144" className="flex items-center gap-2 hover:text-primary transition-colors py-1 touch-manipulation">
                <Phone className="w-4 h-4" />
                +7 (707) 751-51-44
              </a>
              <a 
                href="https://wa.me/77077515144" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors py-1 touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a href="mailto:andreyyakovenko1603@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors py-1 touch-manipulation break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                andreyyakovenko1603@mail.ru
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Казахстан, г. Алматы</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">{t.footer.services}</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors py-1 block touch-manipulation">
                  {t.services.international.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors py-1 block touch-manipulation">
                  {t.services.refrigerator.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors py-1 block touch-manipulation">
                  {t.services.fullCycle.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors py-1 block touch-manipulation">
                  {t.services.customs.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg mb-4 sm:mb-6">{t.footer.company}</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors py-1 block touch-manipulation">{t.footer.aboutUs}</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-primary transition-colors py-1 block touch-manipulation">{t.footer.contacts}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border pt-6 sm:pt-8 gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">{t.footer.copyright}</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm py-1 touch-manipulation">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm py-1 touch-manipulation">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;