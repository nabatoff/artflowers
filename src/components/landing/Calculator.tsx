import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Truck, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

const Calculator = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    cargoType: 'regular',
    weight: '',
    volume: '',
  });
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCargoTypeChange = (type: 'regular' | 'refrigerated') => {
    setFormData(prev => ({ ...prev, cargoType: type }));
  };

  const handleCalculate = () => {
    const weight = parseFloat(formData.weight) || 0;
    const volume = parseFloat(formData.volume) || 0;
    
    if (weight > 0 || volume > 0) {
      // Simple estimation formula (for demo purposes)
      const baseRate = formData.cargoType === 'refrigerated' ? 150 : 100;
      const weightCost = weight * baseRate;
      const volumeCost = volume * 5000;
      const total = Math.max(weightCost, volumeCost) + 50000; // Base fee
      setEstimatedCost(Math.round(total));
    }
  };

  return (
    <section id="calculator" className="py-24 lg:py-32">
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CalcIcon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.calculator.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.calculator.subtitle}
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* From */}
              <div className="space-y-2">
                <Label htmlFor="from">{t.calculator.from}</Label>
                <Input
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  placeholder={t.calculator.fromPlaceholder}
                  className="h-12 bg-background"
                />
              </div>

              {/* To */}
              <div className="space-y-2">
                <Label htmlFor="to">{t.calculator.to}</Label>
                <Input
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  placeholder={t.calculator.toPlaceholder}
                  className="h-12 bg-background"
                />
              </div>
            </div>

            {/* Cargo Type */}
            <div className="mb-8">
              <Label className="mb-3 block">{t.calculator.cargoType}</Label>
              <div className="flex gap-4">
                <button
                  onClick={() => handleCargoTypeChange('regular')}
                  className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                    formData.cargoType === 'regular'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">{t.calculator.regular}</span>
                </button>
                <button
                  onClick={() => handleCargoTypeChange('refrigerated')}
                  className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                    formData.cargoType === 'refrigerated'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Snowflake className="w-5 h-5" />
                  <span className="font-medium">{t.calculator.refrigerated}</span>
                </button>
              </div>
            </div>

            {/* Weight & Volume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="weight">{t.calculator.weight}</Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="0"
                  className="h-12 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">{t.calculator.volume}</Label>
                <Input
                  id="volume"
                  name="volume"
                  type="number"
                  value={formData.volume}
                  onChange={handleChange}
                  placeholder="0"
                  className="h-12 bg-background"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={handleCalculate}
              size="lg" 
              className="w-full h-14 text-lg glow-primary"
            >
              {t.calculator.calculate}
            </Button>

            {/* Result */}
            {estimatedCost !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center"
              >
                <p className="text-muted-foreground mb-2">{t.calculator.estimatedCost}</p>
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {estimatedCost.toLocaleString()} {t.calculator.currency}
                </p>
                <p className="text-sm text-muted-foreground mt-3">{t.calculator.disclaimer}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
