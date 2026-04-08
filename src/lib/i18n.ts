export type Language = 'ru' | 'en' | 'kz';

export const translations = {
  ru: {
    nav: {
      services: 'Услуги',
      about: 'О нас',
      calculator: 'Калькулятор',
      contacts: 'Контакты',
      getQuote: 'Оставить заявку',
    },
    hero: {
      slogan: 'Крупнейший поставщик',
      subtitle: 'Транспортно-логистическая компания полного цикла с собственным автопарком рефрижераторов',
      mission: 'Обеспечиваем максимально надежную, быструю и безопасную международную доставку, контролируя каждый этап логистической цепочки.',
      calculateCost: 'Рассчитать стоимость',
      contactUs: 'Связаться с нами',
    },
    stats: {
      yearsOnMarket: 'лет на рынке',
      ownFleet: 'единиц собственной спецтехники',
      countries: 'стран доставки',
      kilometers: 'млн км пройдено',
      cargo: 'тонн груза ежегодно',
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные логистические решения для вашего бизнеса',
      international: {
        title: 'Международные перевозки',
        description: 'Доставка грузов через 12+ стран Европы и Азии с полным таможенным сопровождением',
      },
      refrigerator: {
        title: 'Рефрижераторные перевозки',
        description: 'Температурный контроль 24/7 для скоропортящихся грузов. Собственный автопарк рефрижераторов (20+ единиц)',
      },
      fullCycle: {
        title: 'Полный цикл логистики',
        description: 'От загрузки до доставки — контролируем каждый этап. Складирование, упаковка, страхование',
      },
      customs: {
        title: 'Таможенное оформление',
        description: 'Профессиональное сопровождение грузов через таможню. Оформление всей документации',
      },
    },
    whyUs: {
      title: 'Почему ArtTime?',
      subtitle: 'Надежный партнер в логистике с 2019 года',
      items: {
        fleet: {
          title: 'Собственный автопарк',
          description: 'Более 20 единиц современных рефрижераторов',
        },
        control: {
          title: 'Полный контроль',
          description: 'Вы знаете, где находится груз в каждый момент времени. Контролируем сроки (отгрузка, транзит, прибытие). Контроль условий перевозки',
        },
        reliability: {
          title: 'Индивидуальный менеджер',
          description: 'Полное ведение клиента. Знает ваш груз, маршруты и требования. Быстрое реагирование на отклонения',
        },
        experience: {
          title: 'Полный пакет документов',
          description: 'Работаем с НДС. По договору. Транспортные, грузосопроводительные, таможенные и прочие документы',
        },
      },
    },
    calculator: {
      title: 'Калькулятор стоимости',
      subtitle: 'Рассчитайте предварительную стоимость перевозки',
      from: 'Откуда',
      to: 'Куда',
      fromPlaceholder: 'Город отправления',
      toPlaceholder: 'Город назначения',
      cargoType: 'Тип груза',
      regular: 'Обычный',
      refrigerated: 'Рефрижераторный',
      weight: 'Вес (кг)',
      volume: 'Объем (м³)',
      calculate: 'Рассчитать',
      estimatedCost: 'Предварительная стоимость',
      currency: '₸',
      disclaimer: '*Окончательная стоимость уточняется менеджером',
    },
    contactForm: {
      title: 'Оставить заявку',
      subtitle: 'Свяжитесь с нами для расчета стоимости или консультации',
      name: 'Ваше имя',
      phone: 'Телефон',
      email: 'Email',
      message: 'Описание груза',
      messagePlaceholder: 'Опишите ваш груз и маршрут...',
      preferredContact: 'Предпочтительный способ связи',
      phoneCall: 'Звонок',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      submit: 'Отправить заявку',
      success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
    },
    footer: {
      description: 'Транспортно-логистическая компания полного цикла. Международные перевозки с 2019 года.',
      services: 'Услуги',
      company: 'Компания',
      aboutUs: 'О нас',
      careers: 'Карьера',
      news: 'Новости',
      contacts: 'Контакты',
      newsletter: 'Подписка на новости',
      emailPlaceholder: 'Ваш email',
      copyright: '© 2024 ArtTime. Все права защищены.',
    },
    af: {
      seo: {
        title: 'ArtFlowers — Крупнейший поставщик цветов в Казахстане',
        description:
          'ArtFlowers — крупнейший поставщик свежесрезанных цветов и растений в Казахстане. 17 лет на рынке, прямые поставки из Эквадора, Кении, Нидерландов и других стран.',
        keywords:
          'цветы, свежесрезанные цветы, растения, поставщик цветов, оптовые цветы, Казахстан, ArtFlowers, indoor растения, outdoor растения, цветочная логистика',
        ogImageAlt: 'ArtFlowers — поставщик цветов в Казахстане',
        ogLocale: 'ru_RU',
      },
      nav: {
        about: 'О КОМПАНИИ',
        offers: 'ЧТО ПРЕДЛАГАЕМ',
        whyUs: 'ПОЧЕМУ МЫ',
        contacts: 'КОНТАКТЫ',
      },
      lang: { ru: 'RU', en: 'EN', kz: 'KZ' },
      header: {
        contact: 'Связаться',
        contactUsTitle: 'Свяжитесь с нами',
        call: 'Позвонить',
        writeWhatsapp: 'Написать в WhatsApp',
        langButtonAria: 'Выбрать язык сайта',
      },
      hero: {
        line1: 'КРУПНЕЙШИЙ',
        line2: 'ПОСТАВЩИК',
        subtitle:
          'свежесрезанных цветов и растений в Казахстане с собственной транспортно-логистической компанией',
        cta: 'Оставить заявку',
      },
      about: {
        title: 'О компании',
        p1:
          'ArtFlowers — крупнейший поставщик свежесрезанных цветов и indoor/outdoor растений в Казахстане с собственной транспортно-логистической компанией.',
        p2: 'Более 17 лет мы поставляем людям свежесть и красоту в виде большого ассортимента качественных цветов и растений.',
        p3:
          'С годами наша компания стала ключевым игроком в цветочной индустрии, устанавливая прочные партнёрства с крупнейшими производителями Нидерландов, Китая, Эквадора, Кении, Колумбии, Малайзии и других стран.',
        p4: 'Эти партнёрства обеспечивают нам доступ к широкому ассортименту высококачественных цветов и растений.',
      },
      whatWeOffer: {
        title: 'Мы предлагаем',
        intro:
          'Полный цикл сотрудничества «под ключ» с лучшими условиями сотрудничества для цветочников и садоводов Казахстана.',
        bullet1:
          'поможем осуществить выбор свежесрезанных цветов, растений (indoor/outdoor), луковичных и другого посадочного материала',
        bullet2: 'поможем с выбором стендинга и страны-поставщика',
        bullet3: 'доставим цветы и растения в ваш город',
        tag1: 'стабильные поставки',
        tag2: 'гибкие условия',
        tag3: 'лучший ассортимент',
      },
      whyUs: {
        title: 'Почему нам доверяют',
        intro:
          'Собственный автопарк, представительства по всей стране и прямые поставки из ведущих цветоводческих районов мира — мы контролируем каждый этап от среза до вашей двери.',
        guarantee: 'Гарантируем стабильность поставок и соблюдение температурного режима',
        statCountries: 'стран-партнёров',
        statYears: 'лет на рынке',
        statTons: 'тонн цветов каждый год',
        statBranches: 'филиала в Казахстане',
        statStaff: 'сотрудников',
      },
      logistics: {
        title: 'Лучшие условия по авиа и автологистике',
        body:
          'Компания ArtFlowers имеет собственную транспортную компанию, осуществляющую доставку и перевозки товара наших клиентов с соблюдением графика поставок и всеми необходимыми нормами — от документального сопровождения до точного соблюдения температурного режима.',
      },
      contacts: {
        title: 'Контакты',
        instagramTitle: 'Instagram',
        instagramSubtitle: '@artflowers.kazakhstan',
        subscribe: 'Подпишитесь, чтобы узнавать новости первыми!',
        instagramBtn: 'Instagram',
        whatsapp: 'WhatsApp',
        city1: { name: 'Алматы', address: '6-й микрорайон, 11' },
        city2: { name: 'Астана', address: 'пр. Тауелсиздик 19' },
        city3: { name: 'Усть-Каменогорск', address: 'пр. Шакарима 24' },
      },
      form: {
        title: 'Предложение о сотрудничестве',
        name: 'Имя *',
        phone: 'Номер телефона *',
        comment: 'Комментарий (необязательно)',
        submit: 'Отправить предложение',
        waName: 'Имя',
        waPhone: 'Телефон',
        waComment: 'Комментарий',
      },
      footer: {
        copyright: 'Artflowers © 2024. Все права защищены.',
        offer: 'Публичная оферта',
        offerTitle: 'Публичная оферта',
        offerP1:
          'Настоящий Договор публичной оферты (далее – Оферта) адресован физическим и юридическим лицам (далее – Покупатель) и определяет условия оказания услуг, представленных на сайте https://art-flowers.kz (далее – Сайт).',
        offerH1: '1. Общие положения',
        offerP2:
          '1.1. Данная Оферта является публичным договором в соответствии со статьей 395 Гражданского кодекса Республики Казахстан.',
        offerP3: '1.2. Поставщик услуг – ИП Floral Express, ИИН 840703401219, адрес: 6-й микрорайон, 11.',
        offerP4:
          '1.3. Заказчик – лицо, совершившее обращение к Поставщику услуг через формы обратной связи на Сайте, по телефону или в мессенджерах, и выразившее намерение заказать услугу.',
        offerP5:
          '1.4. Принятием (акцептом) условий настоящей Оферты является оформление заявки любым доступным способом: через кнопку связи на Сайте, по телефону или в мессенджере WhatsApp. С момента подтверждения заказа и/или произведения оплаты Заказчик считается согласившимся со всеми условиями Оферты.',
        offerH2: '2. Порядок оформления заказа',
        offerP6:
          '2.1. Информация об услугах на Сайте носит ознакомительный характер. Перечень, объём, технические характеристики, сроки оказания услуг и их итоговая стоимость согласовываются Сторонами индивидуально в ходе консультации через средства связи (WhatsApp, телефон).',
        offerP7:
          '2.2. Заказ считается принятым в работу только после его подтверждения менеджером и получения оплаты/предоплаты.',
        offerH3: '3. Ответственность и персональные данные',
        offerP8:
          '3.1. Оставляя заявку на Сайте или в мессенджере, Покупатель даёт согласие на обработку персональных данных для исполнения Заказа.',
        offerH4: '4. Контакты',
        offerP9:
          '4.1. По всем вопросам, жалобам и предложениям обращаться по электронной почте: l.kurlovich@artflowers.kz',
      },
      scroll: { toTop: 'Наверх', toTopAria: 'Наверх', toContacts: 'К контактам', toContactsAria: 'Контакты' },
    },
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      calculator: 'Calculator',
      contacts: 'Contacts',
      getQuote: 'Get a Quote',
    },
    hero: {
      slogan: 'Largest supplier',
      subtitle: 'Full-cycle transport and logistics company with our own fleet of refrigerated trucks',
      mission: 'We provide the most reliable, fast and safe international delivery, controlling every stage of the logistics chain.',
      calculateCost: 'Calculate Cost',
      contactUs: 'Contact Us',
    },
    stats: {
      yearsOnMarket: 'years in market',
      ownFleet: 'own specialized vehicles',
      countries: 'delivery countries',
      kilometers: 'M km traveled',
      cargo: 'tons of cargo annually',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive logistics solutions for your business',
      international: {
        title: 'International Shipping',
        description: 'Cargo delivery across 12+ countries in Europe and Asia with full customs support',
      },
      refrigerator: {
        title: 'Refrigerated Transport',
        description: '24/7 temperature control for perishable goods. Own fleet of refrigerated trucks',
      },
      fullCycle: {
        title: 'Full Cycle Logistics',
        description: 'From loading to delivery — we control every stage. Warehousing, packaging, insurance',
      },
      customs: {
        title: 'Customs Clearance',
        description: 'Professional cargo escort through customs. Complete documentation processing',
      },
    },
    whyUs: {
      title: 'Why ArtTime?',
      subtitle: 'Reliable logistics partner since 2019',
      items: {
        fleet: {
          title: 'Own Fleet',
          description: 'More than 20 modern refrigerated trucks',
        },
        control: {
          title: 'Full Control',
          description: 'You know where your cargo is at any moment. We control deadlines (loading, transit, arrival). Transport conditions monitoring',
        },
        reliability: {
          title: 'Personal Manager',
          description: 'Full client management. Knows your cargo, routes and requirements. Quick response to deviations',
        },
        experience: {
          title: 'Complete Documentation',
          description: 'We work with VAT. Under contract. Transport, cargo, customs and other documents',
        },
      },
    },
    calculator: {
      title: 'Cost Calculator',
      subtitle: 'Calculate the estimated shipping cost',
      from: 'From',
      to: 'To',
      fromPlaceholder: 'Origin city',
      toPlaceholder: 'Destination city',
      cargoType: 'Cargo Type',
      regular: 'Regular',
      refrigerated: 'Refrigerated',
      weight: 'Weight (kg)',
      volume: 'Volume (m³)',
      calculate: 'Calculate',
      estimatedCost: 'Estimated Cost',
      currency: '₸',
      disclaimer: '*Final cost to be confirmed by manager',
    },
    contactForm: {
      title: 'Get a Quote',
      subtitle: 'Contact us for cost calculation or consultation',
      name: 'Your Name',
      phone: 'Phone',
      email: 'Email',
      message: 'Cargo Description',
      messagePlaceholder: 'Describe your cargo and route...',
      preferredContact: 'Preferred Contact Method',
      phoneCall: 'Phone Call',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      submit: 'Submit Request',
      success: 'Request sent! We will contact you shortly.',
    },
    footer: {
      description: 'Full-cycle transport and logistics company. International shipping since 2019.',
      services: 'Services',
      company: 'Company',
      aboutUs: 'About Us',
      careers: 'Careers',
      news: 'News',
      contacts: 'Contacts',
      newsletter: 'Newsletter',
      emailPlaceholder: 'Your email',
      copyright: '© 2024 ArtTime. All rights reserved.',
    },
    af: {
      seo: {
        title: 'ArtFlowers — Leading flower supplier in Kazakhstan',
        description:
          'ArtFlowers is the largest supplier of fresh-cut flowers and plants in Kazakhstan. 17 years on the market, direct supplies from Ecuador, Kenya, the Netherlands and more.',
        keywords:
          'flowers, fresh cut flowers, plants, flower supplier, wholesale flowers, Kazakhstan, ArtFlowers, indoor plants, outdoor plants, floral logistics',
        ogImageAlt: 'ArtFlowers — flower supplier in Kazakhstan',
        ogLocale: 'en_US',
      },
      nav: {
        about: 'ABOUT',
        offers: 'WHAT WE OFFER',
        whyUs: 'WHY US',
        contacts: 'CONTACTS',
      },
      lang: { ru: 'RU', en: 'EN', kz: 'KZ' },
      header: {
        contact: 'Contact us',
        contactUsTitle: 'Get in touch',
        call: 'Call',
        writeWhatsapp: 'Message on WhatsApp',
        langButtonAria: 'Choose site language',
      },
      hero: {
        line1: 'THE LARGEST',
        line2: 'SUPPLIER',
        subtitle:
          'of fresh-cut flowers and plants in Kazakhstan with our own transport and logistics company',
        cta: 'Send a request',
      },
      about: {
        title: 'About us',
        p1:
          'ArtFlowers is the largest supplier of fresh-cut flowers and indoor/outdoor plants in Kazakhstan, with its own transportation and logistics company.',
        p2:
          'For over 17 years we have been bringing freshness and beauty through a wide range of quality flowers and plants.',
        p3:
          'Over time our company has become a key player in the floral industry, building strong partnerships with leading growers in the Netherlands, China, Ecuador, Kenya, Colombia, Malaysia and other countries.',
        p4: 'These partnerships give us access to a broad range of high-quality flowers and plants.',
      },
      whatWeOffer: {
        title: 'What we offer',
        intro:
          'A full turnkey cooperation cycle with the best terms for florists and horticultural businesses across Kazakhstan.',
        bullet1:
          'We help you choose fresh-cut flowers, indoor/outdoor plants, bulbs and other planting material',
        bullet2: 'We help you choose standing displays and supplier countries',
        bullet3: 'We deliver flowers and plants to your city',
        tag1: 'reliable supply',
        tag2: 'flexible terms',
        tag3: 'best assortment',
      },
      whyUs: {
        title: 'Why clients trust us',
        intro:
          'Our own fleet, representative offices nationwide and direct supplies from the world’s leading flower-growing regions — we control every step from the cut to your door.',
        guarantee: 'We guarantee stable supplies and temperature-controlled handling',
        statCountries: 'partner countries',
        statYears: 'years on the market',
        statTons: 'tons of flowers per year',
        statBranches: 'branches in Kazakhstan',
        statStaff: 'employees',
      },
      logistics: {
        title: 'Best terms for air and road logistics',
        body:
          'ArtFlowers has its own transport company that delivers and carries our clients’ goods on schedule and in full compliance — from documentation to strict temperature control.',
      },
      contacts: {
        title: 'Contacts',
        instagramTitle: 'Instagram',
        instagramSubtitle: '@artflowers.kazakhstan',
        subscribe: 'Follow us for the latest news!',
        instagramBtn: 'Instagram',
        whatsapp: 'WhatsApp',
        city1: { name: 'Almaty', address: '6th microdistrict, 11' },
        city2: { name: 'Astana', address: 'Tauelsizdik Ave. 19' },
        city3: { name: 'Oskemen (Ust-Kamenogorsk)', address: 'Shakarim Ave. 24' },
      },
      form: {
        title: 'Partnership inquiry',
        name: 'Name *',
        phone: 'Phone number *',
        comment: 'Comment (optional)',
        submit: 'Send proposal',
        waName: 'Name',
        waPhone: 'Phone',
        waComment: 'Comment',
      },
      footer: {
        copyright: 'Artflowers © 2024. All rights reserved.',
        offer: 'Public offer',
        offerTitle: 'Public offer (terms)',
        offerP1:
          'This public offer agreement (the “Offer”) is addressed to individuals and legal entities (the “Customer”) and sets out the terms of services presented on https://art-flowers.kz (the “Site”).',
        offerH1: '1. General provisions',
        offerP2:
          '1.1. This Offer constitutes a public agreement under Article 395 of the Civil Code of the Republic of Kazakhstan.',
        offerP3: '1.2. Service provider — IE Floral Express, IIN 840703401219, address: 6th microdistrict, 11.',
        offerP4:
          '1.3. Customer — any person who contacts the provider via the Site, by phone or messengers and expresses an intent to order a service.',
        offerP5:
          '1.4. Acceptance of this Offer is submitting a request by any available means: Site contact button, phone or WhatsApp. Once the order is confirmed and/or paid, the Customer is deemed to have accepted all terms.',
        offerH2: '2. Order process',
        offerP6:
          '2.1. Information on the Site is for reference only. Scope, specifications, timelines and final price are agreed individually during consultation (WhatsApp, phone).',
        offerP7: '2.2. An order is accepted only after confirmation by a manager and payment/prepayment.',
        offerH3: '3. Liability and personal data',
        offerP8:
          '3.1. By submitting a request on the Site or in a messenger, the Customer consents to processing personal data to fulfil the order.',
        offerH4: '4. Contacts',
        offerP9: '4.1. For questions and feedback: l.kurlovich@artflowers.kz',
      },
      scroll: { toTop: 'Back to top', toTopAria: 'Back to top', toContacts: 'Contacts', toContactsAria: 'Go to contacts' },
    },
  },
  kz: {
    nav: {
      services: 'Қызметтер',
      about: 'Біз туралы',
      calculator: 'Калькулятор',
      contacts: 'Байланыс',
      getQuote: 'Өтінім қалдыру',
    },
    hero: {
      slogan: 'Ең ірі жеткізуші',
      subtitle: 'Өз рефрижератор автопаркі бар толық циклді көлік-логистикалық компания',
      mission: 'Біз логистикалық тізбектің әр кезеңін бақылай отырып, барынша сенімді, жылдам және қауіпсіз халықаралық жеткізуді қамтамасыз етеміз.',
      calculateCost: 'Құнын есептеу',
      contactUs: 'Бізбен байланысыңыз',
    },
    stats: {
      yearsOnMarket: 'жыл нарықта',
      ownFleet: 'меншікті арнайы техника бірлігі',
      countries: 'жеткізу елдері',
      kilometers: 'млн км жүрілді',
      cargo: 'тонна жүк жыл сайын',
    },
    services: {
      title: 'Біздің қызметтер',
      subtitle: 'Сіздің бизнесіңіз үшін кешенді логистикалық шешімдер',
      international: {
        title: 'Халықаралық тасымалдау',
        description: 'Толық кедендік сүйемелдеумен Еуропа мен Азияның 12+ елі арқылы жүк жеткізу',
      },
      refrigerator: {
        title: 'Рефрижераторлық тасымалдау',
        description: 'Тез бұзылатын жүктер үшін 24/7 температураны бақылау. Меншікті рефрижератор автопаркі',
      },
      fullCycle: {
        title: 'Толық цикл логистика',
        description: 'Тиеуден жеткізуге дейін — әр кезеңді бақылаймыз. Қоймалау, орау, сақтандыру',
      },
      customs: {
        title: 'Кедендік рәсімдеу',
        description: 'Жүктерді кеден арқылы кәсіби сүйемелдеу. Барлық құжаттаманы рәсімдеу',
      },
    },
    whyUs: {
      title: 'Неліктен ArtTime?',
      subtitle: '2019 жылдан бері сенімді логистикалық серіктес',
      items: {
        fleet: {
          title: 'Меншікті автопарк',
          description: '20-дан астам заманауи рефрижератор',
        },
        control: {
          title: 'Толық бақылау',
          description: 'Жүктің қай жерде екенін кез келген уақытта білесіз. Мерзімдерді бақылаймыз (тиеу, транзит, келу). Тасымалдау шарттарын бақылау',
        },
        reliability: {
          title: 'Жеке менеджер',
          description: 'Клиентті толық жүргізу. Жүгіңізді, маршруттарыңызды және талаптарыңызды біледі. Ауытқуларға жылдам әрекет ету',
        },
        experience: {
          title: 'Толық құжаттар пакеті',
          description: 'ҚҚС-мен жұмыс істейміз. Шарт бойынша. Көлік, жүк, кедендік және т.б. құжаттар',
        },
      },
    },
    calculator: {
      title: 'Құн калькуляторы',
      subtitle: 'Тасымалдаудың болжамды құнын есептеңіз',
      from: 'Қайдан',
      to: 'Қайда',
      fromPlaceholder: 'Жөнелту қаласы',
      toPlaceholder: 'Тағайындалған қала',
      cargoType: 'Жүк түрі',
      regular: 'Қарапайым',
      refrigerated: 'Рефрижераторлық',
      weight: 'Салмағы (кг)',
      volume: 'Көлемі (м³)',
      calculate: 'Есептеу',
      estimatedCost: 'Болжамды құн',
      currency: '₸',
      disclaimer: '*Соңғы құнын менеджер нақтылайды',
    },
    contactForm: {
      title: 'Өтінім қалдыру',
      subtitle: 'Құнды есептеу немесе кеңес алу үшін бізбен байланысыңыз',
      name: 'Сіздің атыңыз',
      phone: 'Телефон',
      email: 'Email',
      message: 'Жүк сипаттамасы',
      messagePlaceholder: 'Жүгіңіз бен маршрутыңызды сипаттаңыз...',
      preferredContact: 'Қалаулы байланыс тәсілі',
      phoneCall: 'Қоңырау',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      submit: 'Өтінімді жіберу',
      success: 'Өтінім жіберілді! Жақын арада сізбен хабарласамыз.',
    },
    footer: {
      description: 'Толық циклді көлік-логистикалық компания. 2019 жылдан бері халықаралық тасымалдау.',
      services: 'Қызметтер',
      company: 'Компания',
      aboutUs: 'Біз туралы',
      careers: 'Мансап',
      news: 'Жаңалықтар',
      contacts: 'Байланыс',
      newsletter: 'Жаңалықтарға жазылу',
      emailPlaceholder: 'Сіздің email',
      copyright: '© 2024 ArtTime. Барлық құқықтар қорғалған.',
    },
    af: {
      seo: {
        title: 'ArtFlowers — Қазақстандағы ең ірі гүл жеткізушісі',
        description:
          'ArtFlowers — Қазақстанда қиысталған гүлдер мен өсімдіктердің ең ірі жеткізушісі. Нарықта 17 жыл, Эквадор, Кения, Нидерландтар және басқа елдерден тікелей жеткізу.',
        keywords:
          'гүлдер, қиысталған гүлдер, өсімдіктер, гүл жеткізушісі, қолма-қол гүлдер, Қазақстан, ArtFlowers, ғимарат ішіндегі өсімдіктер, гүл логистикасы',
        ogImageAlt: 'ArtFlowers — Қазақстандағы гүл жеткізушісі',
        ogLocale: 'kk_KZ',
      },
      nav: {
        about: 'КОМПАНИЯ ТУРАЛЫ',
        offers: 'НЕ ҰСЫНАМЫЗ',
        whyUs: 'НЕЛІКТЕН БІЗ',
        contacts: 'БАЙЛАНЫС',
      },
      lang: { ru: 'RU', en: 'EN', kz: 'KZ' },
      header: {
        contact: 'Байланысу',
        contactUsTitle: 'Бізбен байланысыңыз',
        call: 'Қоңырау шалу',
        writeWhatsapp: 'WhatsApp-қа жазу',
        langButtonAria: 'Сайт тілін таңдау',
      },
      hero: {
        line1: 'ЕҢ ІРІ',
        line2: 'ЖЕТКІЗУШІ',
        subtitle:
          'Қазақстандағы жаңа кесілген гүлдер мен өсімдіктер бойынша және жеке транспорт-логистикалық компаниясымен',
        cta: 'Өтінім қалдыру',
      },
      about: {
        title: 'Компания туралы',
        p1:
          'Art Flowers - жеке транспорт-логистикалық компаниясы бар Қазақстандағы жаңа кесілген гүлдер мен indoor/outdoor өсімдіктерінің ең ірі жеткізушісі.',
        p2:
          '17 жылдан астам уақыт бойы біз адамдарға сапалы гүлдер мен өсімдіктердің үлкен ассортименті түрінде балғындық пен сұлулықты ұсынып келеміз.',
        p3:
          'Жылдар өте келе компаниямыз Нидерланд, Қытай, Эквадор, Кения, Колумбия, Малайзия және басқа да елдердің ірі өндірушілерімен берік серіктестік орнатып, гүл индустриясының негізгі қатысушысына айналды.',
        p4:
          'Бұл серіктестіктер бізге жоғары сапалы гүлдер мен өсімдіктердің кең ассортиментіне қол жеткізуді қамтамасыз етеді.',
      },
      whatWeOffer: {
        title: 'Біз ұсынамыз',
        intro:
          'Қазақстанның гүл сатушылары мен бағбандары үшін ең тиімді шарттармен "дайын күйінде" толық келісім циклін:',
        bullet1:
          'Жаңа кесілген гүлдерді, өсімдіктерді (indoor/outdoor), пиязшықтар мен басқа да отырғызу материалдарын таңдауға көмектесеміз',
        bullet2: 'стендинг пен жеткізуші елді таңдауға көмектесеміз',
        bullet3: 'гүлдер мен өсімдіктерді қалаңызға дейін жеткіземіз',
        tag1: 'Тұрақты жеткізілімдер',
        tag2: 'Икемді шарттар',
        tag3: 'Үздік ассортимент',
      },
      whyUs: {
        title: 'Неліктен бізге сенеді',
        intro:
          'Жеке автопарк, елдер бойынша өкілдіктер және әлемнің жетекші гүл өсіру аудандарынан тікелей жеткізілімдер - біз гүлді кесу сәтінен бастап сіздің есігіңізге дейінгі әр бір кезеңді қадағалаймыз.',
        guarantee: 'Жеткізілімдердің тұрақтылығына және температуралық режимнің сақталуына кепілдік береміз.',
        statCountries: 'серіктес ел',
        statYears: 'жыл нарықта',
        statTons: 'тонна гүл жылына',
        statBranches: 'Қазақстандағы филиалдар',
        statStaff: 'жұмысшылар',
      },
      logistics: {
        title: 'Авиа және автологистика бойынша ең тиімді шарттар',
        body:
          'Art Flowers компаниясының жеткізілім кестесі мен барлық қажетті нормалардың сақталуын қамтамасыз ететін жеке транспорттық компаниясы бар. Бұл құжаттық сүйемелдеуден бастап температуралық режимнің дәл сақталуына дейінгі клиенттеріміздің тауарларын тасымалдау мен жеткізуді қамтиды.',
      },
      contacts: {
        title: 'Байланыс үшін',
        instagramTitle: 'Instagram',
        instagramSubtitle: '@artflowers.kazakhstan',
        subscribe: 'Жаңалықтарды бірінші боп білу үшін жазылыңыз!',
        instagramBtn: 'Instagram',
        whatsapp: 'WhatsApp',
        city1: { name: 'Алматы', address: '6-шы шағын аудан, 11 үй' },
        city2: { name: 'Астана', address: 'Тәуелсіздік даңғылы, 19 үй' },
        city3: { name: 'Өскемен', address: 'Шәкәрім даңғылы, 24 үй' },
      },
      form: {
        title: 'Серіктестік ұсынысы',
        name: 'Аты-жөні *',
        phone: 'Телефон нөмірі *',
        comment: 'Пікір (міндетті емес)',
        submit: 'Ұсынысты жіберу',
        waName: 'Аты',
        waPhone: 'Телефон',
        waComment: 'Пікір',
      },
      footer: {
        copyright: 'Artflowers © 2024. Барлық құқықтар қорғалған.',
        offer: 'Жария оферта',
        offerTitle: 'Жария оферта',
        offerP1:
          'Осы жария оферта шарты (бұдан әрі – Оферта) жеке және заңды тұлғаларға (бұдан әрі – Сатып алушы) бағытталған және https://art-flowers.kz сайтында көрсетілген қызметтердің шарттарын анықтайды (бұдан әрі – Сайт).',
        offerH1: '1. Жалпы ережелер',
        offerP2:
          '1.1. Бұл Оферта Қазақстан Республикасы Азamatтық кодексінің 395-бабына сәйкес жария шарт болып табылады.',
        offerP3: '1.2. Қызмет көрсетуші – ЖК Floral Express, ЖСН 840703401219, мекенжайы: 6-шы мөлтек аудан, 11.',
        offerP4:
          '1.3. Тапсырыс беруші – Сайтта, телефон немесе мессенджерлер арқылы қызмет көрсетушіге жүгініп, қызмет тапсырыс беру ниетін білдірген тұлға.',
        offerP5:
          '1.4. Осы Офертаны қабылдау – Сайттағы байланыс батырмасы, телефон немесе WhatsApp арқылы өтінім қалдыру. Тапсырыс расталған және/немесе төленген сәттен бастап Тапсырыс беруші барлық шарттармен келіседі деп есептеледі.',
        offerH2: '2. Тапсырыс реті',
        offerP6:
          '2.1. Сайттағы ақпарат таныстыру сипатындағы. Тізім, көлем, техникалық сипаттама, мерзімдер және қорытынды баға тараптармен кеңесу кезінде жеке келісіледі (WhatsApp, телефон).',
        offerP7:
          '2.2. Тапсырыс тек менеджер растағаннан және төлем алынғаннан кейін қабылданады.',
        offerH3: '3. Жауапкершілік және жеке деректер',
        offerP8:
          '3.1. Сайтта немесе мессенджерде өтінім қалдыра отырып, Сатып алушы тапсырысты орындау үшін жеке деректерді өңдеуге келісім береді.',
        offerH4: '4. Байланыс',
        offerP9: '4.1. Сұрақтар және ұсыныстар: l.kurlovich@artflowers.kz',
      },
      scroll: { toTop: 'Жоғары', toTopAria: 'Жоғарыға', toContacts: 'Байланысқа', toContactsAria: 'Байланыс бөліміне' },
    },
  },
} as const;

export const useTranslation = (lang: Language) => {
  return translations[lang];
};
