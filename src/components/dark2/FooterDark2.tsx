import { useLanguage } from '@/contexts/LanguageContext';

const FooterDark2 = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-6 border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-border">|</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark2;
