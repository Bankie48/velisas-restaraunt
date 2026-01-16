
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">Connect With Us</h2>
            <h3 className="text-5xl font-serif text-stone-900 mb-8">Reservations & Inquiries</h3>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-50 rounded-2xl text-amber-600 border border-stone-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="font-bold text-stone-900 mb-1">Our Location</h6>
                  <p className="text-stone-500 leading-relaxed">{RESTAURANT_DATA.location}<br/>{RESTAURANT_DATA.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-50 rounded-2xl text-amber-600 border border-stone-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h6 className="font-bold text-stone-900 mb-1">Call Us</h6>
                  <p className="text-stone-500 leading-relaxed">{RESTAURANT_DATA.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-50 rounded-2xl text-amber-600 border border-stone-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h6 className="font-bold text-stone-900 mb-1">Email Us</h6>
                  <p className="text-stone-500 leading-relaxed">{RESTAURANT_DATA.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-stone-100">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-6">Follow Our Story</span>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: RESTAURANT_DATA.socials.instagram, label: 'Instagram' },
                  { icon: Facebook, href: RESTAURANT_DATA.socials.facebook, label: 'Facebook' },
                  { icon: Twitter, href: RESTAURANT_DATA.socials.twitter, label: 'Twitter' }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-stone-50 rounded-full text-stone-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-10 md:p-14 rounded-[2rem] shadow-sm border border-stone-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border-transparent rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-amber-500 shadow-sm transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border-transparent rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-amber-500 shadow-sm transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 ml-1">Subject</label>
                <select className="w-full bg-white border-transparent rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-amber-500 shadow-sm transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Table Reservation</option>
                  <option>Catering Services</option>
                  <option>Private Events</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 ml-1">Your Message</label>
                <textarea rows={5} className="w-full bg-white border-transparent rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-amber-500 shadow-sm transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white font-bold py-5 rounded-2xl hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl flex justify-center items-center gap-3 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
