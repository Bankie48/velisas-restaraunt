
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Wasiliana Nasi</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif mb-8 text-stone-900">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-xl text-amber-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Mahali</p>
                  <p className="text-stone-500">{RESTAURANT_INFO.location}</p>
                  <p className="text-stone-400 text-sm">{RESTAURANT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-xl text-amber-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Simu</p>
                  <p className="text-stone-500">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-50 rounded-xl text-amber-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Masaa ya Kazi</p>
                  <p className="text-stone-500">{RESTAURANT_INFO.hours}</p>
                  <p className="text-stone-400 text-sm">Every Day of the Week</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="font-bold text-stone-900 mb-4">Tufuate Mtandaoni</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-stone-50 rounded-xl text-stone-600 hover:text-amber-600 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-3 bg-stone-50 rounded-xl text-stone-600 hover:text-amber-600 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form / Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex-1">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Jina Lako" 
                    className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Barua Pepe" 
                    className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Mada" 
                  className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
                <textarea 
                  rows={4} 
                  placeholder="Ujumbe Wako" 
                  className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20"
                >
                  Tuma Ujumbe
                </button>
              </form>
            </div>
            
            <div className="rounded-3xl overflow-hidden h-64 shadow-md grayscale hover:grayscale-0 transition-all duration-700">
               {/* Simplified Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.11874744274!2d39.266209!3d-6.766209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4943f556488d%3A0xe54c194e92a01948!2sMsasani%20Bay!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
