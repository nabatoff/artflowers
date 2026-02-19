import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noIndex?: boolean;
}

const SITE_URL = 'https://artflowers.lovable.app';

const SEO = ({
  title = 'ArtFlowers — Крупнейший поставщик цветов в Казахстане',
  description = 'ArtFlowers — крупнейший поставщик свежесрезанных цветов и растений в Казахстане. 17 лет на рынке, прямые поставки из Эквадора, Кении, Нидерландов и других стран.',
  keywords = 'цветы, свежесрезанные цветы, растения, поставщик цветов, оптовые цветы, Казахстан, ArtFlowers, indoor растения, outdoor растения, цветочная логистика',
  ogImage = '/og-image.png',
  ogType = 'website',
  canonical,
  noIndex = false,
}: SEOProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
    const currentPath = window.location.pathname;
    const canonicalUrl = canonical 
      ? `${SITE_URL}${canonical}` 
      : `${SITE_URL}${currentPath}`;

    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.querySelector(selector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Robots meta tag
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'ArtFlowers');

    // Geo tags for Kazakhstan
    updateMetaTag('geo.region', 'KZ');
    updateMetaTag('geo.placename', 'Kazakhstan');
    updateMetaTag('geo.position', '51.1605;71.4704');
    updateMetaTag('ICBM', '51.1605, 71.4704');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullOgImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'ArtFlowers — Поставщик цветов в Казахстане', true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:site_name', 'ArtFlowers', true);
    updateMetaTag('og:locale', language === 'en' ? 'en_US' : language === 'kz' ? 'kk_KZ' : 'ru_RU', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullOgImage);

    // Canonical link
    updateLinkTag('canonical', canonicalUrl);

    // Hreflang links for multilingual SEO
    const basePath = currentPath.replace(/\?.*$/, '');
    updateLinkTag('alternate', `${SITE_URL}${basePath}`, 'ru');
    updateLinkTag('alternate', `${SITE_URL}${basePath}?lang=en`, 'en');
    updateLinkTag('alternate', `${SITE_URL}${basePath}?lang=kz`, 'kk');
    updateLinkTag('alternate', `${SITE_URL}${basePath}`, 'x-default');

  }, [title, description, keywords, ogImage, ogType, canonical, noIndex, language]);

  return null;
};

export default SEO;
