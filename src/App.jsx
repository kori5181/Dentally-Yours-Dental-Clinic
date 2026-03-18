import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Doctors from './components/Doctors';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
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
