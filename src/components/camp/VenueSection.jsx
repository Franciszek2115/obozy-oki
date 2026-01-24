import React from 'react';
import { motion } from "framer-motion";
import { MapPin, Wifi, UtensilsCrossed, BedDouble, TreePine, Dumbbell, Monitor, Car } from "lucide-react";

export default function VenueSection() {
  const amenities = [
    { icon: BedDouble, label: "Pokoje 2-4 osobowe", desc: "z łazienkami" },
    { icon: UtensilsCrossed, label: "Pełne wyżywienie", desc: "3 posiłki dziennie" },
    { icon: Wifi, label: "Internet", desc: "Wi-Fi w całym ośrodku" },
    { icon: Monitor, label: "Sale wykładowe", desc: "do 130 osób" },
    { icon: TreePine, label: "Otoczenie", desc: "las i góry" },
    { icon: Dumbbell, label: "Infrastruktura", desc: "boiska, kort, siłownia" },
    { icon: Car, label: "Parking", desc: "bezpłatny" },
    { icon: MapPin, label: "Lokalizacja", desc: "Beskid Sądecki" }
  ];

  return (
    <section id="venue" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Lokalizacja</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Ośrodek w Grybowie
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ośrodek Szkoleniowo-Wypoczynkowy Politechniki Warszawskiej położony na malowniczym 
            wzgórzu z widokiem na Beskid Sądecki – idealne miejsce do nauki i wypoczynku.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="Ośrodek w Grybowie"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-slate-800">Grybów, ul. Chłodna 16</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Wypoczynek w sercu Beskidu Sądeckiego
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Grybów to malownicze miasteczko położone w Beskidzie Sądeckim, otoczone pięknymi 
              zalesionymi górami. Ośrodek znajduje się na wzgórzu, w sąsiedztwie lasu i rzeki Biała, 
              co zapewnia ciszę, spokój i bliskość natury.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Cztery pawilony rozmieszczone na dużym, zielonym terenie tworzą idealne warunki 
              do nauki, integracji i aktywnego wypoczynku. Ośrodek posiada wszelkie certyfikaty 
              do przyjmowania grup dzieci i młodzieży.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200"
                >
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{item.label}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Activities nearby */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Atrakcje w okolicy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Szlaki górskie</h4>
              <p className="text-slate-600 text-sm">
                Jaworzyna Krynicka, Góra Jaworze z wieżą widokową, malownicze trasy piesze i rowerowe
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M5 18V8l7-4 7 4v10M12 18V8" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Zabytki</h4>
              <p className="text-slate-600 text-sm">
                Szlak Architektury Drewnianej, zabytkowe cerkwie łemkowskie, Biecz – „polski Carcassonne"
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Aktywności</h4>
              <p className="text-slate-600 text-sm">
                Kąpielisko na rzece Biała, zalew Klimkówka, baseny termalne, spływ Dunajcem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}