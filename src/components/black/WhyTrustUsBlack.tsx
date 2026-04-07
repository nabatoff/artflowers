import { useLanguage } from '@/contexts/LanguageContext';

const WhyTrustUsBlack = () => {
  const { t } = useLanguage();
  const stats = [
    { value: '15+', label: t.af.whyUs.statCountries },
    { value: '18', label: t.af.whyUs.statYears },
    { value: '3500+', label: t.af.whyUs.statTons },
    { value: '4', label: t.af.whyUs.statBranches },
    { value: '100+', label: t.af.whyUs.statStaff },
  ];

  return (
    <section id="why-us" className="bg-[#0047BB] py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="rounded-xl border border-white/20 bg-white/10 p-6 md:p-8 lg:p-10">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="inline-block border-b-2 border-white/40 pb-2 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
              {t.af.whyUs.title}
            </h2>
          </div>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-white/90 md:mb-12 md:text-xl lg:text-2xl">
            {t.af.whyUs.intro}
          </p>

          <div className="mx-auto mb-10 max-w-3xl md:mb-14">
            <div className="rounded-lg border border-white/25 bg-white/[0.12] px-5 py-4 text-center text-sm font-semibold uppercase leading-snug tracking-wider text-white md:text-base">
              {t.af.whyUs.guarantee}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mb-1 text-3xl font-bold text-white md:mb-2 md:text-4xl lg:text-5xl">
                  {item.value}
                </div>
                <div className="text-lg text-white/90 md:text-xl lg:text-2xl">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsBlack;
