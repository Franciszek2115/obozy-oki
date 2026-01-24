import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80" 
          alt="Programowanie" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-cyan-900/80" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Rejestracja otwarta – Edycja 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Wakacyjny Obóz
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              OKI 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Tydzień, który zmieni Twoją przyszłość. Algorytmika, programowanie i przyjaźnie 
            na całe życie w sercu Gór Świętokrzyskich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-105"
            >
              Zapisz się teraz
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-2 border-slate-400/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              Dowiedz się więcej
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">19-26 sierpnia</div>
              <div className="text-slate-400 text-sm">2026</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">Bocheniec</div>
              <div className="text-slate-400 text-sm">Góry Świętokrzyskie</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">70 miejsc</div>
              <div className="text-slate-400 text-sm">Limit uczestników</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </section>
  );
}