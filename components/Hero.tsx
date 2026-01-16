
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/491/1920/1080" 
          alt="Velisa's Restaurant Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in">
          <span className="text-amber-400 flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
            ))}
          </span>
          <span className="text-white/80 text-sm ml-2">4.3 Rated by 276+ Guests</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
          Karibu Velisa's
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
          Unforgettable culinary experiences at the heart of Msasani Bay. 
          Fresh flavors, warm ocean breezes, and Swahili hospitality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            Tazama Menyu
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Weka Meza
          </a>
        </div>
      </div>

      {/* Floating Info Badge */}
      <div className="absolute bottom-10 left-10 hidden lg:block bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
        <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Masaa ya Kazi</div>
        <div className="text-lg font-medium">{RESTAURANT_INFO.hours}</div>
        <div className="text-sm opacity-80 mt-1">Open for Dine-in & Delivery</div>
      </div>
    </div>
  );
};

export default Hero;
