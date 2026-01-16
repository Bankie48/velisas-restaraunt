
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Wanachosema Wateja</h2>
            <p className="text-white/60 text-lg max-w-xl">
              Tunajivunia kila maoni na tunayafanyia kazi ili kuboresha huduma zetu kila siku.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center">
            <div className="text-4xl font-serif font-bold text-amber-400 mb-1">{RESTAURANT_INFO.rating}</div>
            <div className="flex text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
              ))}
            </div>
            <div className="text-sm text-white/60">{RESTAURANT_INFO.reviewCount} Google Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-amber-600/20 transition-colors" size={48} />
              
              <div className="flex mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              
              <p className="text-lg italic text-white/80 mb-6 relative z-10">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{review.author}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-lg transition-colors border-b border-amber-400/30 pb-1"
          >
            Soma Maoni Zaidi Google
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
