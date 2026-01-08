import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 md:pr-12">
             <Reveal delay={0.2}>
                <span className="text-japandi-terracotta uppercase tracking-[0.2em] text-xs font-medium mb-6 block">Stylistka</span>
             </Reveal>
             <Reveal delay={0.3}>
                <h2 className="font-serif text-4xl md:text-5xl text-japandi-charcoal mb-8 leading-tight">
                   Mniej szumu. <br/> Więcej intencji.
                </h2>
             </Reveal>
             <Reveal delay={0.4}>
                <p className="font-sans text-japandi-charcoal/70 text-lg leading-relaxed mb-6 font-light">
                   Wierzę, że styl nie polega na gromadzeniu, ale na selekcji. Z ponad 8-letnim doświadczeniem w europejskiej branży mody, pomagam markom i osobom prywatnym odnaleźć jasność w ich wizualnym języku.
                </p>
                <p className="font-sans text-japandi-charcoal/70 text-lg leading-relaxed mb-8 font-light">
                   Moja praca czerpie głęboką inspirację z filozofii Japandi—odnajdywania luksusu w prostocie, fakturze i naturalnych formach.
                </p>
                <AnimatePresence>
                  {showBio && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-japandi-charcoal/70 text-lg leading-relaxed mb-8 font-light">
                        Rozpoczynałam karierę w Kopenhadze, asystując przy sesjach dla czołowych skandynawskich marek. Dziś dzielę życie między Paryżem a Warszawą, łącząc francuski szyk ze słowiańską duszą i skandynawskim minimalizmem. Moje prace publikowano w Vogue, Elle i Kinfolk.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
             </Reveal>
             <Reveal delay={0.5}>
                 <img src="https://images.unsplash.com/photo-1549488497-6a56b8564f26?q=80&w=300&auto=format&fit=crop" className="h-16 w-auto opacity-60 mb-8" alt="Podpis" />
             </Reveal>
             <Reveal delay={0.6}>
                <Button variant="outline" onClick={() => setShowBio(!showBio)}>
                  {showBio ? 'Zwiń Biografię' : 'Czytaj Biografię'}
                </Button>
             </Reveal>
          </div>

          <Reveal>
             <div className="relative order-1 md:order-2">
                <div className="aspect-[4/5] bg-japandi-stone/30 rounded-lg overflow-hidden">
                   {/* Portrait of the stylist */}
                   <img 
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1640&auto=format&fit=crop" 
                      alt="Portret Eleny Vostry"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                   />
                </div>
             </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};