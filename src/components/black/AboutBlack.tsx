const AboutBlack = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#0047BB]">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            О компании
          </h2>
        </div>

        <div className="w-full max-w-3xl mx-auto space-y-6 md:space-y-8 text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
          <p>
            <span className="font-semibold text-white">ArtFlowers</span> — крупнейший поставщик свежесрезанных цветов
            и indoor/outdoor растений в Казахстане с собственной транспортно-логистической компанией.
          </p>
          <p>
            <span className="font-semibold text-white">Более 17 лет</span> мы поставляем людям свежесть и красоту в виде
            большого ассортимента качественных цветов и растений.
          </p>
          <p>
            С годами наша компания стала ключевым игроком в цветочной индустрии, устанавливая прочные партнёрства
            с крупнейшими производителями{" "}
            <span className="font-semibold text-white">
              Нидерландов, Китая, Эквадора, Кении, Колумбии, Малайзии
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
