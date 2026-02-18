import { motion } from 'framer-motion';
import { MapPin, User, FileText, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUsDark2 = () => {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: 'Почему ArtTime?',
      subtitle: 'Надежный партнер в логистике с 2019 года',
      items: [
        {
          icon: MapPin,
          title: 'Полный контроль',
          points: [
            'Вы знаете, где находится груз в каждый момент времени',
            'Контролируем сроки (отгрузка, транзит, прибытие)',
            'Контроль условий перевозки',
          ],
        },
        {
          icon: User,
          title: 'Индивидуальный менеджер',
          points: [
            'Полное ведение клиента',
            'Знает ваш груз, маршруты и требования',
            'Быстрое реагирование на отклонения',
          ],
        },
        {
          icon: FileText,
          title: 'Полный пакет документов',
          points: [
            'Работаем с НДС',
            'По договору',
            'Транспортные, грузосопроводительные, таможенные и прочие документы',
          ],
        },
      ],
    },
    en: {
      title: 'Why ArtTime?',
      subtitle: 'Reliable logistics partner since 2019',
      items: [
        {
          icon: MapPin,
          title: 'Full Control',
          points: [
            'You know where your cargo is at any moment',
            'We control deadlines (loading, transit, arrival)',
            'Transport conditions monitoring',
          ],
        },
        {
          icon: User,
          title: 'Personal Manager',
          points: [
            'Full client management',
            'Knows your cargo, routes and requirements',
            'Quick response to deviations',
          ],
        },
        {
          icon: FileText,
          title: 'Complete Documentation',
          points: [
            'We work with VAT',
            'Under contract',
            'Transport, cargo, customs and other documents',
          ],
        },
      ],
    },
    kz: {
      title: 'Неліктен ArtTime?',
      subtitle: '2019 жылдан бері сенімді логистикалық серіктес',
      items: [
        {
          icon: MapPin,
          title: 'Толық бақылау',
          points: [
            'Жүктің қай жерде екенін кез келген уақытта білесіз',
            'Мерзімдерді бақылаймыз (тиеу, транзит, келу)',
            'Тасымалдау шарттарын бақылау',
          ],
        },
        {
          icon: User,
          title: 'Жеке менеджер',
          points: [
            'Клиентті толық жүргізу',
            'Жүгіңізді, маршруттарыңызды және талаптарыңызды біледі',
            'Ауытқуларға жылдам әрекет ету',
          ],
        },
        {
          icon: FileText,
          title: 'Толық құжаттар пакеті',
          points: [
            'ҚҚС-мен жұмыс істейміз',
            'Шарт бойынша',
            'Көлік, жүк, кедендік және т.б. құжаттар',
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 lg:py-28 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 lg:p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-wide text-foreground">
                {item.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsDark2;
