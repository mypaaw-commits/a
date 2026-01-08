import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-japandi-stone/10 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-japandi-terracotta uppercase tracking-[0.2em] text-xs font-medium mb-4 block">
              Ekspertyza
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-japandi-charcoal leading-tight">
              Wyrafinowana Stylizacja <span className="italic">&</span> Kierunek
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.2}>
              <div className="group p-8 border-t border-japandi-charcoal/10 hover:border-japandi-terracotta transition-colors duration-500 h-full">
                <div className="mb-8 text-japandi-charcoal group-hover:text-japandi-terracotta transition-colors duration-500">
                  <service.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl text-japandi-charcoal mb-4">{service.title}</h3>
                <p className="text-sm font-sans text-japandi-charcoal/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};