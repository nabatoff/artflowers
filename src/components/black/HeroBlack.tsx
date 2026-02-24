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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <img
          src={HERO_IMAGE_MOBILE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          style={{ objectPosition: "50% 30%" }}
        />
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          style={{ objectPosition: "center center" }}
        />
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
