import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
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

        {/* Общие контакты */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8 md:mb-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Главный офис</p>
                <p className="text-gray-900 font-medium">Алматы, 6-й микрорайон, 11</p>
              </div>
            </div>
          </div>
        </div>

        {/* По городам с кнопкой WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
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
        </div>

        {/* Instagram */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Мы в соцсетях</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0047BB] font-bold text-lg hover:underline"
          >
            @artflowers.kazakhstan
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsCitiesBlack;
