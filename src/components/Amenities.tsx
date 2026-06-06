import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { AMENITIES } from '../data';

export default function Amenities() {
  const [filter, setFilter] = useState<'all' | 'ambience' | 'hospitality' | 'offers'>('all');

  const categories = [
    { id: 'all', name: 'All Amenities', icon: Sparkles },
    { id: 'ambience', name: 'Acoustic & Vibe', icon: Compass },
    { id: 'hospitality', name: 'Premium Service', icon: ShieldCheck },
  ];

  const filteredItems = AMENITIES.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section className="relative py-20 bg-olive-dark/10 border-t border-gold-accent/5">
      {/* Absolute top grid mask */}
      <div className="absolute inset-0 military-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-accent block">
              Fortified Comfort & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide uppercase luxury-heading">
              PREMIUM AMENITIES
            </h2>
            <div className="w-12 h-[2px] bg-gold-accent mt-3" />
          </div>

          {/* Quick Filters */}
          <div className="inline-flex flex-wrap p-1 gap-1.5 bg-night-black border border-white/5 rounded-sm">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = filter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 rounded-sm cursor-pointer ${
                    isSelected
                      ? 'bg-gold-accent text-night-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map((amenity, index) => (
            <motion.div
              layout
              key={amenity.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group relative p-5 bg-night-black/80 border border-gold-accent/10 hover:border-gold-accent/40 rounded-sm transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden min-h-[100px]"
            >
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-bl from-gold-accent/15 to-transparent absolute" />
              </div>

              {/* Bullet style stamp */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-cta-red rounded-full shadow-[0_0_10px_#B71C1C]" />
                <span className="text-[8px] tracking-[0.25em] text-gold-accent uppercase font-mono font-bold">
                  {amenity.category} Outfitting
                </span>
              </div>

              <h4 className="text-sm font-semibold text-white tracking-wide group-hover:text-gold-accent transition-colors leading-snug">
                {amenity.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Verification stamp */}
        <div className="mt-10 py-4 px-6 bg-night-black/50 border border-gold-accent/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 tracking-wider">
            🚨 Looking for personalized arrangements or complete venue lockouts? Ring our Liaison Officer.
          </p>
          <a
            href="tel:+91999999999"
            className="flex-shrink-0 text-xs font-bold text-gold-accent hover:text-white uppercase tracking-widest transition-colors"
          >
            Call Duty Desk +91 99999 99999 →
          </a>
        </div>

      </div>
    </section>
  );
}
