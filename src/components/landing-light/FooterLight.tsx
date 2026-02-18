import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import logoArtflowers from '@/assets/logo-artflowers.png';

const FooterLight = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoArtflowers} alt="Art Flowers" className="h-6 w-auto invert" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <a href="tel:+77001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +7 (700) 123-45-67
              </a>
              <a href="mailto:info@arttime.kz" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@arttime.kz
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Казахстан, г. Алматы</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gray-900">{t.footer.services}</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.services.international.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.services.refrigerator.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.services.fullCycle.title}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.services.customs.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gray-900">{t.footer.company}</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">{t.footer.aboutUs}</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">{t.footer.careers}</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">{t.footer.news}</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-primary transition-colors">{t.footer.contacts}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gray-900">{t.footer.newsletter}</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="bg-white border-gray-200 text-gray-900 h-11"
              />
              <Button size="icon" className="h-11 w-11 shrink-0 bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-4">
          <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLight;
