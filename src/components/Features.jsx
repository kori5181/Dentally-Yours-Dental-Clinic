import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserPlus, 
  Settings, 
  MonitorSmartphone, 
  FileText, 
  ShieldCheck, 
  Users
} from 'lucide-react';
import { cn } from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const featuresList = [
  {
    title: "Comfort and Convenience",
    desc: "Your comfort and convenience are our top priorities at The Roots Dentistry. From our warm and inviting office environment to our flexible scheduling options.",
    icon: <UserPlus strokeWidth={1.5} className="w-7 h-7" />,
  },
  {
    title: "Customized Treatment Plans",
    desc: "We understand your smile is unique. We take the time to listen to your concerns and goals, crafting a personalized treatment plan to achieve your desired results.",
    icon: <Settings strokeWidth={1.5} className="w-7 h-7" />,
  },
  {
    title: "Modern Technology",
    desc: "Modern technology in dentistry has revolutionized patient care through advancements such as digital imaging, which provides precise and detailed visuals.",
    icon: <MonitorSmartphone strokeWidth={1.5} className="w-7 h-7" />,
  },
  {
    title: "Affordable Service",
    desc: "We believe high-quality dentistry shouldn't break the bank. We offer competitive rates and transparent pricing, so you can make informed decisions about your oral health.",
    icon: <FileText strokeWidth={1.5} className="w-7 h-7" />,
  },
  {
    title: "Premium Dental Care",
    desc: "Experience the difference a healthy smile makes! We use top-of-the-line materials and equipment to deliver exceptional results and a comfortable experience.",
    icon: <ShieldCheck strokeWidth={1.5} className="w-7 h-7" />,
  },
  {
    title: "Happy Clients",
    desc: "Our commitment to exceptional care has earned the trust of countless satisfied patients. Join our growing community of happy smiles!",
    icon: <Users strokeWidth={1.5} className="w-7 h-7" />,
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".feature-grid", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => gsap.to(".feature-grid", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: true })
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isHoveringSection) {
      setActiveIndex(0);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % featuresList.length));
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
      id="features" 
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-primary/5 z-20 relative"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20 text-center items-center">
          <span className="font-bold text-accent uppercase tracking-wider text-sm mb-2">What We Do</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight leading-tight">
            Why Choose us?
          </h2>
          <p className="font-sans text-dark/70 text-lg md:text-[17px] mt-6 max-w-3xl font-light leading-relaxed">
            At <strong>The Roots Dentistry</strong>, we believe in providing our patients with treatments which includes their involvement at all times. Our patients are the stars where we have set a standard, in providing dental care with a feeling of being at home.
          </p>
        </div>
        
        <div className="feature-grid will-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresList.map((feature, idx) => {
            const isActive = activeIndex === idx;
            
            return (
              <div 
                key={idx} 
                onMouseEnter={() => {
                  setIsHoveringSection(false); // Pause auto-play if user manually hovers a card
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => {
                  setActiveIndex(null);
                  setIsHoveringSection(true); // Resume auto-play when user unhovers
                }}
                className={cn(
                  "group flex flex-col items-start text-left bg-white/70 p-8 md:p-10 rounded-[2.5rem] border border-white/50 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-default overflow-hidden relative",
                  isActive ? "bg-white shadow-2xl -translate-y-2" : "hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                )}
              >
                <div className={cn(
                  "mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ease-out shadow-sm relative z-10 box-border",
                  isActive 
                    ? "bg-primary text-white scale-110" 
                    : "bg-gray-100 text-black group-hover:bg-primary group-hover:text-white group-hover:scale-110"
                )}>
                  <div className={cn(
                    "transform transition-transform duration-500",
                    isActive ? "scale-[1.15] rotate-6" : "group-hover:scale-[1.15] group-hover:rotate-6"
                  )}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-sans font-bold text-xl text-black mb-3 relative z-10">{feature.title}</h3>
                <p className="text-dark/70 text-[15px] md:text-base font-sans leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
