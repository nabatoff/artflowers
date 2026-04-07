import { useLanguage } from '@/contexts/LanguageContext';

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.42l2.543 2.544 6.543-6.544a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatWeOfferBlack = () => {
  const { t } = useLanguage();
  const bullets = [t.af.whatWeOffer.bullet1, t.af.whatWeOffer.bullet2, t.af.whatWeOffer.bullet3];
  const tags = [t.af.whatWeOffer.tag1, t.af.whatWeOffer.tag2, t.af.whatWeOffer.tag3];

  return (
    <section id="offers" className="bg-[#003399] py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="inline-block border-b-2 border-white/40 pb-2 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
            {t.af.whatWeOffer.title}
          </h2>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-6 md:p-8">
          <p className="mb-6 text-center text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
            {t.af.whatWeOffer.intro}
          </p>

          <ul className="space-y-3 text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-emerald-300">
                  <CheckIcon />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="rounded-md border border-white/25 bg-white/15 py-3 px-4 text-center text-sm font-semibold text-white md:text-base"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferBlack;
