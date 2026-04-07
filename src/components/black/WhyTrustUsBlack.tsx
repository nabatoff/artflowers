const WhyTrustUsBlack = () => {
  const stats = [
    { value: "15+", label: "собственных машин" },
    { value: "12+", label: "представительств по Казахстану" },
    { value: "8+", label: "стран поставок" },
    { value: "500+", label: "тонн цветов в год" },
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 bg-[#0047BB]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            Почему нам доверяют
          </h2>
        </div>
        <p className="text-white/90 text-center text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Собственный автопарк, представительства по всей стране и прямые поставки из ведущих цветоводческих регионов мира — мы контролируем каждый этап от среза до вашей двери.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                {item.value}
              </div>
              <div className="text-white/90 text-lg md:text-xl lg:text-2xl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsBlack;
