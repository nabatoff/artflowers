import { Flower2, Palette, Warehouse, Package } from "lucide-react";

const WhatWeOfferBlack = () => {
  const offers = [
    {
      icon: Flower2,
      title: "Цветочникам",
      description: "Свежесрезанные цветы и растения под заказ, стабильные поставки и гибкие условия.",
    },
    {
      icon: Palette,
      title: "Оформителям",
      description: "Широкий ассортимент для букетов, композиций и мероприятий любой сложности.",
    },
    {
      icon: Warehouse,
      title: "Мелкооптовым складам",
      description: "Регулярные поставки партиями, работа с документами и логистика под ключ.",
    },
    {
      icon: Package,
      title: "И другим партнёрам",
      description: "Индивидуальные условия для ритейла, студий и компаний по всей стране.",
    },
  ];

  return (
    <section id="offers" className="py-12 md:py-20 bg-[#003399]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            Что предлагаем
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {offers.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferBlack;
