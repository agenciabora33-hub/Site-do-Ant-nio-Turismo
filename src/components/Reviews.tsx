import { useState } from "react";
import { REVIEWS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="avaliacoes"
      className="py-20 lg:py-28 bg-[#fdfdfd] text-gray-900 border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-yellow-700 font-mono text-xs uppercase tracking-widest font-bold block">
            Voz dos Nossos Clientes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#232324]">
            Opinião de Quem Viaja Conosco
          </h2>
          <div className="h-[2px] bg-yellow-600 w-20 mx-auto mt-4"></div>
          
          {/* Rating Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-1.5 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
              <span className="text-sm font-mono font-bold text-yellow-800">5.0</span>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current text-gold" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-mono">(Excelente)</span>
            </div>
            <span className="text-xs text-gray-500 font-mono">
              Classificação Máxima no Google Business Profile
            </span>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl relative"
            >
              {/* Decorative quotation mark */}
              <div className="absolute right-8 top-8 text-yellow-100">
                <Quote className="w-16 h-16 transform rotate-180 opacity-40" />
              </div>

              <div className="space-y-6 relative z-10 text-left">
                {/* Stars */}
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light italic leading-relaxed">
                  &quot;{REVIEWS_DATA[currentIndex].text}&quot;
                </p>

                {/* Author Metadata */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900">
                      {REVIEWS_DATA[currentIndex].author}
                    </h4>
                    <span className="text-xs text-gray-400 font-mono">
                      Viajou em {REVIEWS_DATA[currentIndex].date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 font-mono">
                    <span>✓</span>
                    <span>Cliente Verificado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 sm:left-0 -translate-y-1/2 z-20">
            <button
              id="carousel-prev-btn"
              onClick={prevSlide}
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-black p-3 rounded-full shadow-lg transition-all focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 sm:right-0 -translate-y-1/2 z-20">
            <button
              id="carousel-next-btn"
              onClick={nextSlide}
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-black p-3 rounded-full shadow-lg transition-all focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              id={`carousel-dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx ? "w-8 bg-yellow-700" : "w-2.5 bg-gray-200"
              }`}
              aria-label={`Ver avaliação ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
