import React from 'react';
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Code2, Linkedin } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Daniel Olkowski",
      role: "Główny organizator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Założyciel Olimpijskiego Koła Informatycznego. Pasjonat edukacji informatycznej i mentor młodych talentów.",
      achievements: ["Twórca OKI", "5+ lat doświadczenia"]
    },
    {
      name: "Michał Kowalski",
      role: "Trener algorytmiki",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Finalista Olimpiady Informatycznej, student informatyki na Uniwersytecie Warszawskim.",
      achievements: ["Finalista OI", "Rating CF 2200+"]
    },
    {
      name: "Anna Nowak",
      role: "Trenerka",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Laureatka Olimpiady Informatycznej, doktorantka specjalizująca się w algorytmach.",
      achievements: ["Laureatka OI", "Publikacje naukowe"]
    },
    {
      name: "Piotr Wiśniewski",
      role: "Instruktor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Student Politechniki Warszawskiej, wielokrotny uczestnik zawodów programistycznych.",
      achievements: ["Top 100 ICPC", "Mentor OKI"]
    },
    {
      name: "Magdalena Czapiewska",
      role: "Koordynatorka",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Odpowiedzialna za logistykę i bezpieczeństwo uczestników obozu.",
      achievements: ["5 lat w OKI", "Certyfikat pierwszej pomocy"]
    },
    {
      name: "Lech Duraj",
      role: "Gość specjalny",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: "Legenda polskiej informatyki, wieloletni trener kadry olimpijskiej.",
      achievements: ["Trener kadry OI", "Wykładowca UJ"]
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

        {/* Call for volunteers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-10 text-center"
        >
          <GraduationCap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Chcesz dołączyć do kadry?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Jeśli jesteś finalistą lub laureatem Olimpiady Informatycznej i chciałbyś 
            dzielić się swoją wiedzą z młodszymi kolegami – skontaktuj się z nami!
          </p>
          <a 
            href="mailto:kontakt@oki.org.pl"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <Code2 className="w-5 h-5" />
            Napisz do nas
          </a>
        </motion.div>
      </div>
    </section>
  );
}