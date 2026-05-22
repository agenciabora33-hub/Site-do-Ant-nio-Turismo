import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAP_DATA, IMAGES } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Passeios", href: "#passeios" },
    { label: "Transfers", href: "#transfers" },
    { label: "Sobre o Antonio", href: "#sobre-antonio" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Orçamento", href: "#orcamento" },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-lg border-b border-gold/20"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              id="header-brand-link"
              href="#"
              className="flex items-center gap-4 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center shrink-0">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold via-yellow-400 to-champagne rounded-full opacity-50 blur-[2px] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img
                  src={IMAGES.logo}
                  alt="Logo Antonio Turismo"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 aspect-square object-contain rounded-full shadow-2xl border border-gold/50 shadow-gold/20 group-hover:scale-105 transition-all duration-300 z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="block font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-gold transition-colors">
                  Antonio Turismo
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace("#", "")}`}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-gray-200 hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Phone & Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <a
                id="header-phone-cta"
                href={`tel:${NAP_DATA.phoneRaw}`}
                className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-gold transition-all px-4 py-2 rounded-full text-xs font-semibold font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{NAP_DATA.phone}</span>
              </a>

              <a
                id="header-whatsapp-cta"
                href={`https://wa.me/5554981544043?text=Olá%20Antonio!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20passeios%20e%20transfer.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black hover:bg-champagne active:scale-95 transition-all text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-gold/20 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.45 5.513 0 10-4.487 10-10C21.25 5.113 16.763.63 11.25.63s-10 4.487-10 10c0 1.8.5 3.5 1.45 5l-.95 3.5 3.5-.95zM17.5 14.25c-.3-.15-1.8-.9-2.1-1-.3-.15-.5-.15-.7.15-.2.3-.75.95-.9 1.1-.15.15-.3.15-.6 0-1.25-.6-2.25-1.15-3.15-1.95-.7-.6-1.15-1.35-1.3-1.6-.15-.3 0-.45.15-.6.15-.15.3-.3.45-.45.15-.15.2-.25.3-.45.1-.2 0-.4-.1-.55-.1-.15-.7-1.7-.95-2.35-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.75.4C8 7 7.25 7.75 7.25 9.25s1.1 2.95 1.25 3.15c.15.2 2.15 3.3 5.2 4.6.7.3 1.25.5 1.7.65.7.2 1.35.2 1.85.1.55-.1 1.8-.75 2.1-1.45.3-.7.3-1.3.2-1.45-.1-.15-.3-.25-.6-.4z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Hamburger Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-gold focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px]"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          <div className="flex flex-col items-center space-y-3">
            <img
              src={IMAGES.logo}
              alt="Logo Antonio Turismo"
              className="w-20 h-20 object-contain rounded-full border border-gold/40 shadow-xl"
              referrerPolicy="no-referrer"
            />
            <span className="block font-serif text-3xl font-bold text-gold text-center">
              Antonio Turismo
            </span>
          </div>
          <div className="h-[1px] bg-gold/30 w-1/3 mx-auto"></div>
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-link-${link.href.replace("#", "")}`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium tracking-wide text-white hover:text-gold transition-colors block py-3"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="h-[1px] bg-gold/30 w-1/3 mx-auto"></div>
          <div className="text-center">
            <span className="block text-gray-400 text-xs font-mono uppercase mb-2">
              Telefone Reservas
            </span>
            <a
              id="mobile-phone-drawer"
              href={`tel:${NAP_DATA.phoneRaw}`}
              className="text-lg font-mono text-gold font-bold hover:underline py-2 block"
            >
              {NAP_DATA.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
