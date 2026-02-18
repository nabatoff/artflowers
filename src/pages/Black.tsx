import { LanguageProvider } from '@/contexts/LanguageContext';
import HeaderBlack from '@/components/black/HeaderBlack';
import HeroBlack from '@/components/black/HeroBlack';
import ServicesBlack from '@/components/black/ServicesBlack';
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
      <div className="min-h-screen bg-[#1a1a1a]">
        <HeaderBlack />
        <main>
          <HeroBlack />
          <ServicesBlack />
          <ContactBlack />
        </main>
        <FooterBlack />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Black;
