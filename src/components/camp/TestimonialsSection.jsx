import React from 'react';
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Najlepszy obóz życia, wspaniali ludzie, kadra, koledzy. W końcu było z kim porozmawiać o marzeniach, problemach, celach. Nowe przyjaźnie i nowe autorytety. Wszelkie oczekiwania przed obozem wielokrotnie przebite!",
      author: "Mama uczestnika",
      year: "2024"
    },
    {
      quote: "To jest obóz na który czeka się cały rok! Całe wakacje ustawione pod te 7 dni. Było warto. Oglądam zdjęcia i nigdy nie widziałam syna tak uśmiechniętego. W ubiegłym roku było super. W tym roku było jeszcze lepiej!",
      author: "Mama uczestnika",
      year: "2024"
    },
    {
      quote: "Syn zachwycony pobytem! Na pytanie co najbardziej się podobało była odpowiedź - 'wszystko', ale przyciśnięty do muru zawęził odpowiedź do 'kreatywne zadania i koledzy z pokoju'.",
      author: "Rodzice uczestnika",
      year: "2024"
    },
    {
      quote: "Młoda, otrzaskana z obozami, zimowiskami i innymi wyjazdami stwierdziła, że to najlepszy wyjazd, na którym była. Najbardziej podobała się wycieczka na Jaworzynę i warsztaty układania kostki Rubika!",
      author: "Rodzice uczestniczki",
      year: "2024"
    },
    {
      quote: "Lena wróciła zachwycona. W końcu znalazła osoby, z którymi mogła dzielić pasję do algorytmiki. Cudownie wspierająca atmosfera, super ludzie i fajny ośrodek, a całość obozu perfekcyjnie zaplanowana.",
      author: "Mama uczestniczki",
      year: "2024"
    },
    {
      quote: "Dzięki obozowi nasz syn mógł po raz kolejny spotkać się i przebywać z rówieśnikami którzy potrafią zrobić coś więcej. Ma z nimi wspólne tematy, zostanie zainspirowany. To jest bezcenne.",
      author: "Tata uczestnika",
      year: "2024"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Opinie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Co mówią rodzice i uczestnicy?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Najlepszą rekomendacją są słowa tych, którzy już doświadczyli obozu OKI.
          </p>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-slate-600">
            <span className="text-2xl font-bold text-slate-900">5.0</span> / 5.0 na podstawie opinii uczestników
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-cyan-200 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">Obóz {testimonial.year}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Śledź nas na Facebooku
          </h3>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
            Codzienne relacje z obozów, zdjęcia, filmy i opinie uczestników. Dołącz do naszej społeczności!
          </p>
          <a
            href="https://www.facebook.com/OlimpijskieKoloInformatyczne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Olimpijskie Koło Informatyczne
          </a>
        </motion.div>
      </div>
    </section>
  );
}