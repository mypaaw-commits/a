import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled || mobileMenuOpen ? 'bg-japandi-cream/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl tracking-tight text-japandi-charcoal z-50 relative">
          Elena Vostra
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-japandi-charcoal/70 hover:text-japandi-terracotta transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <button className="text-japandi-charcoal hover:text-japandi-terracotta transition-colors" title="Sklep (Wkrótce)">
            <ShoppingBag strokeWidth={1} size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-japandi-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-japandi-cream flex flex-col justify-center items-center transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-japandi-charcoal hover:text-japandi-terracotta transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};