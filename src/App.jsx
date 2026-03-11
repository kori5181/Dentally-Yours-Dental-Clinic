import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Doctors from './components/Doctors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Doctors />
      <Footer />
    </div>
  );
}

export default App;
