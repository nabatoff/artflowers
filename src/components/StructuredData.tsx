import { useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://art-time.kz';

const StructuredData = () => {
  const { t, language } = useLanguage();

  // WebSite schema with search action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'ArtTime',
    url: SITE_URL,
    description: t.hero.subtitle,
    inLanguage: language === 'en' ? 'en-US' : language === 'kz' ? 'kk-KZ' : 'ru-RU',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'ArtTime',
    alternateName: ['Art-Time', 'АртТайм', 'Арт-Тайм'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/pwa-512x512.png`,
      width: 512,
      height: 512,
    },
    description: t.hero.subtitle,
    foundingDate: '2020',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.1605,
        longitude: 71.4704,
      },
      geoRadius: '5000 km',
    },
    serviceArea: [
      { '@type': 'Country', name: 'Kazakhstan' },
      { '@type': 'Country', name: 'Russia' },
      { '@type': 'Country', name: 'China' },
      { '@type': 'Country', name: 'Turkey' },
      { '@type': 'Country', name: 'Europe' },
    ],
    sameAs: [
      // Add social media links when available
    ],
  };

  // LocalBusiness schema for local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransportationBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'ArtTime',
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    description: t.hero.subtitle,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KZ',
      addressLocality: 'Astana',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1605,
      longitude: 71.4704,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    serviceType: 'Transportation and Logistics',
    name: language === 'en' ? 'International Freight Transportation' : language === 'kz' ? 'Халықаралық жүк тасымалы' : 'Международные грузоперевозки',
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'International',
    },
    description: t.services.subtitle,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: language === 'en' ? 'Home' : language === 'kz' ? 'Басты бет' : 'Главная',
        item: SITE_URL,
      },
    ],
  };

  // FAQ schema - common questions about logistics
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: language === 'ru' ? 'Какие страны охватывает ArtTime?' : 'Which countries does ArtTime cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'ru' 
            ? 'ArtTime осуществляет международные перевозки через более чем 12 стран, включая Казахстан, Россию, Китай, Турцию и страны Европы.'
            : 'ArtTime provides international transportation across more than 12 countries, including Kazakhstan, Russia, China, Turkey, and European countries.',
        },
      },
      {
        '@type': 'Question',
        name: language === 'ru' ? 'Есть ли у ArtTime собственный автопарк?' : 'Does ArtTime have its own fleet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'ru'
            ? 'Да, ArtTime располагает собственным автопарком современных рефрижераторов для перевозки грузов с температурным режимом.'
            : 'Yes, ArtTime has its own fleet of modern refrigerated trucks for temperature-controlled cargo transportation.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default StructuredData;
