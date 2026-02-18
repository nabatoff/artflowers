import { motion } from 'framer-motion';
import { Truck, Eye, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUsLight = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Truck,
      title: t.whyUs.items.fleet.title,
      description: t.whyUs.items.fleet.description,
    },
    {
      icon: Eye,
      title: t.whyUs.items.control.title,
      description: t.whyUs.items.control.description,
    },
    {
      icon: Shield,
      title: t.whyUs.items.reliability.title,
      description: t.whyUs.items.reliability.description,
    },
    {
      icon: MapPin,
      title: t.whyUs.items.experience.title,
      description: t.whyUs.items.experience.description,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white border-y border-gray-200">
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
            {t.whyUs.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group text-center p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsLight;
