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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-200">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl mx-auto object-cover"
                    style={{ objectPosition: '0% 50%' }}
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.role}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600"
                      >
                        <Trophy className="w-3 h-3 text-amber-500" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}