import { motion } from 'framer-motion';
import { Globe, Thermometer, Package, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.international.title,
      description: t.services.international.description,
      featured: true,
    },
    {
      icon: Thermometer,
      title: t.services.refrigerator.title,
      description: t.services.refrigerator.description,
      featured: true,
    },
    {
      icon: Package,
      title: t.services.fullCycle.title,
      description: t.services.fullCycle.description,
      featured: false,
    },
    {
      icon: FileCheck,
      title: t.services.customs.title,
      description: t.services.customs.description,
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:bg-card/50 active:bg-card/70 ${
                service.featured ? 'md:row-span-1' : ''
              }`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors"
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                {service.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
