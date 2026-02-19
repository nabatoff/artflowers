import { LanguageProvider } from '@/contexts/LanguageContext';
import HeaderBlack from '@/components/black/HeaderBlack';
import HeroBlack from '@/components/black/HeroBlack';
import AboutBlack from '@/components/black/AboutBlack';
import WhatWeOfferBlack from '@/components/black/WhatWeOfferBlack';
import WhyTrustUsBlack from '@/components/black/WhyTrustUsBlack';
import ContactsCitiesBlack from '@/components/black/ContactsCitiesBlack';
import CooperationFormBlack from '@/components/black/CooperationFormBlack';
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
          <WhatWeOfferBlack />
          <WhyTrustUsBlack />
          <ContactsCitiesBlack />
          <CooperationFormBlack />
        </main>
        <FooterBlack />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Black;
