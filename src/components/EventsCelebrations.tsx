import { motion } from 'motion/react';
import { CalendarHeart, Sparkles, Trophy, Users, HeartHandshake } from 'lucide-react';
import { CELEBRATIONS } from '../data';

interface CelebrationProps {
  onOpenBooking: (preselectedEvent?: string) => void;
}

export default function EventsCelebrations({ onOpenBooking }: CelebrationProps) {
  
  return (
    <section id="celebrations" className="relative py-24 bg-olive-dark/15 border-y border-gold-accent/5 overflow-hidden military-grid">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] glow-orange opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-accent animate-pulse" />
            Fortify Your Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
            CELEBRATE EVERY MOMENT
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto font-light leading-relaxed">
            From wild electronic private parties to candlelight couples' dates, we orchestrate unforgettable high-end memories customized to your military ranks.
          </p>
          <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-4" />
        </div>

        {/* Celebrations Grid Carousel Card-by-Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CELEBRATIONS.map((cel, index) => (
            <motion.div
              key={cel.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between overflow-hidden bg-night-black border border-gold-accent/15 hover:border-gold-accent/45 transition-all duration-500 rounded-sm"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-60 overflow-hidden border-b border-gold-accent/10">
                  <img
                    src={cel.imageUrl}
                    alt={cel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  {/* Subtle Gradient Cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-black via-night-black/40 to-transparent" />
                  
                  {/* Floating category banner */}
                  <span className="absolute top-4 right-4 bg-gold-accent/90 backdrop-blur-md text-night-black text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm border border-gold-accent shadow-sm">
                    38 Outpost Exclusive
                  </span>
                </div>

                {/* Card Content Card */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-gold-accent transition-colors">
                    {cel.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                    {cel.description}
                  </p>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(cel.title)}
                  className="w-full py-2.5 bg-olive-dark/45 hover:bg-gold-accent border border-gold-accent/30 hover:border-gold-accent text-gold-accent hover:text-night-black text-[10px] tracking-widest font-extrabold uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarHeart className="w-4 h-4" />
                  Reserve {cel.title.split(' ')[0]} Now
                </button>
              </div>
            </motion.div>
          ))}
          
          {/* Static CTA Promotional card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group flex flex-col justify-center p-8 text-center bg-gold-accent/5 border-2 border-dashed border-gold-accent/30 hover:border-gold-accent/80 transition-all rounded-sm min-h-[420px]"
          >
            <div className="w-16 h-16 bg-gold-accent/15 border border-gold-accent/35 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-accent group-hover:scale-110 transition-all">
              <Sparkles className="w-6 h-6 text-gold-accent group-hover:text-night-black" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-white tracking-wider uppercase mb-3">
              YOUR OWN VENUE BLUEPRINT?
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed max-w-xs mx-auto mb-6 font-light">
              We design custom culinary maneuvers, custom lighting maps, acoustic levels, and specialized covers for high-tier private banquets and VIP security lockouts.
            </p>
            <button
              onClick={() => onOpenBooking('Custom Party')}
              className="bg-gold-accent hover:bg-gold-accent/90 text-night-black font-extrabold text-xs tracking-widest uppercase py-3 px-6 rounded-sm transition-all duration-300 shadow-[0_5px_15px_rgba(200,164,77,0.2)] cursor-pointer"
            >
              Order Customized Outpost
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
