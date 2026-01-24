import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Code2, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'O obozie', id: 'about' },
    { label: 'Ośrodek', id: 'venue' },
    { label: 'Grupy', id: 'groups' },
    { label: 'Program', id: 'program' },
    { label: 'Kadra', id: 'team' },
    { label: 'Cennik', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Galeria', id: 'gallery' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isScrolled ? 'bg-cyan-600' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <Code2 className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                OKI 2026
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                Zapisz się
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-medium transition-colors mt-4"
                >
                  Zapisz się
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">Obóz OKI 2026</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Wakacyjny obóz Olimpijskiego Koła Informatycznego – tydzień intensywnej nauki 
                programowania, niezapomnianych przygód i przyjaźni na całe życie.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/OlimpijskieKoloInformatyczne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://oki.org.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Szybkie linki</h4>
              <ul className="space-y-3">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
              <ul className="space-y-3 text-slate-400">
                <li>kontakt@oki.org.pl</li>
                <li>+48 782 508 375</li>
                <li>Bocheniec 55B, Małogoszcz</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Fundacja Edukacyjna Olimpijskie Koło Informatyczne. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}