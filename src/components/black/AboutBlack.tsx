const AboutBlack = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0047BB] uppercase tracking-wide pb-2 border-b-2 border-[#0047BB]/40 inline-block">
            О компании
          </h2>
        </div>

        {/* Text Content */}
        <div className="space-y-5 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed text-center">
          <p>
            <span className="font-semibold text-[#0047BB]">ArtFlowers</span> — крупнейший поставщик свежесрезанных цветов
            и indoor/outdoor растений в Казахстане с собственной транспортно-логистической компанией.
          </p>
          <p>
            Уже <span className="font-semibold text-[#0047BB]">17 лет</span> мы на рынке. Мы поставляем людям свежесть
            и красоту в виде большого ассортимента качественных цветов.
          </p>
          <p>
            С годами наша компания стала ключевым игроком в цветочной индустрии, устанавливая прочные партнёрства
            с крупнейшими поставщиками цветов из{" "}
            <span className="font-semibold text-gray-900">
              Эквадора, Китая, Кении, Израиля, Малайзии, Нидерландов, Колумбии
            </span>{" "}
            и других стран.
          </p>
          <p>
            Эти партнёрства обеспечивают нам доступ к широкому ассортименту высококачественных цветов и растений.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBlack;
