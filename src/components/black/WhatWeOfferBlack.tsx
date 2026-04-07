const WhatWeOfferBlack = () => {
  return (
    <section id="offers" className="py-12 md:py-20 bg-[#003399]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            Мы предлагаем
          </h2>
        </div>
        <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20">
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-6">
            Полный цикл сотрудничества "под ключ" с лучшими условиями сотрудничества для цветочников и садоводов Казахстана.
          </p>

          <div className="space-y-3 text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            <p>* поможем осуществить выбор свежесрезанных цветов, растений (indoor/outdoor), луковичных и другого посадочного материала</p>
            <p>* поможем с выбором стендинга и страны - поставщика;</p>
            <p>* доставим цветы и растения в Ваш город</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="text-center bg-white/15 border border-white/25 rounded-md py-3 px-4 text-white font-semibold text-sm md:text-base">
              стабильные поставки
            </div>
            <div className="text-center bg-white/15 border border-white/25 rounded-md py-3 px-4 text-white font-semibold text-sm md:text-base">
              гибкие условия
            </div>
            <div className="text-center bg-white/15 border border-white/25 rounded-md py-3 px-4 text-white font-semibold text-sm md:text-base">
              лучший ассортимент
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferBlack;
