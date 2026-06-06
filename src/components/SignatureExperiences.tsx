import { motion } from 'motion/react';
import { Utensils, Music, GlassWater, Sparkles, Briefcase, Award } from 'lucide-react';
import { SIGNATURE_EXPERIENCES } from '../data';

interface SignatureProps {
  onOpenBooking: () => void;
  onOpenLoyalty: () => void;
  onOpenCorporate: () => void;
}

const iconMap: { [key: string]: any } = {
  Utensils: Utensils,
  Music: Music,
  GlassWater: GlassWater,
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  Award: Award
};

export default function SignatureExperiences({ onOpenBooking, onOpenLoyalty, onOpenCorporate }: SignatureProps) {
  
  const handleCardAction = (id: string) => {
    if (id === 'sig-6') {
      onOpenLoyalty();
    } else if (id === 'sig-5') {
      onOpenCorporate();
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="relative py-24 bg-night-black">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] gold-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-accent font-semibold">
            The Standard of Regimented Exclusivity
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
            WHY PEOPLE LOVE <br />
            <span className="text-gold-accent font-serif font-black italic">38 BARRACKS</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-4" />
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGNATURE_EXPERIENCES.map((card, index) => {
            const IconComponent = iconMap[card.iconName] || Sparkles;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleCardAction(card.id)}
                className="relative flex flex-col justify-between p-8 rounded-sm bg-olive-dark/10 border border-gold-accent/15 hover:border-gold-accent/50 transition-all duration-300 group cursor-pointer hover:bg-olive-dark/25"
              >
                {/* Background soft glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/0 via-gold-accent/0 to-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

                <div className="space-y-4">
                  {/* Card Upper: Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 flex items-center justify-center bg-gold-accent/10 border border-gold-accent/30 rounded-sm group-hover:bg-gold-accent text-gold-accent group-hover:text-night-black transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {card.badge && (
                      <span className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/5 border border-white/10 group-hover:border-gold-accent/30 group-hover:text-gold-accent text-gray-400 rounded-sm transition-colors">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-gold-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gold-accent group-hover:text-white transition-colors">
                  <span className="uppercase tracking-widest text-[10px]">
                    {card.id === 'sig-6' ? 'Claim Membership' : card.id === 'sig-5' ? 'Enquire Now' : 'Book Outpost Table'}
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
