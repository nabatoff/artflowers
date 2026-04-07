const stats = [
  { value: "15+", label: "стран-партнёров" },
  { value: "18", label: "лет на рынке" },
  { value: "3500+", label: "тонн цветов каждый год" },
  { value: "4", label: "филиала в Казахстане" },
  { value: "100+", label: "сотрудников" },
];

const LogisticsBlack = () => {
  return (
    <section id="logistics" className="py-12 md:py-20 bg-[#003399]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="bg-white/10 rounded-xl p-6 md:p-8 lg:p-10 border border-white/20">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
              Лучшие условия по авиа и автологистике
            </h2>
          </div>

          <p className="text-white/90 text-center text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Компания ArtFlowers имеет собственную транспортную компанию, осуществляющую доставку и
            перевозки товара наших клиентов с соблюдением графика поставок и всеми необходимыми нормами
            — от документального сопровождения до точного соблюдения температурного режима.
          </p>

          <div className="max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="bg-white/[0.12] border border-white/25 rounded-lg px-4 py-4 md:px-6 md:py-4 text-center text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider leading-snug">
              Гарантируем стабильность поставок и соблюдение температурного режима
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-10">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {item.value}
                </div>
                <div className="text-white/90 text-base md:text-lg lg:text-xl">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/20">
            <img
              src="/logistics-air-auto-artflowers.png"
              alt="Авиа и автологистика ArtFlowers"
              className="w-full h-48 md:h-64 lg:h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsBlack;
