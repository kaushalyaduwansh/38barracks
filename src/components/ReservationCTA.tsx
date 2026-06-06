import { Calendar, Phone, MessageSquare } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

export default function ReservationCTA({ onOpenBooking }: CTAProps) {
  return (
    <section className="relative py-24 bg-night-black overflow-hidden select-none">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=1920')" }}
        />
        {/* Extreme vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-night-black via-transparent to-night-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-black via-olive-dark/40 to-night-black" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="p-8 md:p-16 border border-gold-accent/40 rounded-sm bg-olive-dark/15 backdrop-blur-sm space-y-6 relative sm:space-y-8">
          
          {/* Subtle star pattern decoration */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-night-black px-6 border-x border-gold-accent/40 text-gold-accent text-xs font-serif uppercase tracking-[0.3em] font-extrabold flex items-center gap-1.5 py-1">
            ⭐️ SECURE SECTOR ⭐️
          </div>

          <div className="space-y-3.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
              READY TO EXPERIENCE <br />
              <span className="text-gold-accent font-serif font-black italic">38 BARRACKS?</span>
            </h2>
            <div className="w-16 h-[2.5px] bg-gold-accent mx-auto" />
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed tracking-wider font-light">
              Reserve your outpost table today for unparalleled fusion fine dining, daily acoustic gigs, craft mixology and Dubai-tier nightlife vibes. Connaught Place, New Delhi awaits.
            </p>
          </div>

          {/* Core conversion CTA action list */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-4">
            
            {/* Book Table Online */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gold-accent hover:bg-gold-accent/90 text-night-black font-extrabold text-xs tracking-widest uppercase px-7 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(200,164,77,0.3)] cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              Book Table Online
            </button>

            {/* Call Direct */}
            <a
              href="tel:+91999999999"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-sm transition-colors"
            >
              <Phone className="w-4.5 h-4.5 text-gold-accent" />
              Call Duty Desk
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/91999999999?text=Hi%2038%20Barracks%2C%20I%20would%20like%20to%20reserve%20a%20table%20please."
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-sm transition-colors"
            >
              <MessageSquare className="w-4.5 h-4.5 text-emerald-400" />
              WhatsApp Comms
            </a>

          </div>

          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
            🕒 Quick Table confirmations within 10 minutes • Dedicated Valet Parking Included
          </p>

        </div>
      </div>
    </section>
  );
}
