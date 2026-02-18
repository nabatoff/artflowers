import { FileText, Rocket, UserCheck, Thermometer } from "lucide-react";
import logoArtflowers from "@/assets/logo-artflowers.png";
const ServicesBlack = () => {
  const services = [
    {
      icon: FileText,
      title: "Полный пакет документов",
      description: "включая",
      highlight: "НДС",
    },
    {
      icon: Rocket,
      title: "Скорость перевозок",
      description: "на маршруте следования",
      highlight: "экипаж-2 водителя",
    },
    {
      icon: UserCheck,
      title: "Индивидуальный менеджер",
      description: "ведение клиента",
      highlight: "под ключ",
    },
    {
      icon: Thermometer,
      title: "2х режимные рефрижераторы",
      description: "одним и тем же рейсом можем доставить вам",
      highlight: "плюсовой и минусовой товар",
    },
  ];
  return (
    <section id="services" className="py-12 md:py-16 bg-[#2f2f2f]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12">
          {/* Logo like header */}
          <div className="flex items-center">
            <img src={logoArtflowers} alt="Art Flowers" className="h-10 md:h-12 lg:h-14" />
          </div>

          {/* Dash */}
          <span className="text-gray-400 text-lg md:text-xl lg:text-2xl font-light hidden md:block">—</span>

          {/* Tagline */}
          <h2 className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl text-center uppercase tracking-wider font-bold px-2">
            Эксперт по перевозке скоропортящихся грузов
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#383838] border border-gray-600 rounded-lg p-6 md:p-8 hover:border-[#c41e3a]/50 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-3 md:mb-4 flex justify-center">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-[#c41e3a]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wide text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs md:text-sm text-center mb-3 md:mb-4">{service.description}</p>
              {service.highlight && (
                <div className="flex justify-center mt-auto">
                  <span className="inline-flex items-center justify-center bg-black border border-gray-600 rounded-lg px-5 py-4 w-full max-w-[300px] md:max-w-[340px] min-h-[110px] md:min-h-[140px]">
                    <p className="text-[#ff0033] font-bold text-base md:text-lg lg:text-xl uppercase tracking-wide text-center leading-tight break-words px-2">
                      {service.highlight}
                    </p>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesBlack;
