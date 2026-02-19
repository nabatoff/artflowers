import { Phone, MapPin, Mail } from "lucide-react";

const ContactsCitiesBlack = () => {
  const cities = [
    { city: "Алматы", phone: "+7 (707) 751-51-44", address: "ул. Мынбаева 151" },
    { city: "Астана", phone: "+7 (771) 525-70-82", address: "" },
    { city: "Шымкент", phone: "+7 (707) 751-51-44", address: "" },
  ];

  const instagramHandle = "artflowers.kz";
  const email = "andreyyakovenko1603@mail.ru";
  const emailDisplay = "andrey@arttimelogistics.kz";

  return (
    <section id="contacts" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0047BB] uppercase tracking-wide pb-2 border-b-2 border-[#0047BB]/40 inline-block">
            Контакты
          </h2>
        </div>

        {/* Основные контакты (из старого блока) */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8 md:mb-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0047BB]/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#0047BB]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Телефон</p>
                <a href="tel:+77077515144" className="text-[#0047BB] font-semibold hover:underline block">
                  +7 (707) 751-51-44
                </a>
                <a href="tel:+77715257082" className="text-[#0047BB] font-semibold hover:underline block">
                  +7 (771) 525-70-82
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0047BB]/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0047BB]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Почта</p>
                <a href={`mailto:${email}`} className="text-[#0047BB] font-semibold hover:underline break-all">
                  {emailDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0047BB]/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0047BB]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Адрес</p>
                <p className="text-gray-900 font-medium">г. Алматы, ул. Мынбаева 151</p>
              </div>
            </div>
          </div>
        </div>

        {/* По городам */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {cities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border-2 border-[#0047BB]/20 shadow-sm hover:border-[#0047BB]/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-[#0047BB] mb-3">{item.city}</h3>
              <a
                href={`tel:${item.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="flex items-center gap-2 text-[#0047BB] font-medium hover:underline transition-colors mb-2"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{item.phone}</span>
              </a>
              {item.address && (
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0047BB]" />
                  <span>{item.address}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instagram */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Мы в соцсетях</p>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0047BB] font-bold text-lg hover:underline"
          >
            @{instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsCitiesBlack;
