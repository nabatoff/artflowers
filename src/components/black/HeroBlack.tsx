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
  return <section className="relative h-screen md:min-h-screen flex items-center overflow-hidden pt-0 md:pt-16">
      {/* Background Video — мобильная (уменьшено, без полос) и десктопная версия */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-contain object-center md:object-cover"
          style={{ objectPosition: '55% center' }}
        >
          <source src={HERO_VIDEO} type="video/webm" />
        </video>
        {/* Тёмный оверлей для читаемости текста */}
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