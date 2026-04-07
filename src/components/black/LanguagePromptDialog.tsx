import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const SESSION_KEY = 'artflowers-lang-prompt-seen';

const choices: { code: Language; label: string; hint: string }[] = [
  { code: 'ru', label: 'Русский', hint: 'Russian' },
  { code: 'kz', label: 'Қазақша', hint: 'Kazakh' },
  { code: 'en', label: 'English', hint: 'Ағылшын' },
];

/**
 * При запуске лендинга (раз на сессию вкладки) — выбор языка; дальше — переключатель в шапке.
 */
const LanguagePromptDialog = () => {
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const pick = (lang: Language) => {
    setLanguage(lang);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}} modal>
      <DialogContent
        className={cn(
          'z-[10050] max-w-[min(100vw-2rem,22rem)] gap-6 border-[#0047BB]/20 bg-white p-6 sm:p-8',
          '[&>button]:hidden'
        )}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-2 text-center sm:text-center">
          <DialogTitle className="text-xl font-bold text-[#0047BB] sm:text-2xl">Язык сайта</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Тілді таңдаңыз · Choose language
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          {choices.map(({ code, label, hint }) => (
            <button
              key={code}
              type="button"
              onClick={() => pick(code)}
              className="w-full rounded-lg border-2 border-[#0047BB]/25 bg-[#0047BB]/5 py-4 text-left px-5 transition-colors hover:border-[#0047BB] hover:bg-[#0047BB]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047BB]"
            >
              <span className="block text-lg font-bold text-[#0047BB]">{label}</span>
              <span className="text-sm text-gray-500">{hint}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguagePromptDialog;
