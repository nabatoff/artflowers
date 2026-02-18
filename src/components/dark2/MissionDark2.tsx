import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionDark2 = () => {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: 'Наша миссия',
      description: 'Обеспечивать максимально надежную, быструю и безопасную международную доставку, контролируя каждый этап логистической цепочки.',
    },
    en: {
      title: 'Our Mission',
      description: 'To provide the most reliable, fast and safe international delivery, controlling every stage of the logistics chain.',
    },
    kz: {
      title: 'Біздің миссиямыз',
      description: 'Логистикалық тізбектің әр кезеңін бақылай отырып, ең сенімді, жылдам және қауіпсіз халықаралық жеткізуді қамтамасыз ету.',
    },
  };

  const t = content[language];

  return (
    <section className="py-16 lg:py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary uppercase tracking-wide">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionDark2;
