import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const Doctors = () => {
  const sectionRef = useRef(null);

  const doctors = [
    {
      name: "Dr. Anju Thomas",
      qualifications: "MDS - Prosthodontist And Crown Bridge, BDS",
      experience: "15 years experience",
      roles: "Dentist, Implantologist, Prosthodontist",
      rating: "100%",
      votes: "594",
      highlight: true
    },
    {
      name: "Dr. V S Aishwarya",
      qualifications: "BDS",
      experience: "5 years experience",
      roles: "Dentist",
      rating: "Prime",
      votes: "Verified",
      highlight: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".doc-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="doctors" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-sans font-bold text-4xl text-dark tracking-tight">
            Chief <span className="text-drama text-accent text-5xl">Specialists.</span>
          </h2>
          <button className="magnetic-btn border border-primary/20 bg-transparent text-primary px-6 py-3 rounded-full font-sans font-bold hover:bg-primary/5 transition-colors">
            View All Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className={cn(
                "doc-card rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-500 hover-lift shadow-sm hover:shadow-2xl",
                doc.highlight ? "bg-primary text-white scale-[1.02] border border-primary" : "bg-white text-dark border border-primary/10"
              )}
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center text-xl font-sans font-bold",
                    doc.highlight ? "bg-white/10 text-white" : "bg-primary/5 text-primary"
                  )}>
                    {doc.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                  </div>
                  {doc.highlight && (
                    <div className="flex items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {doc.rating} ({doc.votes})
                    </div>
                  )}
                  {!doc.highlight && (
                    <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold tracking-wide">
                      <ShieldCheck className="w-4 h-4" />
                      {doc.rating}
                    </div>
                  )}
                </div>

                <h3 className="font-sans font-bold text-3xl mb-3">{doc.name}</h3>
                <div className="font-sans text-sm mb-8 opacity-80 leading-relaxed max-w-xs text-balance">
                  {doc.qualifications}
                </div>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 text-sm font-sans opacity-95">
                    <Award className={cn("w-5 h-5", doc.highlight ? "text-accent" : "text-primary/60")} />
                    {doc.experience}
                  </li>
                  <li className="flex items-center gap-4 text-sm font-sans opacity-95">
                    <svg className={cn("w-5 h-5", doc.highlight ? "text-accent" : "text-primary/60")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {doc.roles}
                  </li>
                </ul>
              </div>

              <button className={cn(
                "magnetic-btn w-full py-4 rounded-full font-sans font-bold flex items-center justify-center gap-2 group transition-all",
                doc.highlight ? "bg-accent text-white hover:bg-white hover:text-dark" : "bg-dark text-white hover:bg-primary"
              )}>
                Book Clinic Visit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
