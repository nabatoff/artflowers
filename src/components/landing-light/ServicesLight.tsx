import { motion } from 'framer-motion';
import { Globe, Thermometer, Package, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesLight = () => {
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
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
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
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all"
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesLight;
