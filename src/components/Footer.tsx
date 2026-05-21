import { MapPin, Phone, Clock, Globe, ShieldCheck } from "lucide-react";
import { NAP_DATA, IMAGES } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="bg-[#171718] text-white pt-16 pb-8 border-t border-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Bio: 4-span */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={IMAGES.logo}
                alt="Logo Antonio Turismo"
                className="w-12 h-12 object-contain rounded-full border border-gold/30"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                {NAP_DATA.shortName}
              </span>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Agência boutique de passeios e transfers privativos de alto padrão na Serra Gaúcha. Unindo sofisticação, conforto de frota própria e o conhecimento autêntico de um residente nativo de Gramado.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-gray-500">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>CADASTUR Registrado</span>
            </div>
          </div>

          {/* Col 2: Strict NAP Consistent Data: 4-span */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold">
              Contato & Localização (NAP)
            </h4>
            
            <ul className="space-y-3.5 text-xs text-gray-300 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Endereço Comercial:</strong>
                  <span>{NAP_DATA.address.street}</span>
                  <span className="block">{NAP_DATA.address.city} - {NAP_DATA.address.state}, CEP {NAP_DATA.address.zip}</span>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <strong className="block text-white font-medium font-sans">Reservas (WhatsApp):</strong>
                  <a
                    href={`tel:${NAP_DATA.phoneRaw}`}
                    className="hover:text-gold transition-colors font-mono font-bold"
                  >
                    {NAP_DATA.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Horário de Funcionamento:</strong>
                  <span>{NAP_DATA.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: GEO Target Coverage: 2-span */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold">
              Área de Cobertura
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-mono">
              {NAP_DATA.coverage.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="text-gold">▪</span>
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Links: 2-span */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-mono">
              <li>
                <a href="#passeios" className="hover:text-white transition-colors">Passeios</a>
              </li>
              <li>
                <a href="#transfers" className="hover:text-white transition-colors">Transfers</a>
              </li>
              <li>
                <a href="#sobre-antonio" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">Orçamento</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Metadata & Architectural Honesty */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <div className="text-center sm:text-left">
            <span className="block text-gray-400">
              © {currentYear} Antonio Turismo. Todos os direitos reservados.
            </span>
            <span className="block mt-1">
              {NAP_DATA.name}
            </span>
          </div>
          
          <div className="text-center sm:text-right flex items-center gap-1.5 justify-center">
            <Globe className="w-3.5 h-3.5 text-gray-600" />
            <span>Gramado, Rio Grande do Sul, Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
