import { LanguageProvider } from '@/contexts/LanguageContext';
import HeaderBlack from '@/components/black/HeaderBlack';
import HeroBlack from '@/components/black/HeroBlack';
import AboutBlack from '@/components/black/AboutBlack';
import ContactBlack from '@/components/black/ContactBlack';
import FooterBlack from '@/components/black/FooterBlack';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

const Black = () => {
  return (
    <LanguageProvider>
      <SEO 
        title="Art Time Logistics - Mastering the Art of Logistics"
        description="Your Global Shipments, Perfected. Professional logistics services including air freight, ocean cargo, and road transport."
        canonical="/"
      />
      <div className="min-h-screen bg-white">
        <HeaderBlack />
        <main>
          <HeroBlack />
          <AboutBlack />
          <ContactBlack />
        </main>
        <FooterBlack />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Black;
