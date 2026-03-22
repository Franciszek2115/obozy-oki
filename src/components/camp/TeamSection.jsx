import React from 'react';
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Code2, Linkedin } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Daniel Olkowski",
      role: "Kadra merytoryczna i wychowawcza",
      image: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/214f29c47_Zrzutekranu2026-03-22o191104.png",
      bio: "Założyciel OKI, nauczyciel w SP 221 w Warszawie. Od lat zaangażowany w przygotowanie młodzieży do OI oraz OIJ.",
      achievements: ["Założyciel OKI", "Nauczyciel SP 221"]
    },
    {
      name: "Natalia Mietelska",
      role: "Kadra merytoryczna i wychowawcza",
      image: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/7c614d774_Zrzutekranu2026-03-22o191121.png",
      bio: "Laureatka i finalistka OIJ oraz wielokrotna uczestniczka II etapu OI. Uczestniczka obozu OKI 2025.",
      achievements: ["Laureatka OIJ", "Finalistka OI"]
    },
    {
      name: "Jakub Kaszycki",
      role: "Kadra merytoryczna",
      image: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/2125e108e_Zrzutekranu2026-03-22o191130.png",
      bio: "Weteran OI oraz OIJ, student matematyki i informatyki na UW. Pasjonat algorytmów i języków programowania.",
      achievements: ["Weteran OI/OIJ", "Student UW"]
    },
    {
      name: "Magda Czapiewska",
      role: "Kadra merytoryczna i wychowawcza",
      image: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/a2f9b6e62_Zrzutekranu2026-03-22o191148.png",
      bio: "Studentka informatyki na UW. Cierpliwa korepetytorka, pasjonatka spacerów i muzeów historycznych.",
      achievements: ["Studentka UW", "Koordynatorka OKI"]
    },
    {
      name: "Mikołaj Bulge",
      role: "Kadra merytoryczna i wychowawcza",
      image: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/2b251fd27_Zrzutekranu2026-03-22o191158.png",
      bio: "Srebrny medalista Bałtyckiej Olimpiady Informatycznej, wielokrotny laureat i finalista OI oraz OIG. Z OKI od 2020.",
      achievements: ["Medalista BOI", "Laureat OI/OIG"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Kadra</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Poznaj naszych instruktorów
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uczysz się od najlepszych – finalistów i laureatów Olimpiady Informatycznej, 
            którzy dzielą się swoją wiedzą i doświadczeniem.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-6 bg-slate-50 rounded-2xl border border-slate-100 p-5 hover:shadow-lg hover:border-cyan-200 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-xl object-cover object-left-top flex-shrink-0"
                  style={{ objectPosition: '15% 10%' }}
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <div className="text-cyan-600 text-xs font-semibold mb-1">{member.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}