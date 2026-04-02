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
        title="ArtFlowers — Крупнейший поставщик цветов в Казахстане"
        description="ArtFlowers — крупнейший поставщик свежесрезанных цветов и растений в Казахстане. 17 лет на рынке, прямые поставки из Эквадора, Кении, Нидерландов и других стран."
        canonical="/"
      />
      <div className="min-h-screen bg-[#0047BB]">
        <HeaderBlack />
        <main className="pt-14 md:pt-16">
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
