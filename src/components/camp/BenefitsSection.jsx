import React from 'react';
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Wiedza od najlepszych",
      description: "Ucz się od finalistów i zwycięzców Olimpiady Informatycznej, którzy dzielą się swoim doświadczeniem i sprawdzonymi metodami.",
      highlight: "Kadra z TOP10 OI"
    },
    {
      title: "Intensywny program",
      description: "Ponad 30 godzin warsztatów algorytmicznych, wykładów tematycznych i sesji praktycznych w ciągu tygodnia.",
      highlight: "30+ godzin nauki"
    },
    {
      title: "Indywidualne podejście",
      description: "Grupy dostosowane do poziomu zaawansowania. Każdy znajdzie wyzwania odpowiednie dla siebie.",
      highlight: "3 poziomy grup"
    },
    {
      title: "Materiały na przyszłość",
      description: "Otrzymasz dostęp do zadań, rozwiązań i materiałów edukacyjnych, które posłużą Ci przez cały rok.",
      highlight: "Dostęp online"
    },
    {
      title: "Społeczność OKI",
      description: "Dołączysz do społeczności pasjonatów informatyki. Kontakty i przyjaźnie na lata.",
      highlight: "500+ absolwentów"
    },
    {
      title: "Pełen pakiet",
      description: "Zakwaterowanie, wyżywienie, transport autokarem, materiały, ubezpieczenie – wszystko w cenie.",
      highlight: "All inclusive"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Korzyści</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Co zyskujesz na obozie?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Obóz OKI to inwestycja w Twoją przyszłość. Oto co otrzymujesz, decydując się na wyjazd.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 h-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-300">
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTItNC0yIDItNC00IDItMiA0LTIgNCAyIDQgMnMyIDIgMiA0LTIgNC0yIDQgMiAyIDQgMiA0IDItMiA0IDQtMiAyLTQtMi00LTItNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="relative z-10">
            <div className="text-6xl text-white/30 font-serif mb-4">"</div>
            <p className="text-2xl md:text-3xl text-white font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              Najlepszy obóz życia, wspaniali ludzie, kadra, koledzy. W końcu było z kim porozmawiać 
              o marzeniach, problemach, celach. Nowe przyjaźnie i nowe autorytety. 
              Wszelkie oczekiwania wielokrotnie przebite!
            </p>
            <div className="text-cyan-200 font-medium">
              — Mama uczestnika obozu 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}