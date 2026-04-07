import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '77077515144';

const CooperationFormBlack = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const text = [
      `${t.af.form.waName}: ${name.trim()}`,
      `${t.af.form.waPhone}: ${phone.trim()}`,
      comment.trim() ? `${t.af.form.waComment}: ${comment.trim()}` : '',
    ]
      .filter(Boolean)
      .map((s) => encodeURIComponent(s))
      .join('%0A');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="cooperation" className="bg-[#0047BB] py-12 md:py-20">
      <div className="container mx-auto max-w-2xl px-4 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="inline-block border-b-2 border-white/40 pb-2 text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
            {t.af.form.title}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-white/20 bg-white/10 p-6 md:p-8"
        >
          <Input
            placeholder={t.af.form.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-12 border-gray-200 bg-white text-lg text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 md:h-14 md:text-xl"
          />
          <Input
            placeholder={t.af.form.phone}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="h-12 border-gray-200 bg-white text-lg text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 md:h-14 md:text-xl"
          />
          <Textarea
            placeholder={t.af.form.comment}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[120px] resize-none border-gray-200 bg-white text-lg text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 md:text-xl"
          />
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="relative z-10 w-full bg-white py-6 text-lg font-bold uppercase tracking-wider text-[#0047BB] hover:bg-white/90 md:py-7 md:text-xl"
          >
            <span className="relative z-10">{t.af.form.submit}</span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CooperationFormBlack;
