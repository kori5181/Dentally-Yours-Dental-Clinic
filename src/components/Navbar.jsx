import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between px-6 py-3 rounded-full",
        scrolled
          ? "w-[90%] md:w-[800px] bg-background/95 border border-primary/10 shadow-lg text-primary"
          : "w-[95%] md:w-[850px] bg-transparent text-white"
      )}
    >
      <div className="flex-shrink-0 flex items-center">
        <span className="font-serif font-bold text-xl md:text-2xl tracking-wide">
          Dentally Yours
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold tracking-wide">
        <a href="#about" className="hover-lift hover:text-accent transition-colors">About</a>
        <a href="#features" className="hover-lift hover:text-accent transition-colors">Why</a>
        <a href="#services" className="hover-lift hover:text-accent transition-colors">Services</a>
        <a href="#doctors" className="hover-lift hover:text-accent transition-colors">Doctor</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="tel:09611854058"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "magnetic-btn flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-bold transition-colors border",
            scrolled ? "bg-accent text-white border-accent hover:bg-opacity-90" : "bg-white/20 text-white border-white/20 hover:bg-white/30 hover:border-white/40"
          )}>
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-full border transition-colors",
            scrolled ? "border-primary/20 text-primary hover:bg-primary/5" : "border-white/20 text-white hover:bg-white/10"
          )}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={cn(
        "absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white/95 rounded-3xl shadow-2xl border border-primary/10 overflow-hidden flex flex-col transition-all duration-300 md:hidden origin-top",
        isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
      )}>
        <div className="flex flex-col p-6 gap-6 font-sans text-lg font-bold text-dark text-center">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors border-b border-primary/5 pb-4">About</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors border-b border-primary/5 pb-4">Why</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors border-b border-primary/5 pb-4">Services</a>
          <a href="#doctors" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Doctor</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
