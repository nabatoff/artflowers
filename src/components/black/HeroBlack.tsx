import { Button } from "@/components/ui/button";

const HERO_VIDEO_SRC = "/Video-Project-1.webm";

const HeroBlack = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative h-screen md:min-h-screen flex items-center overflow-hidden pt-0 md:pt-16">
      {/* Background Video — мобильная и десктопная версия */}
      <div className="absolute inset-0 bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full min-w-full min-h-full object-cover scale-[1.2] translate-x-[6%] md:scale-100 md:translate-x-0 md:min-w-0 md:min-h-0"
          style={{ objectPosition: '55% center' }}
        >
          <source src={HERO_VIDEO_SRC} type="video/webm" />
        </video>
        {/* Тёмный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 md:from-black/60 via-black/40 md:via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 md:to-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 md:py-16">
        <div className="max-w-xl">
          {/* Main Headline */}
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
            Крупнейший
            <br />
            поставщик
          </h1>

          {/* Subtitle */}
          <p className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            свежесрезанных цветов и растений в Казахстане
            <br />
            с собственной транспортно-логистической компанией.
          </p>

          {/* CTA Button */}
          <Button onClick={() => scrollToSection("cooperation")} size="lg" className="bg-[#0047BB] hover:bg-[#003a99] text-white uppercase tracking-wider text-sm md:text-base px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>;};export default HeroBlack;