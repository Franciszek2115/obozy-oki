import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/fbea370d6_Zrzutekranu2026-04-23o160332.png",
      caption: "Mecz piłki nożnej"
    },
    {
      url: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/b77581f6f_Zrzutekranu2026-04-23o160410.png",
      caption: "Warsztaty programistyczne"
    },
    {
      url: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/66691c630_Zrzutekranu2026-04-23o160427.png",
      caption: "Wykład dla uczestników"
    },
    {
      url: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/b669b4f61_Zrzutekranu2026-04-23o160449.png",
      caption: "Integracja uczestników"
    },
    {
      url: "https://media.base44.com/images/public/6974ad53f5559cb75fdff0f9/04ae71adf_Zrzutekranu2026-04-23o160527.png",
      caption: "Zajęcia pod namiotem"
    }
  ];

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.url === selectedImage);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setSelectedImage(images[newIndex].url);
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Wspomnienia z poprzednich edycji
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Zobacz, jak wyglądały poprzednie obozy. Atmosfera, ludzie, przygody – wszystko to czeka na Ciebie!
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{image.caption}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Facebook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.facebook.com/OlimpijskieKoloInformatyczne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-medium transition-colors border border-white/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Zobacz więcej zdjęć na Facebooku
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Powiększone zdjęcie"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}