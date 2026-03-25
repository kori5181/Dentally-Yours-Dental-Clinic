import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Doctors from './components/Doctors';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Prevents ScrollTrigger from recalculating positions on mobile when the URL bar hides/shows, 
    // which causes the jittery "jumping" effect.
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);

  return (
    <div className="relative w-full bg-background min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Doctors />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
