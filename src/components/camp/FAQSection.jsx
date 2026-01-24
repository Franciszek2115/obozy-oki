import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Dla kogo jest przeznaczony obóz OKI?",
      answer: "Obóz jest skierowany do uczniów szkół podstawowych (klasy 6-8) i średnich, którzy interesują się programowaniem i algorytmiką. Nie wymagamy wcześniejszego doświadczenia olimpijskiego – przyjmujemy zarówno początkujących, jak i zaawansowanych uczestników. Program jest dostosowany do różnych poziomów zaawansowania."
    },
    {
      question: "Jaki poziom programowania jest wymagany?",
      answer: "Na obozie programujemy w C++. Mamy grupy od zupełnie początkujących (programowanie od zera) po zaawansowanych olimpijczyków. Pierwszego dnia przeprowadzamy test, który pomoże nam przydzielić Cię do odpowiedniej grupy - każdy znajdzie odpowiednie dla siebie wyzwania."
    },
    {
      question: "Czy muszę mieć własny laptop?",
      answer: "Tak, każdy uczestnik musi mieć własny laptop z działającą przeglądarką internetową (Chrome, Firefox lub Edge). Laptop może być dowolnie stary – jedyne wymaganie to możliwość korzystania z platform edukacyjnych online. Zalecamy zabranie starszego laptopa, ponieważ młodzież będzie go często przenosić."
    },
    {
      question: "Jak wygląda zakwaterowanie?",
      answer: "Uczestnicy są zakwaterowani w pokojach 2-4 osobowych z pełnym węzłem sanitarnym. Pokoje są wyposażone w łóżka, szafy, biurka oraz dostęp do Wi-Fi. Dziewczęta i chłopcy są zakwaterowani oddzielnie. Na życzenie możemy uwzględnić preferencje dotyczące zakwaterowania z konkretnym kolegą/koleżanką."
    },
    {
      question: "Jak dotrę na obóz?",
      answer: "Oferujemy dwie opcje: 1) Dojazd własny bezpośrednio do ośrodka w Grybowie (ul. Chłodna 16). 2) Transport autokarem organizowanym przez OKI z następujących miast: Warszawa, Łódź, Częstochowa, Katowice, Kraków. Transport autokarem jest płatny dodatkowo lub zawarty w pakiecie z transportem."
    },
    {
      question: "Czy obóz jest bezpieczny?",
      answer: "Bezpieczeństwo uczestników jest naszym priorytetem. Ośrodek jest ogrodzony i posiada wszystkie wymagane certyfikaty do przyjmowania grup dzieci i młodzieży. Kadra jest przeszkolona w zakresie pierwszej pomocy. Wszystkie wycieczki odbywają się pod opieką wykwalifikowanych przewodników. Każdy uczestnik jest objęty ubezpieczeniem NNW."
    },
    {
      question: "Co zabrać na obóz?",
      answer: "Najważniejsze rzeczy: laptop z ładowarką, legitymacja szkolna, podpisane dokumenty obozowe (formularz zgody), buty do chodzenia po górach, strój sportowy, ręcznik, klapki pod prysznic. Zalecamy także: kurtkę przeciwdeszczową, bluzę/sweter, nakrycie głowy, krem z filtrem SPF, preparat przeciw owadom."
    },
    {
      question: "Jak mogę się zapisać?",
      answer: "Rejestracja odbywa się poprzez formularz na naszej stronie. Po wypełnieniu formularza otrzymasz email z potwierdzeniem i danymi do wpłaty zaliczki. Miejsca są ograniczone (60 osób), więc rekomendujemy wczesną rejestrację. Zaliczka wynosi 500 PLN i jest pobierana w ciągu 7 dni od rejestracji."
    },
    {
      question: "Czy mogę zrezygnować z obozu?",
      answer: "Tak, rezygnacja jest możliwa. W przypadku rezygnacji do 30 dni przed obozem zwracamy pełną kwotę minus koszty administracyjne (100 PLN). Przy rezygnacji 14-30 dni przed obozem zwracamy 50% wpłaconej kwoty. Rezygnacja w terminie krótszym niż 14 dni przed obozem nie podlega zwrotowi, chyba że miejsce zostanie zapełnione przez innego uczestnika."
    },
    {
      question: "Czy rodzice mogą odwiedzić dziecko podczas obozu?",
      answer: "Ze względu na intensywny program i bezpieczeństwo uczestników, nie organizujemy odwiedzin rodziców podczas trwania obozu. Rodzice mogą być w stałym kontakcie telefonicznym z koordynatorem obozu. Regularnie publikujemy relacje i zdjęcia na naszym profilu na Facebooku, aby rodzice mogli śledzić przebieg obozu."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-slate-600">
            Masz pytania? Znajdź odpowiedzi poniżej lub skontaktuj się z nami.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-cyan-50 border-cyan-200' 
                    : 'bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      openIndex === index ? 'bg-cyan-200' : 'bg-slate-200'
                    }`}>
                      <HelpCircle className={`w-4 h-4 ${
                        openIndex === index ? 'text-cyan-700' : 'text-slate-500'
                      }`} />
                    </div>
                    <h3 className={`font-semibold text-left ${
                      openIndex === index ? 'text-cyan-900' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-cyan-600' : 'text-slate-400'
                  }`} />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 mt-4 pl-12 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200"
        >
          <p className="text-slate-600 mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a 
            href="mailto:kontakt@oki.org.pl"
            className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
          >
            Napisz do nas: kontakt@oki.org.pl
          </a>
        </motion.div>
      </div>
    </section>
  );
}