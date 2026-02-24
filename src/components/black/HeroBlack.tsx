import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/hero.png";
const HERO_IMAGE_MOBILE = "/hero-mobile.png";

const HeroBlack = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-[130vh] flex items-center overflow-hidden">
      {/* Background — мобильное фото до md, десктопное с md */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <img
          src={HERO_IMAGE_MOBILE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
          style={{ objectPosition: "55% center" }}
        />
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
          style={{ objectPosition: "55% center" }}
        />
      </div>

      {/* Content — блок в левом верхнем углу, привязан к секции */}
      <div
        className="absolute left-4 top-20 lg:left-8 z-10 min-w-0 w-full max-w-2xl pb-8 flex flex-wrap text-left leading-[1.2] md:leading-[34px] text-3xl sm:text-4xl md:text-[70px] font-semibold break-words"
      >
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight break-words">
          <span className="block leading-tight md:leading-[60px]">Крупнейший</span>
          <span className="block mt-1 md:mt-2 shadow-none">поставщик</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/95 text-sm sm:text-base md:text-xl mt-4 md:mt-6 mb-6 md:mb-10 leading-relaxed max-w-lg break-words">
          <span className="block">свежесрезанных цветов и растений в Казахстане</span>
          <span className="block mt-1">с собственной транспортно-логистической компанией.</span>
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => scrollToSection("cooperation")}
          size="lg"
          className="bg-[#0047BB] hover:bg-[#003a99] text-white font-semibold uppercase tracking-wider text-sm md:text-base px-8 md:px-10 py-6 md:py-7 rounded-lg"
        >
          Оставить заявку
        </Button>
      </div>
    </section>;};export default HeroBlack;