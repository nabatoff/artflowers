import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-black-new.jpeg";
const heroBgMobile = "/hero-mobile-black.jpeg";
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
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        {/* Мобильное изображение (фоллбэк) */}
        <img
        src={heroBgMobile}
        alt="Art Time Logistics"
        className="w-full h-full object-cover md:hidden"
        style={{ objectPosition: 'center center' }} />

        {/* Десктопное видео */}
        <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        poster={heroBg}>

          <source src={HERO_VIDEO_SRC} type="video/webm" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 md:from-[#1a1a1a]/80 via-[#1a1a1a]/50 md:via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]/80 md:to-[#1a1a1a]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 md:py-16">
        <div className="max-w-xl">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-gray-400">Крупнейший</span>
            <br />
            <span className="text-white">поставщик</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            свежесрезанных цветов и растений в Казахстане 
с собственной транспортно-логистической 
компанией.
          </p>

          {/* CTA Button */}
          <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-[#0047BB] hover:bg-[#003a99] text-white uppercase tracking-wider text-sm md:text-base px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>;};export default HeroBlack;