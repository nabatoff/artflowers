import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const ContactFormLight = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredContact: 'phone',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...parsed, message: prev.message }));
      } catch (e) {
        // Игнорируем ошибки парсинга
      }
    }
  }, []);

  // Сохранение данных в localStorage
  useEffect(() => {
    if (formData.name || formData.phone || formData.email) {
      const dataToSave = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        preferredContact: formData.preferredContact,
      };
      localStorage.setItem('contactFormData', JSON.stringify(dataToSave));
    }
  }, [formData.name, formData.phone, formData.email, formData.preferredContact]);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Имя обязательно';
        if (value.trim().length < 2) return 'Имя должно содержать минимум 2 символа';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Телефон обязателен';
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Неверный формат телефона';
        if (value.replace(/\D/g, '').length < 10) return 'Телефон должен содержать минимум 10 цифр';
        return undefined;
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Неверный формат email';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Валидация в реальном времени
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleContactMethodChange = (method: string) => {
    setFormData(prev => ({ ...prev, preferredContact: method }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация всех полей
    const newErrors: FormErrors = {};
    newErrors.name = validateField('name', formData.name);
    newErrors.phone = validateField('phone', formData.phone);
    if (formData.email) {
      newErrors.email = validateField('email', formData.email);
    }
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.phone || newErrors.email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, исправьте ошибки в форме",
        variant: "destructive",
      });
      return;
    }

    // Очистка localStorage после успешной отправки
    localStorage.removeItem('contactFormData');
    
    setIsSubmitted(true);
    toast({
      title: "Успешно!",
      description: t.contactForm.success,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contacts" className="py-24 lg:py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4 text-gray-900">{t.contactForm.success}</h3>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-4 border-gray-300 text-gray-700"
            >
              Отправить ещё
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacts" className="py-24 lg:py-32 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {t.contactForm.title}
            </h2>
            <p className="text-xl text-gray-600">
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
            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">{t.contactForm.name} *</Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 bg-white text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    required
                  />
                  {errors.name && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">{t.contactForm.phone} *</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`h-12 bg-white text-gray-900 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                    required
                  />
                  {errors.phone && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                  )}
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="email" className="text-gray-700">{t.contactForm.email}</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 bg-white text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.email && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="message" className="text-gray-700">{t.contactForm.message}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contactForm.messagePlaceholder}
                className="min-h-[120px] bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Preferred Contact Method */}
            <div className="mb-8">
              <Label className="mb-3 block text-gray-700">{t.contactForm.preferredContact}</Label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleContactMethodChange('phone')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                    formData.preferredContact === 'phone'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t.contactForm.phoneCall}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleContactMethodChange('whatsapp')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                    formData.preferredContact === 'whatsapp'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">{t.contactForm.whatsapp}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleContactMethodChange('telegram')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                    formData.preferredContact === 'telegram'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span className="font-medium">{t.contactForm.telegram}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              size="lg" 
              className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(192,13,30,0.3)]"
            >
              <Send className="w-5 h-5 mr-2" />
              {t.contactForm.submit}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormLight;
