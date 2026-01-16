
import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif text-white font-bold mb-6">VELISA'S</h3>
            <p className="text-sm leading-relaxed mb-6">
              Modern Swahili dining at its best. Experience the freshness of the ocean combined with world-class service at Msasani Bay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menyu Yetu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Kuhusu Sisi</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Wateja</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Reservation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Mawasiliano</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-600 flex-shrink-0" />
                <span>Msasani Bay, 765R+P5 Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Masaa ya Kazi</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span>{RESTAURANT_INFO.hours}</span>
              </li>
              <li className="mt-4 pt-4 border-t border-stone-800">
                <p className="text-xs text-stone-500 italic">
                  * Note: Kitchen closes 30 mins before closing time.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Velisa's Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
