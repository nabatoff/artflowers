import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/hero.png";
const HERO_IMAGE_MOBILE = "/hero-mobile.png";

const HeroBlack = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[calc(100dvh+3.5rem+3rem)] md:h-[calc(100vh+4rem+2rem)] -mb-8 md:-mb-8 -mt-14 md:-mt-16 flex items-center overflow-hidden border-0">
      <div className="absolute inset-0 bg-[#0a0f1a] top-0 bottom-0 left-[-2px] right-[-2px] w-[calc(100%+4px)] max-w-none">
        <picture className="absolute inset-0 block h-full w-full overflow-hidden">
          <source media="(min-width: 768px)" srcSet={HERO_IMAGE} />
          <img
            src={HERO_IMAGE_MOBILE}
            alt=""
            className="h-full w-full object-cover object-bottom md:object-center scale-95 md:scale-100 origin-center"
          />
        </picture>
        {/* Затемнение слева для читаемости текста */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 md:w-2/5 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(10,15,26,0.9) 0%, rgba(10,15,26,0.3) 60%, transparent 100%)"
          }}
        />
      </div>

      {/* Content — bottom-left like reference */}
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-6 md:left-16 lg:left-24 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
          Крупнейший
          <br />поставщик
        </h1>

        <p className="text-white/80 text-base sm:text-lg md:text-2xl mt-3 md:mt-4 leading-relaxed">
          <span className="block">свежесрезанных цветов и растений в Казахстане</span>
          <span className="block">с собственной транспортно-логистической компанией</span>
        </p>

        <Button
          onClick={() => scrollToSection("cooperation")}
          size="lg"
          className="bg-[#0047BB] hover:bg-[#003a99] text-white font-semibold uppercase tracking-wider text-sm md:text-base px-8 md:px-10 py-6 md:py-7 rounded-lg w-fit mt-5 md:mt-8"
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};

export default HeroBlack;
