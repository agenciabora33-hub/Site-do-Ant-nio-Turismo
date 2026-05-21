import { motion } from "motion/react";
import { Compass, ShieldCheck, ChevronDown, Award } from "lucide-react";
import { IMAGES } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#232324] text-white pt-24 overflow-hidden"
    >
      {/* Background Image wrapper with premium dark styling */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Estrada deslumbrante cercada por hortênsias na Serra Gaúcha"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171718]/95 via-[#232324]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#232324] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero texts */}
          <div className="col-span-1 lg:col-span-8 space-y-8 text-left">
            
            {/* Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-champagne px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm"
            >
              <Award className="w-4 h-4 text-gold" />
              <span>Experiência Exclusiva e Privativa</span>
            </motion.div>

            {/* Main H1 - Heavy SEO and Typographically Premium */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
              >
                Viva os Melhores{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 block sm:inline">
                  Passeios em Gramado e Canela
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-300 max-w-2xl font-light"
              >
                Oferecemos <strong className="text-gold font-medium">City tour privativo em Gramado e Canela</strong> sob medida, transfers executivos de alto padrão e vivências fascinantes no Vale dos Vinhedos. Frota própria e guias locais experientes para sua completa segurança.
              </motion.p>
            </div>

            {/* Bullet trust details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10 max-w-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-200 font-mono">Frota Própria & Nova</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-200 font-mono">Guia Local com 15+ Anos</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                id="hero-primary-cta"
                href="#orcamento"
                className="bg-gold hover:bg-champagne text-black font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/20 text-center active:scale-95"
              >
                Solicitar Orçamento Grátis
              </a>
              <a
                id="hero-secondary-cta"
                href="#passeios"
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Conhecer Passeios</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Golden Highlight Floating Panel (Decorative and SEO Informative) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-1 lg:col-span-4 hidden lg:block bg-[#1a1a1b]/90 border border-gold/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative"
          >
            <div className="absolute right-4 top-4 text-gold/30 font-serif text-5xl font-bold select-none">
              VIP
            </div>
            <h3 className="font-serif text-xl font-bold text-gold mb-4">
              Por que Antonio Turismo?
            </h3>
            <ul className="space-y-4 text-xs font-mono text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1">✔</span>
                <span>Atendimento 100% exclusivo e privativo para sua família</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1">✔</span>
                <span>Flexibilidade total de horários e paradas gastronômicas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1">✔</span>
                <span>Motoristas nativos com profundo conhecimento regional</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1">✔</span>
                <span>Preços transparentes com agendamento online facilitado</span>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-gray-400">Classificação Google</span>
                <span className="font-serif text-lg font-bold text-white">★ 5.0 Estrelas</span>
              </div>
              <div className="bg-gold text-black text-[10px] font-bold px-2 py-1 rounded">
                100% SEGURO
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative arrow link at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <a href="#passeios" aria-label="Ir para seção de passeios">
          <ChevronDown className="w-6 h-6 text-gold opacity-75 hover:opacity-100" />
        </a>
      </div>
    </section>
  );
}
