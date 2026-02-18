import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactBlack = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    const whatsappMessage = `Имя: ${encodeURIComponent(formData.name)}%0AТелефон: ${encodeURIComponent(formData.phone)}%0AСообщение: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/77077515144?text=${whatsappMessage}`, '_blank');
  };
  return <section id="contact" className="py-12 md:py-16 bg-[#242424]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#383838] border border-gray-600 rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-200 uppercase tracking-wide mb-4 md:mb-6">
              Свяжитесь с нами
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Имя *" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-500 focus:border-[#c41e3a]" />
                <Input placeholder="Телефон *" type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-500 focus:border-[#c41e3a]" />
              </div>
              <Textarea placeholder="Сообщение" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} className="bg-[#2a2a2a] border-gray-600 text-white placeholder:text-gray-500 focus:border-[#c41e3a] min-h-[100px]" />
              <Button type="submit" size="lg" className="w-full bg-[#c41e3a] hover:bg-[#a01830] text-white uppercase tracking-wider text-sm md:text-base py-5 md:py-6">
                Отправить заявку
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#383838] border border-gray-600 rounded-lg p-4 md:p-6 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e3a]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Телефон</p>
                  <a href="tel:+77077515144" className="text-white hover:text-[#c41e3a] transition-colors block">
                    +7 (707) 751-51-44
                  </a>
                  <a href="tel:+77715257082" className="text-white hover:text-[#c41e3a] transition-colors block">
                    +7 (771) 525-70-82
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e3a]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Почта</p>
                  <a href="mailto:andreyyakovenko1603@mail.ru" className="text-white hover:text-[#c41e3a] transition-colors">
                    andrey@arttimelogistics.kz
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e3a]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Адрес</p>
                  <p className="text-white">г. Алматы, ул. Мынбаева 151</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactBlack;