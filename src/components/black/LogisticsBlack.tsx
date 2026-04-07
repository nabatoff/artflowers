import { useLanguage } from '@/contexts/LanguageContext';

const LogisticsBlack = () => {
  const { t } = useLanguage();

  return (
    <section id="logistics" className="bg-[#003399] py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="inline-block border-b-2 border-white/40 pb-2 text-2xl font-bold uppercase tracking-wide text-white md:text-3xl lg:text-4xl">
            {t.af.logistics.title}
          </h2>
        </div>

        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
          {t.af.logistics.body}
        </p>
      </div>
    </section>
  );
};

export default LogisticsBlack;
