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
      description: "Dla osób, które zaczynają swoją przygodę z programowaniem lub mają podstawową wiedzę.",
      requirements: [
        "Znajomość podstaw programowania (C++/Python/Java)",
        "Umiejętność pisania prostych programów",
        "Pętle, instrukcje warunkowe, tablice",
        "Chęć nauki i rozwoju"
      ],
      topics: [
        "Wprowadzenie do złożoności obliczeniowej",
        "Podstawowe struktury danych",
        "Sortowanie i wyszukiwanie",
        "Algorytmy zachłanne - wprowadzenie",
        "Podstawy teorii grafów"
      ],
      forWho: "Idealna dla uczniów klas 6-8 SP oraz 1 LO/technikum"
    },
    {
      name: "Programowanie zaawansowane",
      level: "Poziom II",
      icon: Award,
      color: "cyan",
      description: "Dla uczestników z podstawową wiedzą algorytmiczną, którzy chcą pogłębić swoją wiedzę.",
      requirements: [
        "Biegła znajomość wybranego języka programowania",
        "Podstawowa znajomość struktur danych",
        "Rozwiązywanie prostych zadań algorytmicznych",
        "Znajomość notacji Big-O"
      ],
      topics: [
        "Programowanie dynamiczne",
        "Zaawansowane algorytmy grafowe (DFS, BFS, Dijkstra)",
        "Drzewa BST i przedziałowe",
        "Teoria liczb i kombinatoryka",
        "Wyszukiwanie binarne - zastosowania"
      ],
      forWho: "Polecana dla uczestników zawodów programistycznych"
    },
    {
      name: "Olimpiada Informatyczna",
      level: "Poziom III",
      icon: Rocket,
      color: "purple",
      description: "Dla doświadczonych olimpijczyków przygotowujących się do finałów OI i międzynarodowych zawodów.",
      requirements: [
        "Doświadczenie w zawodach programistycznych",
        "Zaawansowana znajomość algorytmów i struktur danych",
        "Programowanie dynamiczne - biegłość",
        "Rozwiązywanie zadań olimpijskich"
      ],
      topics: [
        "Zaawansowane programowanie dynamiczne",
        "Geometria obliczeniowa",
        "Algorytmy tekstowe (KMP, Z-algorithm)",
        "Przepływy w sieciach",
        "Zaawansowane struktury danych (Segment Tree, Fenwick)",
        "Techniki optymalizacji kodu"
      ],
      forWho: "Dla finalistów zawodów szczebla wojewódzkiego i wyżej"
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
            Dzielimy uczestników na grupy według poziomu zaawansowania, aby każdy mógł 
            uczyć się w optymalnym dla siebie tempie i otrzymać maksimum z zajęć.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-slate-500" />
                    Wymagania:
                  </h4>
                  <ul className="space-y-2">
                    {group.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

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
                Nie martw się! Pierwszego dnia obozu przeprowadzimy test kompetencji, który pomoże 
                nam przydzielić Cię do odpowiedniej grupy. Test jest krótki i służy tylko temu, 
                aby zapewnić Ci najlepsze warunki do nauki.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Grupy są elastyczne – jeśli okaże się, że materiał jest dla Ciebie za łatwy lub 
                za trudny, zawsze możemy przenieść Cię do innej grupy podczas obozu.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}