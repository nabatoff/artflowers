import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HERO_IMAGE = '/hero.png';
const HERO_IMAGE_MOBILE = '/hero-mobile.png';

const HeroBlack = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative -mb-8 -mt-14 flex h-[calc(100dvh+3.5rem+3rem)] items-center overflow-hidden border-0 md:-mb-8 md:-mt-16 md:h-[calc(100vh+4rem+2rem)]">
      <div className="absolute inset-0 left-[-2px] right-[-2px] top-0 w-[calc(100%+4px)] max-w-none bg-[#0a0f1a]">
        <picture className="absolute inset-0 block h-full w-full">
          <source media="(min-width: 768px)" srcSet={HERO_IMAGE} />
          <img
            src={HERO_IMAGE_MOBILE}
            alt=""
            className="h-full w-full object-cover object-[50%_52%] md:object-center"
          />
        </picture>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 md:w-2/5"
          style={{
            background:
              'linear-gradient(to right, rgba(10,15,26,0.9) 0%, rgba(10,15,26,0.3) 60%, transparent 100%)',
          }}
        />
      </div>

      <div className="absolute left-6 top-[66%] z-10 max-w-3xl -translate-y-1/2 md:left-16 md:top-1/2 lg:left-24">
        <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {t.af.hero.line1}
          <br />
          {t.af.hero.line2}
        </h1>

        <p className="mt-3 max-w-[24ch] text-left text-lg leading-relaxed text-white/85 sm:text-xl md:mt-4 md:max-w-2xl md:text-2xl">
          {t.af.hero.subtitle}
        </p>

        <Button
          type="button"
          onClick={() => scrollToSection('cooperation')}
          size="lg"
          className="mt-5 w-fit rounded-lg bg-[#0047BB] px-8 py-6 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#003a99] md:mt-8 md:px-10 md:py-7 md:text-base"
        >
          {t.af.hero.cta}
        </Button>
      </div>
    </section>
  );
};

export default HeroBlack;
