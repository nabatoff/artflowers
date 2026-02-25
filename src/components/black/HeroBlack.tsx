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
    <section className="relative h-[100dvh] md:h-[calc(100vh+4rem+2rem)] md:-mb-8 -mt-14 md:-mt-16 flex items-center overflow-hidden">
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

      {/* Content — bottom-left like reference */}
      <div className="absolute z-10 bottom-10 md:bottom-16 left-6 md:left-16 lg:left-24 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
          Крупнейший поставщик
        </h1>

        <p className="text-white/80 text-base sm:text-lg md:text-2xl mt-3 md:mt-4 leading-relaxed">
          <span className="block">свежесрезанных цветов и растений в Казахстане</span>
          <span className="block">с собственной транспортно-логистической компанией</span>
        </p>
      </div>
    </section>
  );
};

export default HeroBlack;
