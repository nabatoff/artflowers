import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveMapLight from './InteractiveMapLight';

const MapLight = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {t.services.international.title}
            </h2>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <InteractiveMapLight />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLight;
