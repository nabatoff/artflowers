const LogisticsBlack = () => {
  return (
    <section id="logistics" className="py-12 md:py-20 bg-[#003399]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            Лучшие условия по авиа и автологистике
          </h2>
        </div>

        <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20">
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
            Компания artflowers имеет собственную транспортную компанию, осуществляющую доставку и
            перевозки товара наших клиентов с соблюдением графика поставок и всеми необходимыми нормами
            - от документального сопровождения до точного соблюдения температурного режима.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden border border-white/20">
            <img
              src="/logistics-air-auto-artflowers.png"
              alt="Авиа и автологистика ArtFlowers"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsBlack;

