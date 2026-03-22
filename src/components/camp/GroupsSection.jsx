import React from 'react';
import { motion } from "framer-motion";
import { Users, Award, Rocket, Brain } from "lucide-react";

export default function GroupsSection() {
  const groups = [
    {
      name: "Programowanie od zera",
      level: "Poziom I",
      icon: Users,
      color: "emerald",
      description: "Uczymy się programować w C++ od zera. Żadne wcześniejsze doświadczenie nie jest wymagane – zaczynamy od absolutnych podstaw.",
      topics: [
        "Podstawy składni C++",
        "Zmienne, typy danych, operatory",
        "Instrukcje warunkowe i pętle",
        "Tablice i funkcje",
        "Pierwsze algorytmy"
      ],
      forWho: "Brak wymagań wstępnych – każdy jest mile widziany!"
    },
    {
      name: "Algorytmika od podstaw",
      level: "Poziom II",
      icon: Award,
      color: "cyan",
      description: "Poznajemy podstawowe algorytmy i struktury danych. Wymagana podstawowa znajomość programowania w C++.",
      topics: [
        "Wyszukiwanie binarne",
        "Algorytm gąsienicy",
        "Sito Eratostenesa",
        "Podstawowe struktury danych",
        "Wprowadzenie do grafów"
      ],
      forWho: "Znasz podstawy C++ i chcesz poznać algorytmikę"
    },
    {
      name: "Algorytmika średniozaawansowana",
      level: "Poziom III",
      icon: Rocket,
      color: "blue",
      description: "Trudniejsze algorytmy i zaawansowane struktury danych. Wymagana znajomość materiału z poziomów niższych.",
      topics: [
        "Zaawansowane struktury danych",
        "Problemy grafowe",
        "Programowanie dynamiczne",
        "Teoria liczb",
        "Wyszukiwanie binarne – zastosowania"
      ],
      forWho: "Znasz podstawową algorytmikę i chcesz iść dalej"
    },
    {
      name: "Algorytmika zaawansowana",
      level: "Poziom IV",
      icon: Brain,
      color: "purple",
      description: "Zajęcia w formie symulacji zawodów OI. Codziennie trzy zadania do rozwiązania w ciągu pięciu godzin – tak jak na prawdziwej olimpiadzie.",
      topics: [
        "Symulacja zawodów Olimpiady",
        "Zaawansowane DP i optymalizacje",
        "Algorytmy tekstowe",
        "Geometria obliczeniowa",
        "Przepływy w sieciach"
      ],
      forWho: "Przygotowanie do II etapu i finału OI Szkół Średnich"
    }
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      icon: "bg-emerald-500",
      text: "text-emerald-700",
      hover: "hover:border-emerald-300"
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      icon: "bg-cyan-500",
      text: "text-cyan-700",
      hover: "hover:border-cyan-300"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-500",
      text: "text-blue-700",
      hover: "hover:border-blue-300"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-500",
      text: "text-purple-700",
      hover: "hover:border-purple-300"
    }
  };

  return (
    <section id="groups" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Grupy i poziomy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Znajdź swoją grupę
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mamy 4 grupy – od zupełnych początków po przygotowanie do finału OI. 
            W trakcie obozu możesz dowolnie zmieniać grupy. Jedynym językiem programowania jest C++.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {groups.map((group, index) => {
            const colors = colorClasses[group.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`${colors.bg} rounded-3xl p-8 border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center`}>
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{group.name}</h3>
                    <span className={`text-sm font-semibold ${colors.text}`}>{group.level}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{group.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Tematy zajęć:</h4>
                  <ul className="space-y-2">
                    {group.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${colors.bg} border ${colors.border} rounded-xl p-4 mt-6`}>
                  <p className={`text-sm font-medium ${colors.text}`}>
                    {group.forWho}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-10 border border-slate-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Nie jesteś pewien, do której grupy należysz?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pierwszego dnia obozu przeprowadzimy krótki test, który pomoże nam przydzielić Cię do odpowiedniej grupy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                W trakcie obozu możesz dowolnie zmieniać grupy – jeśli materiał jest za łatwy lub za trudny, po prostu przejdź wyżej lub niżej. Każda grupa ma formę warsztatową, a wymaganiem każdego poziomu jest znajomość materiału z grup niższych.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}