import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <Reveal delay={0.2}>
            <span className="text-japandi-sage uppercase tracking-[0.2em] text-xs font-medium mb-6 block">
              Baza: Kopenhaga i Paryż
            </span>
          </Reveal>
          
          <Reveal delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-japandi-charcoal mb-8">
              Kreowanie Wizualnych <br/>
              <span className="italic text-japandi-terracotta">Narracji</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.6}>
            <p className="font-sans text-japandi-charcoal/70 text-lg leading-relaxed max-w-md mb-10 font-light">
              Elena Vostra to stylistka mody i dyrektor kreatywna specjalizująca się w minimalistycznej estetyce, zrównoważonym luksusie i ponadczasowej elegancji.
            </p>
          </Reveal>
          
          <Reveal delay={0.8}>
            <div className="flex space-x-6">
              <a href="#portfolio"><Button>Zobacz Portfolio</Button></a>
              <a href="#contact"><Button variant="text">Współpraca</Button></a>
            </div>
          </Reveal>
        </div>

        {/* Image Composition */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="absolute inset-0 rounded-[2rem] overflow-hidden"
           >
             {/* Main Hero Image: Elena Vostra Persona */}
             <img 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop" 
               alt="Elena Vostra - Stylistka Mody" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-stone-500/10 mix-blend-multiply" />
           </motion.div>
           
           {/* Floating Accent Image */}
           <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-10 -left-10 w-48 h-64 bg-white p-4 hidden md:block shadow-xl rounded-lg rotate-3"
           >
              {/* Detail Image */}
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" 
                alt="Detale stylizacji"
                className="w-full h-full object-cover" 
              />
           </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-japandi-charcoal/50 mb-2">Przewiń</span>
        <div className="w-[1px] h-12 bg-japandi-charcoal/20"></div>
      </motion.div>
    </section>
  );
};