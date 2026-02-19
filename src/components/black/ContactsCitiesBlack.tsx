import { Phone, MapPin } from "lucide-react";

const ContactsCitiesBlack = () => {
  const cities = [
    { city: "Алматы", phone: "+7 (707) 751-51-44", address: "ул. Мынбаева 151" },
    { city: "Астана", phone: "+7 (771) 525-70-82", address: "" },
    { city: "Шымкент", phone: "+7 (707) 751-51-44", address: "" },
  ];

  const instagramHandle = "artflowers.kz";

  return (
    <section id="contacts" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center uppercase tracking-wide mb-10 md:mb-14">
          Контакты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {cities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.city}</h3>
              <a
                href={`tel:${item.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0047BB] transition-colors mb-2"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{item.phone}</span>
              </a>
              {item.address && (
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Мы в соцсетях</p>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0047BB] font-medium hover:underline"
          >
            @{instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsCitiesBlack;
