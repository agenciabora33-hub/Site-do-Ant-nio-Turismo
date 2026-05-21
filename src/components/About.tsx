import { motion } from "motion/react";
import { Award, ShieldCheck, HeartHandshake, Compass, Trophy } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: Trophy,
      title: "15+ Anos na Região",
      desc: "Larga história dedicada ao acolhimento e operação de passeios privados excepcionais."
    },
    {
      icon: ShieldCheck,
      title: "Frota Própria Premium",
      desc: "Veículos próprios novos, higienizados e totalmente climatizados de ponta a ponta."
    },
    {
      icon: Compass,
      title: "Roteiros Secretos",
      desc: "Acesso privilegiado a vinícolas e restaurantes familiares fora dos circuitos tradicionais."
    },
    {
      icon: HeartHandshake,
      title: "Conduta Impecável",
      desc: "Atendimento ético focado em segurança, pontualidade britânica e discrição absoluta."
    }
  ];

  return (
    <section
      id="sobre-antonio"
      className="py-20 lg:py-28 bg-[#1a1a1b] text-white relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl rounded-full -mr-20 -mt-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Section left side: Credentials Grid */}
          <div className="col-span-1 lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  id={`about-cred-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#232324]/80 p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-all space-y-3"
                >
                  <div className="bg-gold/10 text-gold p-3 rounded-xl inline-block">
                    <cred.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {cred.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section right side: The Story and E-E-A-T core profile */}
          <div className="col-span-1 lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-gold font-mono text-xs uppercase tracking-widest font-bold block">
              E-E-A-T Autoridade & Confiança
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Quem Conduz Sua Viagem: <span className="text-gold">Sua História na Serra</span>
            </h2>
            
            <div className="h-[2px] bg-gold w-16"></div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              <p>
                Mais de 15 anos de experiência somados na Serra Gaúcha.{" "}
                <strong className="text-white font-medium">Antonio é morador nativo de Gramado</strong> e acompanha de perto toda a evolução turística, gastronômica e histórica da cidade.
              </p>
              
              <blockquote className="border-l-2 border-gold pl-4 italic text-xs text-gray-400 font-serif my-4">
                &quot;Minha missão é transformar uma simples viagem em memórias afetivas insubstituíveis, mostrando tesouros escondidos que apenas quem nasceu e vive aqui conhece.&quot;
              </blockquote>

              <p>
                Com conhecimento profundo na palma da mão sobre os melhores hotéis, pousadas aconchegantes, vinícolas boutique familiares, restaurantes premiados e atrações secretas da nossa região.
              </p>

              <p className="pt-2">
                <strong className="text-gold font-mono block text-xs uppercase mb-1">
                  Alto Padrão em Transporte:
                </strong>
                Frota de Veículos Próprios: Carros novos, modernos, rigorosamente higienizados e totalmente climatizados para o máximo conforto de toda a sua família.
              </p>
            </div>

            {/* Micro credentials badge */}
            <div className="pt-4 flex flex-wrap gap-4 items-center border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="w-8 h-8 rounded-full bg-[#1a1a1b] border-2 border-[#232324] flex items-center justify-center text-gold text-xs leading-none"
                    title="Avaliação Google original de motorista VIP"
                  >
                    ★
                  </span>
                ))}
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-white">
                  Empresa Cadastrada CADASTUR
                </span>
                <span className="block text-[10px] text-gray-400">
                  Totalmente legalizado junto aos órgãos turísticos nacionais
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
