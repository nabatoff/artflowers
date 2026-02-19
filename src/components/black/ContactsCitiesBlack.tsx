import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactsCitiesBlack = () => {
  const cities = [
    { city: "Алматы", address: "6-й микрорайон, 11", phone: "+7 (771) 751-51-41", whatsapp: "77717515141" },
    { city: "Уральск", address: "ул. Сырыма Датова 3/5", phone: "+7 (771) 020-00-99", whatsapp: "77710200099" },
    { city: "Астана", address: "пр. Тауелсиздик 19", phone: "+7 (705) 720-55-33", whatsapp: "77057205533" },
    { city: "Усть-Каменогорск", address: "пр. Шакарима 24", phone: "+7 (708) 803-01-95", whatsapp: "77088030195" },
    { city: "Актау", address: "28 микрорайон, 54", phone: "+7 (701) 420-08-58", whatsapp: "77014200858" },
  ];

  const instagramUrl = "https://www.instagram.com/artflowers.kazakhstan/";
  const whatsappGeneral = "77717515141";

  return (
    <section id="contacts" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0047BB] uppercase tracking-wide pb-2 border-b-2 border-[#0047BB]/40 inline-block">
            Контакты
          </h2>
        </div>

        {/* Города + Instagram в одной сетке */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border-2 border-[#0047BB]/20 shadow-sm hover:border-[#0047BB]/40 transition-colors flex flex-col"
            >
              <h3 className="text-lg font-bold text-[#0047BB] mb-3">{item.city}</h3>
              <div className="flex items-start gap-2 text-gray-700 mb-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0047BB]" />
                <span>{item.address}</span>
              </div>
              <a
                href={`tel:${item.whatsapp}`}
                className="flex items-center gap-2 text-[#0047BB] font-medium hover:underline transition-colors mb-4"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{item.phone}</span>
              </a>
              <a
                href={`https://wa.me/${item.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button
                  type="button"
                  size="sm"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          ))}

          {/* Instagram — такой же мини-блок как город */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#0047BB]/20 shadow-sm hover:border-[#0047BB]/40 transition-colors flex flex-col">
            <h3 className="text-lg font-bold text-[#0047BB] mb-3">Instagram</h3>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0047BB] font-medium hover:underline mb-4"
            >
              @artflowers.kazakhstan
            </a>
            <a
              href={`https://wa.me/${whatsappGeneral}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Button
                type="button"
                size="sm"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsCitiesBlack;
