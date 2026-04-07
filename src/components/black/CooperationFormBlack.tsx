import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "77077515144";

const CooperationFormBlack = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const text = [
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      comment.trim() ? `Комментарий: ${comment.trim()}` : "",
    ]
      .filter(Boolean)
      .map((s) => encodeURIComponent(s))
      .join("%0A");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="cooperation" className="py-12 md:py-20 bg-[#0047BB]">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide pb-2 border-b-2 border-white/40 inline-block">
            Предложение о сотрудничестве
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20 space-y-4"
        >
          <Input
            placeholder="Имя *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 text-lg md:text-xl h-12 md:h-14"
          />
          <Input
            placeholder="Номер телефона *"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 text-lg md:text-xl h-12 md:h-14"
          />
          <Textarea
            placeholder="Комментарий (необязательно)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[#0047BB] focus:ring-2 focus:ring-[#0047BB]/20 min-h-[120px] resize-none text-lg md:text-xl"
          />
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="w-full bg-white hover:bg-white/90 text-[#0047BB] font-bold uppercase tracking-wider text-lg md:text-xl py-6 md:py-7 relative z-10"
          >
            <span className="relative z-10">Отправить предложение</span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CooperationFormBlack;
