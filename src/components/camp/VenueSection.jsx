import React from 'react';
import { motion } from "framer-motion";
import { MapPin, Wifi, UtensilsCrossed, BedDouble, TreePine, Dumbbell, Monitor, Car } from "lucide-react";

export default function VenueSection() {
  const amenities = [
  { icon: BedDouble, label: "Pokoje 2-4 osobowe", desc: "z łazienkami" },
  { icon: UtensilsCrossed, label: "Pełne wyżywienie", desc: "3 posiłki dziennie" },
  { icon: Wifi, label: "Internet", desc: "dostęp na terenie" },
  { icon: Monitor, label: "Sale konferencyjne", desc: "wyposażone" },
  { icon: TreePine, label: "Otoczenie", desc: "las i rzeka" },
  { icon: Dumbbell, label: "Boisko", desc: "wielofunkcyjne" },
  { icon: Car, label: "Parking", desc: "bezpłatny" },
  { icon: MapPin, label: "Lokalizacja", desc: "25 km od Kielc" }];


  return (
    <section id="venue" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Lokalizacja</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Ośrodek Wczasowy Wierna
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Położony w malowniczym Bocheńcu, 25 km od Kielc, wśród pięknych lasów i nad 
            przepływającą Wierną Rzeką – raj dla miłośników przyrody i spokoju.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <div className="relative grid grid-cols-2 gap-3">
              <img
                src="https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/b3ae46fd2_image.png"
                alt="Ośrodek Wierna - budynek główny"
                className="rounded-2xl shadow-xl w-full h-48 object-cover col-span-2" />
              
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                alt="Pokój w ośrodku"
                className="rounded-2xl shadow-lg w-full h-32 object-cover" />
              
              <img
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&q=80"
                alt="Okolica ośrodka"
                className="rounded-2xl shadow-lg w-full h-32 object-cover" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-slate-800">Bocheniec 55B</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Czyste powietrze i piękna przyroda Świętokrzyskiego
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">Bocheniec to cichy zakątek Kielecczyzny położony ok. 25 km od stolicy województwa. Atrakcją tego miejsca jest przede wszystkim czyste, nieskażone powietrze oraz uroki lokalnego krajobrazu, w którym dominuje las i woda – Wierna Rzeka przepływa tuż obok.



            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              W niedalekiej odległości znajduje się malowniczo położony zalew w Bolminie – raj 
              dla wędkarzy i uprawiających sporty wodne. Ośrodek to znakomita baza wypadowa do 
              zwiedzania Gór Świętokrzyskich i najciekawszych zabytków regionu.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((item, index) =>
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
                
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{item.label}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>


      </div>
    </section>);

}