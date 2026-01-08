import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-japandi-cream min-h-screen text-japandi-charcoal selection:bg-japandi-terracotta/20">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;