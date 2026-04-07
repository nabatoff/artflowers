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
import logoArtflowers from '@/assets/logo-artflowers-blue.png';

const SESSION_KEY = 'artflowers-lang-prompt-seen';

const choices: { code: Language; label: string; sub: string; badge: string }[] = [
  { code: 'ru', label: 'Русский', sub: 'Russian', badge: 'RU' },
  { code: 'kz', label: 'Қазақша', sub: 'Kazakh', badge: 'KZ' },
  { code: 'en', label: 'English', sub: 'English', badge: 'EN' },
];

/**
 * Выбор языка: автоматически при первом заходе за сессию; с шапки — та же модалка.
 */
const LanguagePromptDialog = () => {
  const {
    setLanguage,
    languagePickerOpen,
    setLanguagePickerOpen,
    languagePickerForceChoice,
    setLanguagePickerForceChoice,
  } = useLanguage();

  const pick = (lang: Language) => {
    setLanguage(lang);
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* ignore */
    }
    setLanguagePickerForceChoice(false);
    setLanguagePickerOpen(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next && languagePickerForceChoice) {
      return;
    }
    setLanguagePickerOpen(next);
    if (!next) {
      setLanguagePickerForceChoice(false);
    }
  };

  return (
    <Dialog open={languagePickerOpen} onOpenChange={handleOpenChange} modal>
      <DialogContent
        className={cn(
          'z-[10050] max-w-[min(100vw-1.5rem,40rem)] gap-0 overflow-hidden border-0 bg-transparent p-0 shadow-none',
          '[&>button]:hidden',
          'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95'
        )}
        onPointerDownOutside={(e) => {
          if (languagePickerForceChoice) e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (languagePickerForceChoice) e.preventDefault();
        }}
        onInteractOutside={(e) => {
          if (languagePickerForceChoice) e.preventDefault();
        }}
      >
        <div
          className={cn(
            'font-body relative rounded-2xl border border-white/20 shadow-[0_25px_80px_-12px_rgba(0,30,120,0.55)]',
            'bg-gradient-to-br from-[#0047BB] via-[#0040a8] to-[#003399]',
            'ring-1 ring-white/10'
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
            <DialogHeader className="space-y-4 text-center">
              <DialogDescription className="sr-only">
                Выберите язык интерфейса сайта ArtFlowers
              </DialogDescription>
              <div className="flex justify-center">
                <img
                  src={logoArtflowers}
                  alt="ArtFlowers"
                  className="h-10 w-auto brightness-0 invert sm:h-12 md:h-14"
                />
              </div>
              <DialogTitle className="text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-4xl">
                Язык сайта
              </DialogTitle>
              <p className="text-base text-white/75 md:text-lg">
                Тілді таңдаңыз · Choose your language
              </p>
            </DialogHeader>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:gap-5">
              {choices.map(({ code, label, sub, badge }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => pick(code)}
                  className={cn(
                    'group relative flex min-h-[7.5rem] flex-col items-center justify-center rounded-xl border border-white/20 bg-white/[0.08] px-4 py-6 text-center',
                    'transition-all duration-200 hover:border-white/40 hover:bg-white/[0.16] hover:shadow-lg',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80',
                    'active:scale-[0.98]'
                  )}
                >
                  <span className="mb-2 rounded-md bg-white/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white/90">
                    {badge}
                  </span>
                  <span className="text-xl font-bold leading-tight text-white md:text-2xl">{label}</span>
                  <span className="mt-1.5 text-sm text-white/60 transition-colors group-hover:text-white/75">
                    {sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguagePromptDialog;
