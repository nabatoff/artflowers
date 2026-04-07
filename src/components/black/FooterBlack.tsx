import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const FooterBlack = () => {
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  return (
    <>
      <footer className="py-6 border-t border-white/20 bg-[#003399]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              Artflowers © 2024. Все права защищены.
            </p>
            <button
              onClick={() => setIsOfferOpen(true)}
              className="text-white hover:text-white/70 font-medium transition-colors text-sm"
            >
              Публичная оферта
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={isOfferOpen} onOpenChange={setIsOfferOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] bg-white border-gray-200 text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">Публичная оферта</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Настоящий Договор публичной оферты (далее – Оферта) адресован физическим и юридическим лицам (далее –
                Покупатель) и определяет условия оказания услуг, представленных на сайте https://art-flowers.kz (далее
                – Сайт).
              </p>

              <h3 className="text-gray-900 font-semibold pt-2">1. Общие положения</h3>
              <p>
                1.1. Данная Оферта является публичным договором в соответствии со статьей 395 Гражданского кодекса
                Республики Казахстан.
              </p>
              <p>
                1.2. Поставщик услуг – ИП Floral Express, ИИН 840703401219, адрес: 6-й микрорайон, 11.
              </p>
              <p>
                1.3. Заказчик – лицо, совершившее обращение к Поставщику услуг через формы обратной связи на Сайте, по
                телефону или в мессенджерах, и выразившее намерение заказать услугу.
              </p>
              <p>
                1.4. Принятием (акцептом) условий настоящей Оферты является оформление заявки любым доступным способом:
                через кнопку связи на Сайте, по телефону или в мессенджере WhatsApp. С момента подтверждения заказа
                и/или произведения оплаты Заказчик считается согласившимся со всеми условиями Оферты.
              </p>

              <h3 className="text-gray-900 font-semibold pt-2">2. Порядок оформления заказа</h3>
              <p>
                2.1. Информация об услугах на Сайте носит ознакомительный характер. Перечень, объем, технические
                характеристики, сроки оказания услуг и их итоговая стоимость согласовываются Сторонами индивидуально в
                ходе консультации через средства связи (WhatsApp, телефон).
              </p>
              <p>
                2.2. Заказ считается принятым в работу только после его подтверждения менеджером и получения
                оплаты/предоплаты.
              </p>

              <h3 className="text-gray-900 font-semibold pt-2">3. Ответственность и персональные данные</h3>
              <p>
                3.1. Оставляя заявку на Сайте или в мессенджере, Покупатель дает согласие на обработку персональных
                данных для исполнения Заказа.
              </p>

              <h3 className="text-gray-900 font-semibold pt-2">4. Контакты</h3>
              <p>
                4.1. По всем вопросам, жалобам и предложениям обращаться по электронной почте:
                l.kurlovich@artflowers.kz
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterBlack;
