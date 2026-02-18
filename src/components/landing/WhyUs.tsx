import { motion } from 'framer-motion';
import { Eye, User, FileText, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Eye,
      title: t.whyUs.items.control.title,
      points: t.whyUs.items.control.description.split('. ').filter(Boolean),
    },
    {
      icon: User,
      title: t.whyUs.items.reliability.title,
      points: t.whyUs.items.reliability.description.split('. ').filter(Boolean),
    },
    {
      icon: FileText,
      title: t.whyUs.items.experience.title,
      points: t.whyUs.items.experience.description.split('. ').filter(Boolean),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-card/30 border-y border-border">
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
            {t.whyUs.title}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-border bg-background hover:border-primary/50 transition-all flex flex-col"
            >
              {/* Icon & Title - Fixed Height */}
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold min-h-[48px] sm:min-h-[56px] flex items-center">
                  {item.title}
                </h3>
              </div>

              {/* Points List */}
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
