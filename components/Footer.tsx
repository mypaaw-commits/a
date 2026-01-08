import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  const handleDummyLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="bg-japandi-stone/30 pt-24 pb-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-japandi-charcoal/10 pb-20">
          
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl mb-6 text-japandi-charcoal">Dołącz do kręgu</h3>
            <p className="font-sans font-light text-japandi-charcoal/70 mb-8 max-w-sm">
              Otrzymuj uważne rytuały, inspiracje projektowe i wczesny dostęp do naszych limitowanych kolekcji rzemieślniczych.
            </p>
            <form className="flex max-w-sm border-b border-japandi-charcoal/30 focus-within:border-japandi-charcoal transition-colors">
              <input 
                type="email" 
                placeholder="Adres Email" 
                className="bg-transparent w-full py-3 outline-none text-japandi-charcoal placeholder-japandi-charcoal/40 font-sans"
              />
              <button className="text-xs uppercase tracking-widest text-japandi-charcoal hover:text-japandi-terracotta transition-colors">
                Subskrybuj
              </button>
            </form>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="uppercase text-xs tracking-[0.2em] text-japandi-charcoal mb-6">Odkryj</h4>
            <ul className="space-y-4">
              {['Sklep', 'Nasza Historia', 'Dziennik', 'Materiały', 'Zrównoważony Rozwój'].map(item => (
                <li key={item}>
                  <a href="#" onClick={handleDummyLink} className="font-serif text-lg text-japandi-charcoal/70 hover:text-japandi-terracotta transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.2em] text-japandi-charcoal mb-6">Obsługa</h4>
            <ul className="space-y-4">
              {['Kontakt', 'Wysyłka', 'Zwroty', 'Przewodnik Pielęgnacji'].map(item => (
                <li key={item}>
                  <a href="#" onClick={handleDummyLink} className="font-serif text-lg text-japandi-charcoal/70 hover:text-japandi-terracotta transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           
           <div className="md:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.2em] text-japandi-charcoal mb-6">Social</h4>
            <ul className="space-y-4">
              {['Instagram', 'Pinterest', 'Spotify'].map(item => (
                <li key={item}>
                  <a href="#" onClick={handleDummyLink} className="font-serif text-lg text-japandi-charcoal/70 hover:text-japandi-terracotta transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-japandi-charcoal/40 font-sans uppercase tracking-widest">
          <p>&copy; 2024 Elena Vostra. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" onClick={handleDummyLink} className="hover:text-japandi-charcoal transition-colors">Prywatność</a>
            <a href="#" onClick={handleDummyLink} className="hover:text-japandi-charcoal transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};