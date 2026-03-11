import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          ? "w-[90%] md:w-[800px] bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg text-primary"
          : "w-[95%] md:w-[850px] bg-transparent text-white"
      )}
    >
      <div className="font-sans font-bold text-xl tracking-tight flex-shrink-0">
        The Roots Dentistry<span className="text-accent">.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold tracking-wide">
        <a href="#services" className="hover-lift hover:text-accent transition-colors">Services</a>
        <a href="#philosophy" className="hover-lift hover:text-accent transition-colors">Philosophy</a>
        <a href="#protocol" className="hover-lift hover:text-accent transition-colors">Protocol</a>
        <a href="#doctors" className="hover-lift hover:text-accent transition-colors">Doctors</a>
      </div>

      <a 
        href="https://wa.me/9187348684" 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
        "magnetic-btn flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-bold transition-colors border",
        scrolled ? "bg-accent text-white border-accent hover:bg-opacity-90" : "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:border-white/40"
      )}>
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </nav>
  );
};

export default Navbar;
