import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.268 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PHONES = [
  { phone: '+7 (777) 899-79-78', whatsapp: '77778997978' },
  { phone: '+7 (705) 720-55-33', whatsapp: '77057205533' },
  { phone: '+7 (706) 664-80-18', whatsapp: '77066648018' },
] as const;

const ContactsCitiesBlack = () => {
  const { t } = useLanguage();
  const cities = [t.af.contacts.city1, t.af.contacts.city2, t.af.contacts.city3].map((c, i) => ({
    ...c,
    ...PHONES[i],
  }));

  const instagramUrl = 'https://www.instagram.com/artflowers.kazakhstan/';

  return (
    <section id="contacts" className="bg-[#003399] py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="inline-block border-b-2 border-white/40 pb-2 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
            {t.af.contacts.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cities.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/15"
            >
              <h3 className="mb-3 text-center text-xl font-bold text-white md:text-2xl">{item.name}</h3>
              <div className="mb-2 flex items-start gap-2 text-lg text-white/90 md:text-xl lg:text-2xl">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/70" />
                <span>{item.address}</span>
              </div>
              <a
                href={`tel:${item.whatsapp}`}
                className="mb-4 flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-white/80 md:text-xl lg:text-2xl"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>{item.phone}</span>
              </a>
              <a
                href={`https://wa.me/${item.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-md py-3 px-4 text-base font-semibold text-white shadow-sm transition-colors md:text-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon />
                {t.af.contacts.whatsapp}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl md:mt-10">
          <div className="flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-7 text-center transition-colors hover:bg-white/15 md:p-9">
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">{t.af.contacts.instagramTitle}</h3>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 text-xl font-medium text-white hover:text-white/80 md:text-2xl"
            >
              {t.af.contacts.instagramSubtitle}
            </a>
            <p className="mb-5 text-lg text-white/90 md:text-xl lg:text-2xl">{t.af.contacts.subscribe}</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[240px] items-center justify-center gap-2 rounded-md py-3 px-6 text-lg font-semibold text-white shadow-sm transition-opacity hover:opacity-90 md:text-xl"
              style={{
                background:
                  'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <InstagramIcon />
              {t.af.contacts.instagramBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsCitiesBlack;
