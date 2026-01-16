
import React from 'react';
import { ChefHat, History, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/652/800/1000" 
                alt="Our Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-100 rounded-2xl -z-0"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-stone-100 rounded-full -z-0"></div>
            
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-amber-50">
              <div className="text-4xl font-serif text-amber-600 font-bold">10+</div>
              <div className="text-stone-600 text-sm">Years of Culinary Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Kuhusu Velisa's</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Tangu kuanzishwa kwetu hapa Msasani Bay, Velisa's imekuwa kimbilio la wapenzi wa chakula bora na mazingira ya utulivu. Tunajivunia kutoa uzoefu wa kipekee unaochanganya ladha za asili za Kitanzania na mbinu za kisasa za upishi.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <ChefHat size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Mbinu za Kitaalam</h4>
                  <p className="text-stone-500">Mpishi wetu mkuu ana uzoefu wa miaka mingi katika kanda ya Afrika Mashariki.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <History size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Dhamira Yetu</h4>
                  <p className="text-stone-500">Kutoa chakula chenye ubora wa juu na huduma inayomfanya mteja ajisikie yupo nyumbani.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-1">Umoja wa Jamii</h4>
                  <p className="text-stone-500">Tunashirikiana na wavuvi wa ndani wa Msasani kuhakikisha samaki wetu ni wabichi kila siku.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
