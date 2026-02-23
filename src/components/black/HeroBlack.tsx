import { Button } from "@/components/ui/button";

const HERO_VIDEO = "/hero-video.webm";

const HeroBlack = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative h-screen min-h-screen flex items-center overflow-hidden">
      {/* Background Video — на весь экран */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: '55% center' }}
        >
          <source src={HERO_VIDEO} type="video/webm" />
        </video>
        {/* Тёмный оверлей для читаемости текста */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 flex items-end md:items-center min-h-full w-full">
        <div
          className="min-w-0 w-full max-w-2xl pb-8 md:pb-0 flex flex-wrap text-left relative md:absolute md:left-[-212px] md:top-[200px] leading-[1.2] md:leading-[34px] text-3xl sm:text-4xl md:text-[70px] font-semibold break-words"
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
      </div>
    </section>;};export default HeroBlack;