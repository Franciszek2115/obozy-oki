import React from 'react';
import { motion } from "framer-motion";
import { Check, Star, Calendar, Bus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mainPackage = {
    name: "Obóz OKI 2026",
    price: "2 390",
    description: "Pełny pakiet obozowy – wszystko czego potrzebujesz",
    features: [
      "8 dni i 7 nocy w Ośrodku Wierna",
      "Pełne wyżywienie (3 posiłki dziennie)",
      "Wszystkie warsztaty algorytmiczne",
      "Wykłady gości specjalnych",
      "Wycieczki i integracja",
      "Zajęcia dostosowane do poziomu",
      "Materiały edukacyjne",
      "Ubezpieczenie NNW",
      "Opieka kadry 24/7",
      "Certyfikat uczestnictwa",
      "Dostęp do platformy online",
      "Koszulka obozowa"
    ]
  };

  const transportOption = {
    label: "Transport autokarem (opcjonalnie)",
    price: "150",
    description: "Dojazd na obóz z wybranych miast"
  };

  const included = [
    "Zakwaterowanie w pokojach 2-4 osobowych",
    "Pełne wyżywienie (śniadanie, obiad, kolacja)",
    "Wszystkie warsztaty algorytmiczne",
    "Wykłady gości specjalnych",
    "Wycieczka górska z przewodnikiem",
    "Aktywności integracyjne",
    "Materiały dydaktyczne",
    "Ubezpieczenie NNW",
    "Opieka wykwalifikowanej kadry 24/7"
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Cennik</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Wybierz swój pakiet
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Inwestycja w przyszłość, która się zwraca. Wszystkie pakiety zawierają pełny program obozu.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-10 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-8 h-8 text-cyan-600" />
                <h3 className="text-3xl font-bold text-slate-900">{mainPackage.name}</h3>
                <Star className="w-8 h-8 text-cyan-600" />
              </div>
              
              <p className="text-center text-slate-600 mb-8 text-lg">{mainPackage.description}</p>
              
              <div className="text-center mb-8">
                <div className="inline-block">
                  <span className="text-6xl font-bold text-slate-900">{mainPackage.price}</span>
                  <span className="text-2xl text-slate-500 ml-2">PLN</span>
                  <div className="text-slate-500 text-sm mt-1">za osobę</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {mainPackage.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Bus className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-900 mb-2">{transportOption.label}</h4>
                    <p className="text-slate-600 text-sm mb-3">{transportOption.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-slate-900">+{transportOption.price}</span>
                      <span className="text-slate-500">PLN</span>
                      <span className="text-slate-500 text-sm ml-2">(w obie strony)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Trasy: Warszawa • Łódź • Częstochowa • Katowice • Kraków
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full py-7 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/30"
              >
                Zarezerwuj miejsce teraz
              </Button>

              <p className="text-center text-slate-500 text-sm mt-4">
                Zaliczka: 500 PLN • Pozostała kwota: do 1 sierpnia 2026
              </p>
            </div>
          </motion.div>
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 border border-slate-200"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Co zawiera każdy pakiet?</h3>
              <p className="text-slate-500">Pełen komfort i bezpieczeństwo</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <Calendar className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Early Bird</h4>
            <p className="text-slate-600 text-sm">Do 30.04.2026</p>
            <p className="text-amber-700 font-semibold mt-2">-150 PLN rabatu</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
            <Bus className="w-8 h-8 text-cyan-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Transport</h4>
            <p className="text-slate-600 text-sm">Autokar w obie strony</p>
            <p className="text-cyan-700 font-semibold mt-2">+150 PLN</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
            <Star className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Rodzeństwo</h4>
            <p className="text-slate-600 text-sm">Zniżka dla rodzeństwa</p>
            <p className="text-purple-700 font-semibold mt-2">-10% na drugą osobę</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}