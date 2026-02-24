import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/hero-desktop.png";
const HERO_IMAGE_MOBILE = "/hero-mobile.png";

const HeroBlack = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100dvh] md:h-[calc(100vh+4rem+4px)] -mt-14 md:-mt-16 flex items-center overflow-hidden">
      {/* Background — адаптивное фото по брейкпоинтам */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(min-width: 768px)"
            srcSet={HERO_IMAGE}
          />
          <img
            src={HERO_IMAGE_MOBILE}
            alt=""
            className="h-full w-full object-cover object-[50%_30%] md:object-center"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-2xl flex flex-col text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
          <span className="block">Крупнейший</span>
          <span className="block mt-1 md:mt-2">поставщик</span>
        </h1>

        <p className="text-white/90 text-sm sm:text-base md:text-xl mt-4 md:mt-6 mb-6 md:mb-10 leading-relaxed max-w-lg">
          <span className="block">свежесрезанных цветов и растений в Казахстане</span>
          <span className="block mt-1">с собственной транспортно-логистической компанией.</span>
        </p>

        <Button
          onClick={() => scrollToSection("cooperation")}
          size="lg"
          className="bg-[#0047BB] hover:bg-[#003a99] text-white font-semibold uppercase tracking-wider text-sm md:text-base px-8 md:px-10 py-6 md:py-7 rounded-lg w-fit"
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default HeroBlack;
