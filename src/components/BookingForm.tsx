import React, { useState } from "react";
import { Send, Calendar, Users, Briefcase, User, HelpCircle, ShieldAlert } from "lucide-react";
import { NAP_DATA } from "../data";

export default function BookingForm() {
  const [nome, setNome] = useState("");
  const [dataIda, setDataIda] = useState("");
  const [dataVolta, setDataVolta] = useState("");
  const [passageiros, setPassageiros] = useState(2);
  const [servico, setServico] = useState("");
  const [observacoes, setObservacoes] = useState("");
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    "City Tour Privativo em Gramado e Canela",
    "Tour pelas Vinícolas Premium (Bento Gonçalves)",
    "Passeio de Maria Fumaça Completo com Epopeia",
    "Transfer Aeroporto Porto Alegre (POA) - Ida",
    "Transfer Aeroporto Porto Alegre (POA) - Volta",
    "Transfer Aeroporto Porto Alegre (POA) - Ida e Volta",
    "Transfer Aeroporto de Caxias do Sul (CXJ)",
    "Roteiro Sob Medida / Outro Serviço"
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nome.trim()) {
      newErrors.nome = "Por favor, informe seu nome completo.";
    } else if (nome.length < 3) {
      newErrors.nome = "O nome deve conter pelo menos 3 caracteres.";
    }

    if (!dataIda) {
      newErrors.dataIda = "Data de chegada é obrigatória.";
    }

    if (!dataVolta) {
      newErrors.dataVolta = "Data de retorno é obrigatória.";
    } else if (dataIda && new Date(dataVolta) < new Date(dataIda)) {
      newErrors.dataVolta = "A data de retorno não pode ser anterior à chegada.";
    }

    if (!servico) {
      newErrors.servico = "Por favor, escolha um serviço de interesse.";
    }

    if (passageiros < 1 || passageiros > 30) {
      newErrors.passageiros = "Número de passageiros inválido (mínimo 1, máximo 30).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format dates to Brazilian Portuguese style (DD/MM/YYYY) for pleasant reading
    const formatDateBR = (dateStr: string) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split("-");
      return `${day}/${month}/${year}`;
    };

    const formattedDataIda = formatDateBR(dataIda);
    const formattedDataVolta = formatDateBR(dataVolta);

    // Dynamic sanitizing and WhatsApp template creation
    const textTemplate = `Olá Antonio! Gostaria de um orçamento personalizado:
- Nome: ${nome.trim()}
- Período da Viagem: ${formattedDataIda} até ${formattedDataVolta}
- Passageiros: ${passageiros}
- Serviço de Interesse: ${servico}${observacoes.trim() ? `\n- Observações: ${observacoes.trim()}` : ""}`;

    const encodedText = encodeURIComponent(textTemplate);
    const whatsappUrl = `https://wa.me/5554981544043?text=${encodedText}`;

    // Graceful temporary loading timeout before redirection to preserve trust feedback
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <section
      id="orcamento"
      className="py-20 lg:py-28 bg-[#1a1a1b] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informational Guidance Panel */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <span className="text-gold font-mono text-xs uppercase tracking-widest font-bold block">
              Reserve Online e Garanta Vaga
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Peça Orçamento para Seus Passeios Hoje
            </h2>
            <div className="h-[2px] bg-gold w-16"></div>
            
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Preencha nosso formulário inteligente para receber instantaneamente uma cotação sob medida via WhatsApp. Sem intermediários, direto com o Fundador e com total transparência.
            </p>

            <div className="pt-6 space-y-4 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <div className="text-gold mt-1">✓</div>
                <div>
                  <span className="font-semibold block text-white">Confirmação Prévia e Agendada</span>
                  <span>Evite estresses na chegada de alta temporada de Gramado (como o Natal Luz).</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gold mt-1">✓</div>
                <div>
                  <span className="font-semibold block text-white">Cancelamento Flexível</span>
                  <span>Entendemos imprevistos relacionados a voos e mudanças de datas.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gold mt-1">✓</div>
                <div>
                  <span className="font-semibold block text-white">Atendimento Rápido e Humano</span>
                  <span>Retorno rápido em até 10 minutos em horário comercial.</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex items-center gap-3.5 mt-8">
              <ShieldAlert className="w-5 h-5 text-gold shrink-0" />
              <p className="text-[11px] text-gray-300 leading-normal">
                Garantimos privacidade absoluta dos seus dados fornecidos. Suas informações de viagem serão enviadas exclusivamente para o fechamento seguro via WhatsApp.
              </p>
            </div>
          </div>

          {/* Interactive Core Form Panel */}
          <div className="col-span-1 lg:col-span-7 bg-[#232324] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-6 text-left">
              Ficha de Orçamento de Passeios
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Field 1: Nome */}
              <div id="form-field-nome" className="space-y-2">
                <label htmlFor="input_nome" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Nome Completo
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="input_nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={`w-full bg-[#1a1a1b] border ${
                      errors.nome ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-gold"
                    } rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:border-transparent transition-all min-h-[44px]`}
                    placeholder="Ex: João Silva Silveira"
                  />
                </div>
                {errors.nome && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.nome}</span>
                )}
              </div>

              {/* Field 2 & 3: Datas Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Chegada */}
                <div id="form-field-data-ida" className="space-y-2">
                  <label htmlFor="input_data_ida" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Data de Chegada (Ida)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      type="date"
                      id="input_data_ida"
                      value={dataIda}
                      onChange={(e) => setDataIda(e.target.value)}
                      className={`w-full bg-[#1a1a1b] border ${
                        errors.dataIda ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-gold"
                      } rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:border-transparent transition-all min-h-[44px]`}
                    />
                  </div>
                  {errors.dataIda && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.dataIda}</span>
                  )}
                </div>

                {/* Retorno */}
                <div id="form-field-data-volta" className="space-y-2">
                  <label htmlFor="input_data_volta" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Data de Retorno (Volta)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      type="date"
                      id="input_data_volta"
                      value={dataVolta}
                      onChange={(e) => setDataVolta(e.target.value)}
                      className={`w-full bg-[#1a1a1b] border ${
                        errors.dataVolta ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-gold"
                      } rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:border-transparent transition-all min-h-[44px]`}
                    />
                  </div>
                  {errors.dataVolta && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.dataVolta}</span>
                  )}
                </div>

              </div>

              {/* Field 4 & 5: Passageiros & Serviço */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Passageiros */}
                <div id="form-field-qtd" className="space-y-2">
                  <label htmlFor="input_qtd" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Nº de Passageiros
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Users className="w-4 h-4" />
                    </span>
                    <input
                      type="number"
                      id="input_qtd"
                      min="1"
                      max="30"
                      value={passageiros}
                      onChange={(e) => setPassageiros(parseInt(e.target.value) || 1)}
                      className={`w-full bg-[#1a1a1b] border ${
                        errors.passageiros ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-gold"
                      } rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:border-transparent transition-all min-h-[44px]`}
                    />
                  </div>
                  {errors.passageiros && (
                    <span className="text-xs text-red-200 mt-1 block">{errors.passageiros}</span>
                  )}
                </div>

                {/* Serviço de Interesse */}
                <div id="form-field-servico" className="space-y-2">
                  <label htmlFor="select_servico" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Serviço de Interesse
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <select
                      id="select_servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className={`w-full bg-[#1a1a1b] border ${
                        errors.servico ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-gold"
                      } rounded-xl pl-10 pr-4 py-3 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:border-transparent transition-all min-h-[44px] cursor-pointer`}
                    >
                      <option value="" disabled>Seleccione uma opção...</option>
                      {servicesList.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.servico && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.servico}</span>
                  )}
                </div>

              </div>

              {/* Field 6: Observações (Extra/Destaque) */}
              <div id="form-field-observacoes" className="space-y-2">
                <label htmlFor="textarea_observacoes" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                  Mensagem Adicional ou Observações Especiais (Opcional)
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-3.5 text-gray-400 pointer-events-none">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <textarea
                    id="textarea_observacoes"
                    rows={3}
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    className="w-full bg-[#1a1a1b] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Informe se há cadeirantes, cadeirinha de bebê, restrições ou locais extras que deseja visitar..."
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-champagne text-black font-bold uppercase tracking-wider text-sm py-4 px-6 rounded-xl transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-3 cursor-pointer select-none active:scale-98 disabled:opacity-50 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar e Chamar no WhatsApp</span>
                    </>
                  )}
                </button>
                <span className="block text-center text-[10px] text-gray-400 mt-3 font-mono">
                  Gera mensagem imediata e estruturada ao WhatsApp do Antonio.
                </span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
