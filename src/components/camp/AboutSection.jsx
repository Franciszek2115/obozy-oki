import React from 'react';
import { motion } from "framer-motion";
import { Code2, Users, Trophy, Sparkles, Brain, Heart } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Code2,
      title: "Programowanie",
      description: "Intensywne warsztaty algorytmiki i programowania prowadzone przez doświadczonych trenerów olimpijskich."
    },
    {
      icon: Users,
      title: "Społeczność",
      description: "Spotkaj rówieśników z całej Polski, którzy dzielą Twoją pasję do informatyki i rozwiązywania problemów."
    },
    {
      icon: Trophy,
      title: "Olimpiada",
      description: "Przygotuj się do Olimpiady Informatycznej pod okiem finalistów i zwycięzców poprzednich edycji."
    },
    {
      icon: Brain,
      title: "Rozwój",
      description: "Poszerzaj horyzonty – od algorytmów po sztuczną inteligencję, od teorii do praktycznych projektów."
    },
    {
      icon: Sparkles,
      title: "Przygoda",
      description: "Wycieczki górskie, gry integracyjne, wieczorne pogaduchy – obóz to nie tylko nauka!"
    },
    {
      icon: Heart,
      title: "Przyjaźnie",
      description: "Znajdź przyjaciół na całe życie wśród ludzi, którzy Cię rozumieją i wspierają."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">O obozie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Więcej niż obóz informatyczny
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Obóz OKI to wyjątkowe połączenie intensywnej nauki programowania, wspaniałej atmosfery 
            i niezapomnianych przygód w górach. To miejsce, gdzie rodzą się przyjaźnie i pasje na całe życie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-200 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dla kogo jest ten obóz?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Obóz jest skierowany do uczniów szkół podstawowych i średnich, którzy interesują się 
                programowaniem i algorytmiką. Niezależnie od tego, czy dopiero zaczynasz przygodę 
                z kodem, czy już startowałeś w olimpiadzie – znajdziesz tu coś dla siebie.
              </p>
              <ul className="space-y-4">
                {[
                  "Uczniowie klas 6-8 szkoły podstawowej",
                  "Uczniowie szkół średnich (każdy rocznik)",
                  "Pasjonaci algorytmiki i programowania",
                  "Osoby przygotowujące się do Olimpiady Informatycznej"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                alt="Młodzi programiści"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">lat doświadczenia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}