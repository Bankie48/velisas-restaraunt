
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nyumbani', href: '#home' },
    { name: 'Menyu', href: '#menu' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Maoni', href: '#reviews' },
    { name: 'Wasiliana', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              VELISA'S
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.socials.whatsapp}`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Order Online
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.socials.whatsapp}`}
              className="w-full mt-4 bg-amber-600 text-white px-3 py-3 rounded-md text-center font-bold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Agiza Sasa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
