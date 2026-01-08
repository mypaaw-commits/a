import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './ui/Reveal';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-japandi-stone/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {TESTIMONIALS.map((t, i) => (
             <Reveal key={i} delay={i * 0.2}>
                <div className="relative p-8">
                   <Quote className="absolute top-0 left-0 text-japandi-terracotta/20 w-16 h-16 -z-10" />
                   <p className="font-serif text-2xl md:text-3xl text-japandi-charcoal italic mb-8 leading-relaxed">
                      "{t.quote}"
                   </p>
                   <div>
                      <h4 className="font-sans text-sm font-medium text-japandi-charcoal uppercase tracking-widest">{t.author}</h4>
                      <p className="font-sans text-xs text-japandi-sage mt-1">{t.role}</p>
                   </div>
                </div>
             </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};