import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import HeaderBlack from '@/components/black/HeaderBlack';
import HeroBlack from '@/components/black/HeroBlack';
import AboutBlack from '@/components/black/AboutBlack';
import WhatWeOfferBlack from '@/components/black/WhatWeOfferBlack';
import WhyTrustUsBlack from '@/components/black/WhyTrustUsBlack';
import LogisticsBlack from '@/components/black/LogisticsBlack';
import ContactsCitiesBlack from '@/components/black/ContactsCitiesBlack';
import CooperationFormBlack from '@/components/black/CooperationFormBlack';
import FooterBlack from '@/components/black/FooterBlack';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

const BlackContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={t.af.seo.title}
        description={t.af.seo.description}
        keywords={t.af.seo.keywords}
        ogImageAlt={t.af.seo.ogImageAlt}
        ogLocale={t.af.seo.ogLocale}
        canonical="/"
      />
      <div className="min-h-screen bg-[#0047BB]">
        <HeaderBlack />
        <main className="pt-14 md:pt-16">
          <HeroBlack />
          <AboutBlack />
          <WhatWeOfferBlack />
          <WhyTrustUsBlack />
          <LogisticsBlack />
          <ContactsCitiesBlack />
          <CooperationFormBlack />
        </main>
        <FooterBlack />
        <ScrollToTop />
      </div>
    </>
  );
};

const Black = () => {
  return (
    <LanguageProvider>
      <BlackContent />
    </LanguageProvider>
  );
};

export default Black;
