import { motion } from 'motion/react';
import { Star, MapPin, ChevronDown, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCorporate: () => void;
}

export default function Hero({ onOpenBooking, onOpenCorporate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night-black pt-16">
      {/* Cinematic Ken Burns Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1920')" 
          }}
        />
        {/* Multilayer overlays: Dark olive gradient + black bottom shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-night-black via-night-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-black via-olive-dark/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night-black to-transparent" />
      </div>

      {/* Floating Animated Golden Glow */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px]" style={{ zIndex: 1 }}>
        <div className="w-full h-full gold-glow" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-24 text-left">
        <div className="max-w-3xl space-y-6">
          
          {/* Tag: Connaught Place, New Delhi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 bg-olive-dark/95 border border-gold-accent/45 px-3 py-1.5 rounded-full mt-4 md:mt-0"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-accent shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-gold-accent text-center">
              <span className="hidden sm:inline">Exclusive Military Enclave • </span>Connaught Place<span className="inline sm:hidden">, ND</span><span className="hidden sm:inline">, New Delhi</span>
            </span>
          </motion.div>

          {/* Heading with uppercase luxury font pairing */}
          <div className="space-y-2">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-gold-accent"
            >
              The Ultimate Military Luxury Escape
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-wider luxury-heading"
            >
              WHERE <span className="text-gold-accent font-serif font-extrabold italic">FOOD</span> MEETS{' '}
              <span className="relative block sm:inline">
                <span className="text-cta-red font-stencil tracking-wider bg-transparent">NIGHTLIFE</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-cta-red" />
              </span>
            </motion.h1>
          </div>

          {/* Subheading list */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg tracking-wider max-w-xl leading-relaxed font-light"
          >
            An elite military-themed culinary destination. Elevating New Delhi's dining experience with fine fusion delicacies, bespoke craft drinks, and daily live acoustics.
          </motion.p>

          {/* Luxury details like rating & live event */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 gap-4 pb-4 pt-2 border-y border-white/5 max-w-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-sm bg-gold-accent/10 border border-gold-accent/20">
                <Star className="w-5 h-5 text-gold-accent fill-gold-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">4.6★ Google Rating</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">12,400+ Verified Guests</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-sm bg-gold-accent/10 border border-gold-accent/20">
                <Sparkles className="w-5 h-5 text-gold-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Live Gig Tonight</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Starts at 8:00 PM IST</div>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 bg-gold-accent hover:bg-gold-accent/90 text-night-black font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-sm border border-gold-accent transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(200,164,77,0.4)] cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              Reserve Your Table
            </button>
            <button
              onClick={onOpenCorporate}
              className="bg-transparent hover:bg-white/5 border border-white/30 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
            >
              Plan Your Event
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-gold-accent/60 hover:text-gold-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Deploy Outpost</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </div>

      {/* Decorative top military mesh */}
      <div className="absolute inset-x-0 top-0 h-1 md:h-1.5 bg-gradient-to-r from-gold-accent/20 via-gold-accent to-gold-accent/20" />
    </section>
  );
}
