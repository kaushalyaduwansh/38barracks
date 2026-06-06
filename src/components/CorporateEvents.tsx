import { motion } from 'motion/react';
import { Briefcase, Building2, CheckCircle2, ChevronRight, Users2, ShieldAlert } from 'lucide-react';

interface CorporateProps {
  onOpenCorporate: () => void;
}

export default function CorporateEvents({ onOpenCorporate }: CorporateProps) {
  const corporateBenefits = [
    { title: 'Modular Seating Blueprints', desc: 'Flexible lounge, buffet, banquet, or classroom seating up to 250 occupants.' },
    { title: 'Tailormade Executive Menus', desc: 'Custom pre-fixed platters, fine multi-course degustation, or global high-tea lines.' },
    { title: 'Acoustics & Screen Ordinance', desc: 'Symmetrical sound, micro-headsets, and high-contrast smart projections.' },
    { title: 'Personalized Concierge Guard', desc: 'Dedicated field manager handling registration, protocol, and dining timings.' },
    { title: 'End-to-End Billing Comfort', desc: 'Simplified corporate cards, detailed ledgers, GST approvals, and priority booking.' },
  ];

  return (
    <section id="corporate" className="relative py-24 bg-night-black">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] gold-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative, Toggles, Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.35em] font-bold text-gold-accent flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-gold-accent" />
                Executive Logistics Bureau
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading leading-tight">
                CORPORATE EVENTS <br />
                <span className="text-gold-accent font-serif font-black italic">& TEAM GATHERINGS</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Elevate your firm’s stakeholders meetings, corporate launches, VIP cocktails, or annual milestone dinners. 38 Barracks combines premium, high-status military elegance with high-speed digital tools and Michelin-standard multi-cuisine gastronomy in Connaught Place.
            </p>

            {/* List with styled checks */}
            <div className="space-y-4 pt-3 border-t border-white/5">
              {corporateBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-3.5"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{benefit.title}</h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenCorporate}
                className="bg-gold-accent hover:bg-gold-accent/90 text-night-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-sm border border-gold-accent transition-all duration-300 transform hover:scale-[1.03] shadow-[0_5px_20px_rgba(200,164,77,0.3)] cursor-pointer"
              >
                Assemble Corporate Outpost Inquiry
              </button>
            </div>
          </div>

          {/* Right Block: Luxury Photo with float items */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-sm overflow-hidden border border-gold-accent/25 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"
                alt="38 Barracks Corporate Lounges"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-black via-transparent to-transparent opacity-90" />
              
              {/* Overlay Corporate Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-night-black/95 backdrop-blur-md border border-gold-accent/20 rounded-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-gold-accent" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-accent">
                    Certified Corporate Sector
                  </span>
                </div>
                <p className="text-xs font-serif text-white tracking-wide">
                  "The finest executive hosting standard. Clear billing, high-end soundproofing, and stunning food platters."
                </p>
                <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-1.5 font-mono text-right">
                  — HR Director, McKinsey Delhi
                </div>
              </div>
            </div>

            {/* Decorative Grid Frame */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-gold-accent/10 -z-0 rounded-sm pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
