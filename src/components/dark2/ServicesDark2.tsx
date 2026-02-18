import { motion } from 'framer-motion';
import { Globe, Thermometer, Package, FileCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesDark2 = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.international.title,
      description: t.services.international.description,
    },
    {
      icon: Thermometer,
      title: t.services.refrigerator.title,
      description: t.services.refrigerator.description,
    },
    {
      icon: Package,
      title: t.services.fullCycle.title,
      description: t.services.fullCycle.description,
    },
    {
      icon: FileCheck,
      title: t.services.customs.title,
      description: t.services.customs.description,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5">
                <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold mb-3 uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDark2;
