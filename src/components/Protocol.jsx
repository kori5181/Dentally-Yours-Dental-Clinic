import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);
  
  const steps = [
    {
      num: "01",
      title: "Extensive Examination",
      desc: "Our doctors conduct a thorough check-up to understand your oral health baseline and make you feel completely secure.",
      icon: "Geometric"
    },
    {
      num: "02",
      title: "Customized Plan",
      desc: "We design a reliable, step-by-step treatment plan tailored exactly to your needs, prioritizing your comfort.",
      icon: "Blueprint"
    },
    {
      num: "03",
      title: "Affordable Care",
      desc: "Delivering high-quality, lasting dental work at accessible rates so you can smile with confidence.",
      icon: "Shield"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Skip last card for leaving animation
        
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(8px)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          }
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-background pt-32 pb-48">
       <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20 text-center">
        <h2 className="font-sans font-bold text-4xl text-dark tracking-tight">
          The <span className="text-drama text-accent text-5xl">Protocol.</span>
        </h2>
      </div>
       
      <div className="relative w-full max-w-5xl mx-auto px-6 flex flex-col gap-[30vh]">
        {steps.map((step, idx) => (
          <div 
            key={step.num} 
            className="protocol-card sticky top-32 w-full h-[60vh] bg-white rounded-[3rem] p-10 md:p-16 border border-primary/10 shadow-2xl flex flex-col md:flex-row items-center gap-12 overflow-hidden"
            style={{ zIndex: idx }}
          >
             <div className="flex-1 flex flex-col justify-center">
               <span className="text-data text-accent text-lg mb-4 opacity-80">Phase {step.num}</span>
               <h3 className="font-sans font-bold text-3xl md:text-5xl text-dark mb-6">{step.title}</h3>
               <p className="font-sans text-dark/70 text-lg md:text-xl max-w-md">{step.desc}</p>
             </div>
             
             <div className="flex-1 w-full h-full bg-background/50 rounded-3xl flex items-center justify-center relative overflow-hidden border border-primary/5">
                {/* SVG Animations matching the icon */}
                {step.icon === "Geometric" && (
                  <svg className="w-48 h-48 text-primary opacity-60 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="30" strokeDasharray="8 4" />
                    <circle cx="50" cy="50" r="20" strokeDasharray="12 4" />
                  </svg>
                )}
                {step.icon === "Blueprint" && (
                  <div className="relative w-full h-full flex items-center justify-center bg-[linear-gradient(rgba(29,78,216,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(29,78,216,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
                    <svg className="w-32 h-32 text-primary opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className="animate-[pulse_4s_ease-in-out_infinite]" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="M8 14h.01" strokeWidth="3" className="text-accent" />
                      <path d="M12 14h.01" strokeWidth="3" className="text-accent" />
                      <path d="M16 14h.01" strokeWidth="3" className="text-accent" />
                      <path d="M8 18h.01" strokeWidth="3" className="text-accent" />
                      <path d="M12 18h.01" strokeWidth="3" className="text-accent" />
                      <path d="M16 18h.01" strokeWidth="3" className="text-accent" />
                    </svg>
                  </div>
                )}
                {step.icon === "Shield" && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                    <svg className="w-32 h-32 text-accent opacity-90 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="animate-[pulse_3s_ease-in-out_infinite]" />
                      <path d="M9 12l2 2 4-4" strokeWidth="2" className="text-primary animate-[pulse_2s_ease-in-out_infinite]" />
                    </svg>
                  </div>
                )}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protocol;
