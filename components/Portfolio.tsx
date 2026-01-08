import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Reveal } from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-japandi-cream scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex justify-between items-end mb-16">
          <Reveal>
             <h2 className="font-serif text-4xl text-japandi-charcoal">Wybrane Prace</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#contact" className="hidden md:flex items-center text-sm uppercase tracking-widest text-japandi-charcoal hover:text-japandi-terracotta transition-colors group">
              Pełne Archiwum 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-japandi-stone mb-6">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <span className="bg-white px-4 py-2 text-[10px] uppercase tracking-widest text-japandi-charcoal">
                       Zobacz Case Study
                     </span>
                  </div>
                </div>
                <div className="flex justify-between items-start border-b border-japandi-charcoal/10 pb-4 group-hover:border-japandi-terracotta transition-colors">
                  <div>
                    <h3 className="font-serif text-xl text-japandi-charcoal group-hover:text-japandi-terracotta transition-colors">{item.title}</h3>
                    <p className="text-xs text-japandi-sage uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                  <span className="font-sans text-xs text-japandi-charcoal/40 pt-1">{item.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
             <a href="#contact" className="flex items-center text-sm uppercase tracking-widest text-japandi-charcoal">
              Pełne Archiwum <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};