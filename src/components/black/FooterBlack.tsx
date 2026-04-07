import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterBlack = () => {
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const { t } = useLanguage();
  const f = t.af.footer;

  return (
    <>
      <footer className="border-t border-white/20 bg-[#003399] py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-white/60 sm:text-left">{f.copyright}</p>
            <button
              type="button"
              onClick={() => setIsOfferOpen(true)}
              className="text-sm font-medium text-white transition-colors hover:text-white/70"
            >
              {f.offer}
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={isOfferOpen} onOpenChange={setIsOfferOpen}>
        <DialogContent className="max-h-[80vh] max-w-3xl border-gray-200 bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">{f.offerTitle}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p>{f.offerP1}</p>
              <h3 className="pt-2 font-semibold text-gray-900">{f.offerH1}</h3>
              <p>{f.offerP2}</p>
              <p>{f.offerP3}</p>
              <p>{f.offerP4}</p>
              <p>{f.offerP5}</p>
              <h3 className="pt-2 font-semibold text-gray-900">{f.offerH2}</h3>
              <p>{f.offerP6}</p>
              <p>{f.offerP7}</p>
              <h3 className="pt-2 font-semibold text-gray-900">{f.offerH3}</h3>
              <p>{f.offerP8}</p>
              <h3 className="pt-2 font-semibold text-gray-900">{f.offerH4}</h3>
              <p>{f.offerP9}</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterBlack;
