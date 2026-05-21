import { motion } from "motion/react";
import { TOURS_DATA, TRANSFER_DATA } from "../data";
import { Compass, Clock, MapPin, CheckCircle, ArrowRight, Plane, Shield } from "lucide-react";

export default function Services() {
  return (
    <div id="services-parent">
      {/* SECTION 1: PRIVATE TOURS */}
      <section
        id="passeios"
        className="py-20 lg:py-28 bg-[#232324] text-white border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with targeting SEO copy */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-mono text-xs uppercase tracking-widest font-bold block">
              Roteiros Personalizados
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Passeios em Gramado e Canela Privativos
            </h2>
            <div className="h-[2px] bg-gold w-20 mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-gray-300 font-light mt-4">
              Explore o charme e a história da colonização alemã e italiana com um serviço exclusivo. Escolha um de nossos tours consagrados ou desenhe um roteiro sob medida para o seu ritmo.
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TOURS_DATA.map((tour, index) => (
              <motion.article
                key={tour.id}
                id={`tour-card-${tour.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#1a1a1b] rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all flex flex-col group shadow-xl"
              >
                {/* Image thumb */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1b] via-[#1a1a1b]/20 to-transparent"></div>
                  
                  {/* Floating duration badge */}
                  <div className="absolute top-4 right-4 bg-[#232324]/90 border border-gold/40 text-gold text-xs font-mono px-3.5 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* SEO subtitle */}
                    <p className="text-[10px] text-gold font-mono tracking-widest uppercase font-bold">
                      {tour.tagline}
                    </p>
                    
                    {/* H3 with exact keyword for indexing stability */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold transition-colors">
                      {tour.seoKeyword}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      {tour.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="pt-4 space-y-2">
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-mono">
                        Destaques Inclusos:
                      </span>
                      <ul className="space-y-2">
                        {tour.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-gray-300"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card bottom CTA */}
                  <div className="pt-8 mt-6 border-t border-white/5">
                    <a
                      href={`#orcamento`}
                      className="w-full inline-flex items-center justify-between bg-white/5 hover:bg-gold hover:text-black hover:shadow-lg border border-white/10 hover:border-transparent text-white font-medium text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all group/btn"
                    >
                      <span className="font-bold">Consultar Disponibilidade</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: EXECUTIVE TRANSFER */}
      <section
        id="transfers"
        className="py-20 lg:py-28 bg-[#fdfdfd] text-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-yellow-700 font-mono text-xs uppercase tracking-widest font-bold block">
              Tranquilidade na Chegada
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#232324]">
              Transfer Aeroporto de Porto Alegre (POA) e Caxias do Sul (CXJ)
            </h2>
            <div className="h-[2px] bg-yellow-600 w-20 mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-gray-600 font-light mt-4">
              Garanta uma viagem tranquila do avião direto ao seu hotel ou pousada na Serra Gaúcha. Viagem limpa, pontual e segura para você, sua família ou delegação de negócios.
            </p>
          </div>

          {/* Transfers Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Visual element showing executive transfer car details */}
            <div className="col-span-1 md:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src={TOURS_DATA[1].image}
                  alt="Veículo executivo premium escuro Antonio Turismo"
                  className="w-full h-full object-cover aspect-4/3 filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay floating glass badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#232324]/90 border border-gold/30 rounded-xl p-5 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-gold" />
                    <span className="font-serif font-bold text-sm text-gold">Frota Própria Garantida</span>
                  </div>
                  <p className="text-xs text-gray-300 font-light">
                    Carros novos com manutenção rigorosa diária, totalmente higienizados, climatizados e com motoristas habilitados devidamente uniformizados.
                  </p>
                </div>
              </div>
            </div>

            {/* Transfer options specs */}
            <div className="col-span-1 md:col-span-6 space-y-6">
              {TRANSFER_DATA.map((route, rIdx) => (
                <motion.div
                  key={route.id}
                  id={`transfer-item-${route.id}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: rIdx * 0.15 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-4 relative"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 text-yellow-800 p-2.5 rounded-xl">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400 block">
                        Origem Recomendada
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                        Aeroporto de {route.origin}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {route.description}
                  </p>

                  <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500">
                    <span className="font-semibold text-[#232324]">Destinos:</span>
                    {route.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded text-[11px]"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">
                      Tempo estimado: <strong className="text-gray-800">{route.duration}</strong>
                    </span>
                    <a
                      href="#orcamento"
                      className="text-xs font-bold text-yellow-700 hover:text-yellow-900 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Cotar Ida e Volta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
