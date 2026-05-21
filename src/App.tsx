/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { Compass, Sparkles, MessageCircle } from "lucide-react";
import { NAP_DATA } from "./data";

export default function App() {
  return (
    <div id="antonio-turismo-app" className="min-h-screen bg-[#232324] font-sans antialiased selection:bg-gold selection:text-black">
      {/* Search Engine structured metadata JSON-LD injected */}
      <StructuredData />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Structural Layout Sections */}
      <main className="relative">
        <Hero />
        <BookingForm />
        
        {/* Decorative divider section */}
        <div className="bg-gradient-to-r from-[#232324] via-gold/15 to-[#232324] py-8 border-y border-gold/10 text-center font-mono text-xs tracking-widest text-[#f3e5ab] uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span>Atendimento Luxo, Sem Intermediários na Serra</span>
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
        </div>

        <Services />
        <About />
        <Reviews />
      </main>

      {/* Main SEO Footer with matching coordinates */}
      <Footer />

      {/* Elegant Persistent Floating WhatsApp Icon for Direct Quick Support */}
      <a
        id="floating-whatsapp-trigger"
        href={`https://wa.me/5554981544043?text=Olá%20Antonio!%20Gostaria%20de%20um%20orçamento%20para%20passeios%20em%20Gramado%20e%20transfer.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2 border border-white/20"
        title="Fale no WhatsApp com o Antonio"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-xs font-bold uppercase tracking-wider font-sans whitespace-nowrap hidden sm:inline-block">
          Falar com Antonio
        </span>
      </a>
    </div>
  );
}

