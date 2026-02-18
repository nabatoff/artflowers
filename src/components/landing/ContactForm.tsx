import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface FormErrors {
  name?: string;
  phone?: string;
}

const WHATSAPP_NUMBER = '77077515144';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Имя обязательно';
        if (value.trim().length < 2) return 'Имя должно содержать минимум 2 символа';
        if (value.trim().length > 100) return 'Имя должно быть менее 100 символов';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Телефон обязателен';
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Неверный формат телефона';
        if (value.replace(/\D/g, '').length < 10) return 'Телефон должен содержать минимум 10 цифр';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    newErrors.name = validateField('name', formData.name);
    newErrors.phone = validateField('phone', formData.phone);
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, исправьте ошибки в форме",
        variant: "destructive",
      });
      return;
    }

    // Формируем сообщение для WhatsApp
    const message = `Здравствуйте! Меня зовут ${formData.name.trim()}.
Телефон: ${formData.phone.trim()}
${formData.message.trim() ? `Описание груза: ${formData.message.trim()}` : ''}`;

    // Открываем WhatsApp с заполненным сообщением
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 lg:py-32 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              {t.contactForm.title}
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground px-2">
              {t.contactForm.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-2xl sm:rounded-3xl border border-border bg-background p-5 sm:p-8 lg:p-12"
          >
            {/* Name */}
            <div className="space-y-2 mb-4 sm:mb-6">
              <Label htmlFor="name" className="text-sm sm:text-base">{t.contactForm.name} *</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-11 sm:h-12 bg-card text-base ${errors.name ? 'border-destructive' : ''}`}
                  maxLength={100}
                  required
                  autoComplete="name"
                />
                {errors.name && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2 mb-4 sm:mb-6">
              <Label htmlFor="phone" className="text-sm sm:text-base">{t.contactForm.phone} *</Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-11 sm:h-12 bg-card text-base ${errors.phone ? 'border-destructive' : ''}`}
                  required
                  autoComplete="tel"
                />
                {errors.phone && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                )}
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2 mb-6 sm:mb-8">
              <Label htmlFor="message" className="text-sm sm:text-base">{t.contactForm.message}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contactForm.messagePlaceholder}
                className="min-h-[100px] sm:min-h-[120px] bg-card resize-none text-base"
                maxLength={1000}
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              size="lg" 
              className="w-full h-12 sm:h-14 text-base sm:text-lg glow-primary"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t.contactForm.submit}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;