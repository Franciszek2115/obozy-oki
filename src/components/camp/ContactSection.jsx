import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    school: '',
    package: '',
    transport: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 border border-cyan-200"
          >
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-cyan-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Dziękujemy za zgłoszenie!
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              Twoje zgłoszenie zostało przyjęte. Skontaktujemy się z Tobą w ciągu 24 godzin 
              z potwierdzeniem i dalszymi instrukcjami dotyczącymi rezerwacji.
            </p>
            <p className="text-slate-500">
              Sprawdź również folder SPAM w swojej skrzynce mailowej.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Zapisz się na obóz
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Wypełnij formularz zgłoszeniowy lub skontaktuj się z nami bezpośrednio. 
            Liczba miejsc jest ograniczona – nie czekaj!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Dane kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-300 text-sm">Email</div>
                    <a href="mailto:kontakt@oki.org.pl" className="text-white hover:text-cyan-400 transition-colors">
                      kontakt@oki.org.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-300 text-sm">Telefon</div>
                    <a href="tel:+48782508375" className="text-white hover:text-cyan-400 transition-colors">
                      +48 782 508 375
                    </a>
                    <div className="text-slate-400 text-sm">Magdalena (koordynator)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-300 text-sm">Miejsce obozu</div>
                    <div className="text-white">Grybów, ul. Chłodna 16</div>
                    <div className="text-slate-400 text-sm">33-330 Grybów</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700">
                <div className="font-medium text-slate-300 text-sm mb-4">Znajdź nas</div>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/OlimpijskieKoloInformatyczne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://oki.org.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-10 bg-cyan-500/20 rounded-xl p-6">
                <div className="text-cyan-300 font-medium mb-2">Fundacja Edukacyjna</div>
                <div className="text-white text-lg font-bold">Olimpijskie Koło Informatyczne</div>
                <div className="text-slate-400 text-sm mt-2">
                  Nr konta: 63 1140 2004 0000 3802 8564 9869
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Formularz zgłoszeniowy</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Imię i nazwisko rodzica/opiekuna *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    required
                    className="bg-white"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Email *</Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                    required
                    className="bg-white"
                    placeholder="jan@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Telefon *</Label>
                  <Input
                    id="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                    required
                    className="bg-white"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childName">Imię i nazwisko uczestnika *</Label>
                  <Input
                    id="childName"
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    required
                    className="bg-white"
                    placeholder="Adam Kowalski"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childAge">Wiek uczestnika *</Label>
                  <Select value={formData.childAge} onValueChange={(v) => setFormData({...formData, childAge: v})}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Wybierz wiek" />
                    </SelectTrigger>
                    <SelectContent>
                      {[11, 12, 13, 14, 15, 16, 17, 18, 19].map(age => (
                        <SelectItem key={age} value={String(age)}>{age} lat</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">Szkoła</Label>
                  <Input
                    id="school"
                    value={formData.school}
                    onChange={(e) => setFormData({...formData, school: e.target.value})}
                    className="bg-white"
                    placeholder="Nazwa i miejscowość"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Wybrany pakiet *</Label>
                  <Select value={formData.package} onValueChange={(v) => setFormData({...formData, package: v})}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Wybierz pakiet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Pakiet Podstawowy (2 490 PLN)</SelectItem>
                      <SelectItem value="transport">Pakiet z Transportem (2 890 PLN)</SelectItem>
                      <SelectItem value="premium">Pakiet Premium (3 290 PLN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transport">Dojazd *</Label>
                  <Select value={formData.transport} onValueChange={(v) => setFormData({...formData, transport: v})}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Wybierz opcję" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="own">Dojazd własny</SelectItem>
                      <SelectItem value="warsaw">Autokar - Warszawa</SelectItem>
                      <SelectItem value="lodz">Autokar - Łódź</SelectItem>
                      <SelectItem value="czestochowa">Autokar - Częstochowa</SelectItem>
                      <SelectItem value="katowice">Autokar - Katowice</SelectItem>
                      <SelectItem value="krakow">Autokar - Kraków</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="message">Dodatkowe informacje</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white min-h-[100px]"
                    placeholder="Doświadczenie w programowaniu, preferencje zakwaterowania, alergie pokarmowe, inne uwagi..."
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({...formData, consent: checked})}
                    />
                    <Label htmlFor="consent" className="text-sm text-slate-600 font-normal leading-relaxed">
                      Wyrażam zgodę na przetwarzanie danych osobowych w celu realizacji zgłoszenia na obóz OKI 2026. 
                      Zapoznałem/am się z regulaminem obozu i akceptuję jego warunki. *
                    </Label>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg font-medium rounded-xl shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wysyłanie...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Wyślij zgłoszenie
                  </span>
                )}
              </Button>

              <p className="text-center text-slate-500 text-sm mt-4">
                Po wysłaniu formularza skontaktujemy się w ciągu 24h z potwierdzeniem i instrukcją płatności.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}