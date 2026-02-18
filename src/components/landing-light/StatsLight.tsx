import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import CountUp from '@/components/CountUp';

const StatsLight = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 5, suffix: '+', label: t.stats.yearsOnMarket },
    { value: 20, suffix: '+', label: t.stats.ownFleet },
    { value: 12, suffix: '+', label: t.stats.countries },
    { value: 13.5, suffix: '', label: t.stats.kilometers, specialFormat: 'decimal' },
    { value: 10, suffix: '', label: t.stats.cargo, specialFormat: 'thousands' },
  ];

  return (
    <section className="py-16 border-y border-gray-200 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-baseline gap-1">
                {stat.specialFormat === 'decimal' ? (
                  <>
                    <CountUp
                      from={0}
                      to={13}
                      direction="up"
                      duration={1.5}
                      delay={index * 0.1}
                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900"
                    />
                    <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">.</span>
                    <CountUp
                      from={0}
                      to={5}
                      direction="up"
                      duration={1.5}
                      delay={index * 0.1}
                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900"
                    />
                  </>
                ) : stat.specialFormat === 'thousands' ? (
                  <>
                    <CountUp
                      from={5}
                      to={stat.value}
                      direction="up"
                      duration={1.2}
                      delay={index * 0.1}
                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900"
                    />
                    <span className="text-3xl md:text-4xl font-display font-bold text-primary">тыс.</span>
                  </>
                ) : (
                  <>
                    <CountUp
                      from={0}
                      to={stat.value}
                      direction="up"
                      duration={1.5}
                      delay={index * 0.1}
                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900"
                    />
                    {stat.suffix && (
                      <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                        {stat.suffix}
                      </span>
                    )}
                  </>
                )}
              </div>
              <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider mt-2 max-w-[140px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsLight;
