import React from 'react';
import { motion } from "framer-motion";
import { Check, Star, Calendar, Bus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: "Pakiet Podstawowy",
      price: "2 490",
      description: "Pełny udział w obozie z dojazdem własnym",
      features: [
        "7 dni i 6 nocy w ośrodku",
        "Pełne wyżywienie (3 posiłki)",
        "Wszystkie warsztaty i wykłady",
        "Materiały edukacyjne",
        "Wycieczka górska",
        "Ubezpieczenie NNW",
        "Certyfikat uczestnictwa"
      ],
      highlighted: false
    },
    {
      name: "Pakiet z Transportem",
      price: "2 890",
      description: "Wszystko w jednym – dojazd autokarem w cenie",
      features: [
        "Wszystko z pakietu podstawowego",
        "Transport autokarem (Warszawa/Łódź/Częstochowa/Katowice/Kraków)",
        "Opieka kadry podczas podróży",
        "Priorytetowa rezerwacja",
        "Koszulka obozowa",
        "Dostęp do materiałów online"
      ],
      highlighted: true,
      badge: "Najpopularniejszy"
    },
    {
      name: "Pakiet Premium",
      price: "3 290",
      description: "Dla tych, którzy chcą więcej",
      features: [
        "Wszystko z pakietu z transportem",
        "Pokój 2-osobowy (gwarancja)",
        "Indywidualna sesja mentorska",
        "Rozszerzony pakiet materiałów",
        "Bluza obozowa premium",
        "Priorytetowy dostęp do edycji 2027"
      ],
      highlighted: false
    }
  ];

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${pkg.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}
              
              <div className={`h-full rounded-3xl p-8 border-2 transition-all duration-300 ${
                pkg.highlighted 
                  ? 'bg-white border-cyan-500 shadow-xl shadow-cyan-500/20' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-900">{pkg.price}</span>
                  <span className="text-slate-500 ml-2">PLN</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-cyan-600' : 'text-slate-400'}`} />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 text-base font-medium rounded-xl transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Rezerwuj miejsce
                </Button>
              </div>
            </motion.div>
          ))}
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
            <p className="text-slate-600 text-sm">Do 31.03.2026</p>
            <p className="text-amber-700 font-semibold mt-2">-200 PLN rabatu</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
            <Bus className="w-8 h-8 text-cyan-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Tylko powrót</h4>
            <p className="text-slate-600 text-sm">Autokar w jedną stronę</p>
            <p className="text-cyan-700 font-semibold mt-2">180-220 PLN</p>
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