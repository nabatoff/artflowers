import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import { Flower2, Palette, Warehouse, Users } from 'lucide-react';
import logoArtflowers from '@/assets/logo-artflowers-blue.png';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { LanguageProvider } from '@/contexts/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

/* ─── Navigation ─── */
const NavV2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'О компании' },
    { id: 'services', label: 'Что предлагаем' },
    { id: 'why', label: 'Почему мы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}
         style={{ background: scrolled ? 'rgba(0, 16, 77, 0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(59,91,219,0.2)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <img src={logoArtflowers} alt="ArtFlowers" className="h-9 lg:h-10 object-contain brightness-0 invert" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('cta')}
              className="text-white font-semibold text-sm px-6 py-2.5 rounded-full"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0033cc)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>
              Связаться
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg text-white">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
            className="lg:hidden rounded-2xl mb-4 p-6 space-y-4"
            style={{ background: 'rgba(0, 16, 77, 0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(59,91,219,0.2)' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-white/80 hover:text-white font-medium uppercase text-sm tracking-wider">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('cta')}
              className="block w-full text-center text-white font-semibold text-sm px-6 py-3 rounded-full"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0033cc)' }}>
              Связаться
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

/* ─── Hero ─── */
const HeroV2 = () => {
  const [heroBg, setHeroBg] = useState<string>('/hero.png');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setHeroBg(mq.matches ? '/hero-mobile.png' : '/hero.png');
    update();

    // Safari fallback
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  const stats = [
    { value: '15+', label: 'собственных машин' },
    { value: '12+', label: 'представительств' },
    { value: '500K+', label: 'тонн цветов в год' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-no-repeat bg-cover bg-top lg:bg-contain lg:bg-center"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundColor: '#00104d',
      }}
    >
      {/* Background decorative elements поверх фото */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(59,91,219,0.25) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,68,255,0.1)' }} />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,91,219,0.15)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)] py-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Крупнейший<br/>
              <span style={{ background: 'linear-gradient(135deg, #93c5fd, #c4b5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                поставщик
              </span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Свежесрезанных цветов и растений в Казахстане с собственной транспортно‑логистической компанией
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#cta"
                className="text-white font-bold text-base px-8 py-4 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0033cc)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>
                Оставить заявку
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about"
                className="text-white font-semibold text-base px-8 py-4 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all">
                О компании
              </a>
            </div>

            {/* статистику убрали по запросу */}
          </motion.div>
        </div>
      </div>

      {/* Полупрозрачный переход в следующую секцию */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,16,77,0) 0%, rgba(0,17,102,0.75) 55%, rgba(0,17,102,1) 100%)',
          }}
        />
      </div>
    </section>
  );
};

/* ─── About ─── */
const AboutV2 = () => {
  const countries = ['🇪🇨 Эквадор', '🇨🇳 Китай', '🇰🇪 Кения', '🇮🇱 Израиль', '🇲🇾 Малайзия', '🇳🇱 Нидерланды', '🇨🇴 Колумбия'];

  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: 'linear-gradient(180deg, #001166 0%, #0033cc 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-4">О компании</span>
          <h2 className="font-black text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ArtFlowers — ваш<br/>надёжный партнёр
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <img
                src="/Whisk_7dbf5cd6e86729088ba4e5b83f845e9cdr.png"
                alt="ArtFlowers"
                className="w-full h-80 lg:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,16,77,0.6), transparent)' }} />
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-2xl p-5 w-48 hidden lg:block"
                 style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 0 20px rgba(59,91,219,0.25)' }}>
              <p className="text-3xl font-black" style={{ fontFamily: 'Montserrat, sans-serif', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>17</p>
              <p className="text-white/60 text-sm mt-1">лет на рынке</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              <span className="text-white font-bold">ArtFlowers</span> — крупнейший поставщик свежесрезанных цветов и indoor/outdoor растений в Казахстане с собственной транспортно‑логистической компанией.
            </p>
            <p className="text-white/70 leading-relaxed">
              Уже <strong className="text-white">17 лет</strong> мы на рынке. Мы поставляем людям свежесть и красоту в виде большого ассортимента качественных цветов.
            </p>
            <p className="text-white/70 leading-relaxed">
              С годами наша компания стала ключевым игроком в цветочной индустрии, устанавливая прочные партнёрства с крупнейшими поставщиками цветов из <strong className="text-white">Эквадора, Китая, Кении, Израиля, Малайзии, Нидерландов, Колумбии</strong> и других стран.
            </p>

            <div className="pt-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Страны-поставщики</p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c, i) => (
                  <span key={i} className="bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/70">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Services ─── */
const ServicesV2 = () => {
  const offers = [
    {
      icon: Flower2,
      title: 'Цветочникам',
      description: 'Свежесрезанные цветы и растения под заказ, стабильные поставки и гибкие условия сотрудничества.',
      img: '/v2-solution-florists.png',
    },
    {
      icon: Palette,
      title: 'Оформителям',
      description: 'Широкий ассортимент для букетов, композиций и мероприятий любой сложности.',
      img: '/v2-solution-designers.png',
    },
    {
      icon: Warehouse,
      title: 'Мелкооптовым складам',
      description: 'Регулярные поставки партиями, работа с документами и логистика под ключ.',
      img: '/v2-solution-wholesalers.png',
    },
    {
      icon: Users,
      title: 'Другим партнёрам',
      description: 'Индивидуальные условия для ритейла, студий и компаний по всей стране.',
      img: '/v2-solution-partners.png',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #00104d 0%, #001166 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-4">Что предлагаем</span>
          <h2 className="font-black text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Решения для каждого
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {offers.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(59,91,219,0.5)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(59,91,219,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                   style={{ background: 'rgba(59,91,219,0.3)', border: '1px solid rgba(59,91,219,0.5)' }}>
                <item.icon className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
              <div className="mt-auto pt-6">
                {/* Убираем фиксированную высоту: иначе на мобилках картинка кропается/выглядит "ломаной" при ресайзе */}
                <div className="relative w-full overflow-hidden rounded-xl opacity-70 aspect-[4/3]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Why Us ─── */
const WhyUsV2 = () => {
  const stats = [
    { value: '15+', label: 'собственных машин' },
    { value: '12+', label: 'представительств по Казахстану' },
    { value: '8+', label: 'стран поставок' },
    { value: '500K+', label: 'тонн цветов в год' },
  ];

  const features = [
    { icon: CheckCircle, title: 'Гарантия качества', desc: 'Контроль на каждом этапе — от плантации до вашей двери' },
    { icon: Zap, title: 'Быстрая доставка', desc: 'Собственный автопарк для своевременных поставок' },
    { icon: Shield, title: 'Надёжное партнёрство', desc: 'Прозрачные условия и индивидуальный подход' },
  ];

  return (
    <section id="why" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001166 0%, #0033cc 100%)' }}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,68,255,0.1)' }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,91,219,0.1)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-4">Почему нам доверяют</span>
          <h2 className="font-black text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Контролируем каждый этап
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Собственный автопарк, представительства по всей стране и прямые поставки из ведущих цветоводческих регионов мира.
          </p>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <p className="text-5xl lg:text-6xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {s.value}
              </p>
              <p className="text-white/60 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features row */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(96,165,250,0.3)' }}>
                <f.icon className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big image banner */}
        <motion.div className="mt-16 rounded-3xl overflow-hidden relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
          <img
            src="/v2-from-cut-to-door.png"
            alt="От среза до вашей двери"
            className="w-full h-64 lg:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center" style={{ background: 'linear-gradient(to right, rgba(0,16,77,0.9), rgba(0,16,77,0.4), transparent)' }}>
            <div className="p-8 lg:p-12 max-w-lg">
              <h3 className="font-black text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>От среза до вашей двери</h3>
              <p className="text-white/70 leading-relaxed">Мы контролируем каждый этап — прямые поставки, холодная цепочка, таможня, доставка.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Contacts ─── */
const ContactsV2 = () => {
  const cities = [
    { city: 'Алматы', address: '6-й микрорайон, 11', phone: '+7 (771) 751-51-41', whatsapp: '77717515141' },
    { city: 'Уральск', address: 'ул. Сырима Датова 3/5', phone: '+7 (771) 020-00-99', whatsapp: '77710200099' },
    { city: 'Астана', address: 'пр. Тауелсіздік 19', phone: '+7 (705) 720-55-33', whatsapp: '77057205533' },
    { city: 'Усть-Каменогорск', address: 'пр. Шакарима 24', phone: '+7 (708) 803-01-95', whatsapp: '77088030195' },
    { city: 'Актау', address: '28 микрорайон, 54', phone: '+7 (701) 420-08-58', whatsapp: '77014200858' },
  ];

  return (
    <section id="contacts" className="py-24 lg:py-32" style={{ background: 'linear-gradient(180deg, #00104d 0%, #001166 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-4">Контакты</span>
          <h2 className="font-black text-4xl lg:text-5xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши представительства
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#60a5fa', boxShadow: '0 0 8px #60a5fa, 0 0 16px rgba(96,165,250,0.5)' }} />
                <h3 className="font-bold text-xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.city}</h3>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span>{item.address}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0 text-blue-400" />
                  <span>{item.phone}</span>
                </div>
              </div>
              <a href={`https://wa.me/${item.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: '#22c55e', boxShadow: '0 4px 15px rgba(34,197,94,0.3)' }}>
                <WhatsAppIcon />
                WhatsApp
              </a>
            </motion.div>
          ))}

          {/* Instagram */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', boxShadow: '0 0 8px rgba(236,72,153,0.5)' }} />
              <h3 className="font-bold text-xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Instagram</h3>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <InstagramIcon />
              <span>@artflowers.kazakhstan</span>
            </div>
            {/* Без фото над кнопкой — чтобы кнопка ровно стояла по высоте/позиции как у WhatsApp */}
            <a href="https://www.instagram.com/artflowers.kazakhstan" target="_blank" rel="noopener noreferrer"
              className="mt-auto w-full flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)' }}>
              <InstagramIcon />
              Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CtaV2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const text = encodeURIComponent(`Имя: ${name.trim()}\nТелефон: ${phone.trim()}`);
    window.open(`https://wa.me/77077515144?text=${text}`, '_blank');
  };

  return (
    <section id="cta" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0033cc, #001a80)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)' }} />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div className="max-w-3xl mx-auto px-4 text-center relative z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-black text-3xl lg:text-5xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Готовы начать сотрудничество?
        </h2>
        <p className="text-white/60 text-lg mb-10">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} required
            className="flex-1 bg-white/10 border border-white/25 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all" />
          <input type="tel" placeholder="Ваш телефон" value={phone} onChange={e => setPhone(e.target.value)} required
            className="flex-1 bg-white/10 border border-white/25 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all" />
          <button type="submit"
            className="text-white font-bold px-8 py-4 rounded-full whitespace-nowrap flex-shrink-0 hover:-translate-y-0.5 transition-all"
            style={{ background: 'linear-gradient(135deg, #2563eb, #0033cc)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>
            Отправить
          </button>
        </form>
      </motion.div>
    </section>
  );
};

/* ─── Footer ─── */
const FooterV2 = () => (
  <footer className="py-12 border-t border-white/10" style={{ background: '#00104d' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <img src={logoArtflowers} alt="ArtFlowers" className="h-8 object-contain mx-auto lg:mx-0 mb-3 brightness-0 invert" />
          <p className="text-white/40 text-sm">Крупнейший поставщик цветов в Казахстане</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {['about', 'services', 'why', 'contacts'].map(id => (
            <a key={id} href={`#${id}`} className="text-white/50 hover:text-white text-sm transition-colors">
              {{ about: 'О компании', services: 'Что предлагаем', why: 'Почему мы', contacts: 'Контакты' }[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/artflowers.kazakhstan" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all">
            <InstagramIcon />
          </a>
          <a href="https://wa.me/77717515141" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all">
            <WhatsAppIcon />
          </a>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-sm">© 2024 ArtFlowers. Все права защищены.</p>
        <button className="text-white/30 hover:text-white/60 text-sm transition-colors">Публичная оферта</button>
      </div>
    </div>
  </footer>
);

/* ─── Page ─── */
const V2 = () => (
  <LanguageProvider>
    <SEO title="ArtFlowers — Крупнейший поставщик цветов в Казахстане" description="Свежесрезанные цветы и растения с собственной транспортно-логистической компанией" canonical="/v2" />
    <div className="min-h-screen" style={{ background: '#00104d', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <NavV2 />
      <HeroV2 />
      <AboutV2 />
      <ServicesV2 />
      <WhyUsV2 />
      <ContactsV2 />
      <CtaV2 />
      <FooterV2 />
      <ScrollToTop />
    </div>
  </LanguageProvider>
);

export default V2;
