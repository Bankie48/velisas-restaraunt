
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* Service Highlights */}
        <div className="bg-stone-50 py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
              <span className="text-3xl font-serif text-amber-600 block italic">01.</span>
              <h5 className="text-xl font-bold text-stone-900 uppercase tracking-widest">Dine-In</h5>
              <p className="text-stone-500 text-sm leading-relaxed">Relaxed atmosphere with panoramic ocean views.</p>
            </div>
            <div className="space-y-4 md:border-x border-stone-200 md:px-10">
              <span className="text-3xl font-serif text-amber-600 block italic">02.</span>
              <h5 className="text-xl font-bold text-stone-900 uppercase tracking-widest">Kerbside</h5>
              <p className="text-stone-500 text-sm leading-relaxed">Swift pickup from the comfort of your vehicle.</p>
            </div>
            <div className="space-y-4">
              <span className="text-3xl font-serif text-amber-600 block italic">03.</span>
              <h5 className="text-xl font-bold text-stone-900 uppercase tracking-widest">Delivery</h5>
              <p className="text-stone-500 text-sm leading-relaxed">Secure, hot, and contactless door-to-door service.</p>
            </div>
          </div>
        </div>

        <MenuSection />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
