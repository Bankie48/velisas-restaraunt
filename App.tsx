
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  useEffect(() => {
    // Add simple reveal animation on scroll logic if needed
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quick Highlights / Services */}
        <div className="bg-white py-12 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-amber-600 text-3xl font-serif mb-2 font-bold">Dine-In</div>
              <p className="text-stone-500 text-sm">Mazingira tulivu yenye upepo wa bahari.</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-stone-100">
              <div className="text-amber-600 text-3xl font-serif mb-2 font-bold">Kerbside Pickup</div>
              <p className="text-stone-500 text-sm">Chukua oda yako ukiwa ndani ya gari.</p>
            </div>
            <div className="p-6">
              <div className="text-amber-600 text-3xl font-serif mb-2 font-bold">No-Contact Delivery</div>
              <p className="text-stone-500 text-sm">Tunaleta chakula mlangoni pako salama.</p>
            </div>
          </div>
        </div>

        <MenuSection />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      
      {/* Scroll to Top Utility could be added here */}
    </div>
  );
};

export default App;
