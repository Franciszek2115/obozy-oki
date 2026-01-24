import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, BookOpen, Trophy, Mountain, Users, Gamepad2, Star, ChevronDown } from "lucide-react";

export default function ProgramSection() {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      day: "Dzień 0",
      date: "Niedziela",
      title: "Przyjazd i integracja",
      activities: [
        { time: "14:00 - 17:00", title: "Przyjazd uczestników", icon: Users, desc: "Zakwaterowanie, powitanie" },
        { time: "18:00", title: "Kolacja", icon: Clock, desc: "Pierwsze wspólne spotkanie" },
        { time: "19:30", title: "Gra integracyjna", icon: Gamepad2, desc: "Poznajemy się nawzajem" },
        { time: "22:00", title: "Cisza nocna", icon: Star, desc: "Odpoczynek przed intensywnym tygodniem" }
      ]
    },
    {
      day: "Dzień 1-2",
      date: "Pon-Wt",
      title: "Warsztaty algorytmiczne",
      activities: [
        { time: "8:00", title: "Śniadanie", icon: Clock, desc: "" },
        { time: "9:00 - 12:30", title: "Blok zajęciowy I", icon: BookOpen, desc: "Algorytmy grafowe, struktury danych" },
        { time: "13:00", title: "Obiad", icon: Clock, desc: "" },
        { time: "15:00 - 17:00", title: "Blok zajęciowy II", icon: BookOpen, desc: "Programowanie dynamiczne" },
        { time: "17:30", title: "Aktywność sportowa", icon: Users, desc: "Siatkówka, piłka nożna, tenis" },
        { time: "20:00", title: "Wykład wieczorny", icon: Star, desc: "Spotkanie z gościem specjalnym" }
      ]
    },
    {
      day: "Dzień 3",
      date: "Środa",
      title: "Konkurs i symultana",
      activities: [
        { time: "8:00", title: "Śniadanie", icon: Clock, desc: "" },
        { time: "9:00 - 13:00", title: "Konkurs Codeforces", icon: Trophy, desc: "Rywalizacja w stylu olimpijskim" },
        { time: "13:00", title: "Obiad", icon: Clock, desc: "" },
        { time: "15:00 - 17:00", title: "Omówienie zadań", icon: BookOpen, desc: "Analiza rozwiązań" },
        { time: "18:00", title: "Symultana szachowa", icon: Gamepad2, desc: "Zmierz się z mistrzem!" },
        { time: "20:00", title: "Spacer po Grybowie", icon: Mountain, desc: "Zwiedzanie z przewodnikiem" }
      ]
    },
    {
      day: "Dzień 4",
      date: "Czwartek",
      title: "Wycieczka górska",
      activities: [
        { time: "7:00", title: "Wczesne śniadanie", icon: Clock, desc: "" },
        { time: "8:00 - 16:00", title: "Wycieczka na Jaworzynę", icon: Mountain, desc: "Zdobywamy szczyt Beskidu!" },
        { time: "16:30", title: "Powrót i odpoczynek", icon: Users, desc: "" },
        { time: "18:00", title: "Kolacja", icon: Clock, desc: "" },
        { time: "20:00", title: "Warsztaty specjalne", icon: Star, desc: "Kostka Rubika, gry logiczne" }
      ]
    },
    {
      day: "Dzień 5-6",
      date: "Pt-Sob",
      title: "Intensywne warsztaty",
      activities: [
        { time: "8:00", title: "Śniadanie", icon: Clock, desc: "" },
        { time: "9:00 - 12:30", title: "Blok zajęciowy III", icon: BookOpen, desc: "Geometria obliczeniowa, teoria liczb" },
        { time: "13:00", title: "Obiad", icon: Clock, desc: "" },
        { time: "15:00 - 17:00", title: "Sesja zadaniowa", icon: Trophy, desc: "Rozwiązywanie w grupach" },
        { time: "18:00", title: "Mini-olimpiada", icon: Trophy, desc: "Finałowa rywalizacja" },
        { time: "21:00", title: "Ognisko pożegnalne", icon: Star, desc: "Wspólne wspomnienia" }
      ]
    },
    {
      day: "Dzień 7",
      date: "Niedziela",
      title: "Zakończenie",
      activities: [
        { time: "8:00", title: "Śniadanie", icon: Clock, desc: "" },
        { time: "10:00", title: "Ceremonia zamknięcia", icon: Trophy, desc: "Wręczenie dyplomów i nagród" },
        { time: "12:00", title: "Obiad pożegnalny", icon: Clock, desc: "" },
        { time: "13:00", title: "Wyjazd", icon: Users, desc: "Do zobaczenia za rok!" }
      ]
    }
  ];

  return (
    <section id="program" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Program</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Harmonogram obozu
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tydzień pełen nauki, przygód i niezapomnianych chwil. Każdy dzień to nowe wyzwania i możliwości.
          </p>
        </motion.div>

        {/* Day selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                activeDay === index
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="block text-sm opacity-70">{day.day}</span>
              <span className="block">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Day content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{days[activeDay].title}</h3>
                <p className="text-slate-500">{days[activeDay].day} • {days[activeDay].date}</p>
              </div>
            </div>

            <div className="space-y-4">
              {days[activeDay].activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-cyan-600 font-mono text-sm font-medium">{activity.time}</span>
                    </div>
                    <h4 className="font-semibold text-slate-900">{activity.title}</h4>
                    {activity.desc && (
                      <p className="text-slate-500 text-sm">{activity.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Topics covered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">Tematy poruszane na warsztatach</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Algorytmy grafowe",
              "Programowanie dynamiczne",
              "Struktury danych",
              "Teoria liczb",
              "Geometria obliczeniowa",
              "Wyszukiwanie binarne",
              "Drzewa przedziałowe",
              "Algorytmy zachłanne",
              "Złożoność obliczeniowa",
              "Techniki olimpijskie"
            ].map((topic, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-cyan-300 hover:bg-cyan-50 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}