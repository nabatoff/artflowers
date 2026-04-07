import { useLanguage } from '@/contexts/LanguageContext';

const AboutBlack = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#0047BB] py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="rounded-xl border border-white/20 bg-white/10 p-6 md:p-8 lg:p-10">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="inline-block border-b-2 border-white/40 pb-2 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
              {t.af.about.title}
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-left text-lg leading-relaxed text-white/90 md:space-y-8 md:text-xl md:text-justify lg:text-2xl">
            <p>{t.af.about.p1}</p>
            <p>{t.af.about.p2}</p>
            <p>{t.af.about.p3}</p>
            <p>{t.af.about.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlack;
