import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: "Root Canal Treatment",
    desc: "Painless procedures to save your natural teeth.",
    img: "/assets/rootcanal.jpg"
  },
  {
    title: "Cosmetics & Veneers",
    desc: "Enhance your smile with precision cosmetic solutions.",
    img: "/assets/cosmetics.jpg"
  },
  {
    title: "Restorative Dentistry",
    desc: "Repairing and restoring damaged or missing teeth.",
    img: "/assets/restorative.jpg"
  },
  {
    title: "Orthodontics",
    desc: "Effective treatments to align and straighten your teeth.",
    img: "/assets/orthodontics.jpg"
  },
  {
    title: "Aligners",
    desc: "Straighten your teeth seamlessly and comfortably with clear aligners.",
    img: "/assets/aligners.jpg"
  },
  {
    title: "Implants",
    desc: "Permanent and natural-looking tooth replacements.",
    img: "/assets/Implants.jpg"
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle and friendly dental care for children.",
    img: "/assets/pediatric.jpg"
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".srv-grid", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => gsap.to(".srv-grid", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: true })
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isHoveringSection) {
      setActiveIndex(0);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % servicesList.length));
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      setActiveIndex(null);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHoveringSection]);

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-white z-20 relative"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="font-bold text-accent uppercase tracking-wider text-sm mb-2">Services</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Our Dental Services
          </h2>
        </div>
        
        <div className="srv-grid will-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div 
                key={idx} 
                onMouseEnter={() => {
                  setIsHoveringSection(false);
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => {
                  setActiveIndex(null);
                  setIsHoveringSection(true);
                }}
                className="srv-card group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] flex items-end p-6 md:p-8 hover-lift shadow-sm cursor-default"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "group-hover:scale-105"
                  )}
                />
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500",
                    isActive ? "opacity-90" : "group-hover:opacity-90"
                  )} 
                />
                
                <div 
                  className={cn(
                    "relative z-10 w-full flex flex-col items-center text-center gap-2 md:gap-3 translate-y-4 transition-transform duration-500",
                    isActive ? "-translate-y-2" : "group-hover:-translate-y-2"
                  )}
                >
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-white drop-shadow-md">
                    {service.title}
                  </h3>
                  <p 
                    className={cn(
                      "text-white/80 font-sans text-sm md:text-base px-2 opacity-0 transition-opacity duration-500 delay-100",
                      isActive ? "opacity-100" : "group-hover:opacity-100"
                    )}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
