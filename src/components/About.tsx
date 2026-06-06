import { motion } from 'motion/react';
import { ShieldCheck, Music4, GlassWater, Landmark, Landmark as Award, ChevronRight } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'Live Music', icon: Music4, desc: 'Acoustic acts & top DJs' },
    { title: 'Premium Bar', icon: GlassWater, desc: 'Dubai-tier signature mixology' },
    { title: 'Multi-Cuisine', icon: Award, desc: 'Gourmet Indian, Asian & Western' },
    { title: 'VIP Lounges', icon: ShieldCheck, desc: 'Pre-reserved soundproof sectors' },
  ];

  return (
    <section id="about" className="relative py-24 bg-olive-dark/15 border-y border-gold-accent/5 overflow-hidden military-grid">
      {/* Decorative Side Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 glow-orange pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border border-gold-accent/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                alt="38 Barracks Ambience"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-black via-transparent to-transparent opacity-80" />
              
              {/* Floating Military Stamp Badge */}
              <div className="absolute bottom-6 left-6 p-4 bg-night-black/90 backdrop-blur-md border border-gold-accent/30 rounded-sm">
                <p className="font-stencil text-gold-accent text-3xl leading-none">EST. 2016</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Delhi's Finest Fortify</p>
              </div>
            </div>

            {/* Decorative Offset Gold Frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-gold-accent/15 -z-0 rounded-sm pointer-events-none" />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-accent block">
                Military Luxury Elite Outpost
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide luxury-heading uppercase">
                AN EXPERIENCE <br />
                <span className="text-gold-accent font-serif font-black italic">BEYOND</span> DINING
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-light">
              <p>
                <span className="font-semibold text-white">38 Barracks</span> is not just a commercial dining space — it is New Delhi's landmark military-themed culinary enclave, high-energy bar, and VIP party destination located in the heart of <span className="text-gold-accent font-semibold">Connaught Place</span>.
              </p>
              <p>
                Inspired by the exclusive lifestyle of veteran army colonels, military officers, and luxurious Dubai-tier nightlife aesthetics, the venue brings together tactical discipline, exquisite architecture, high-energy soundscapes, and flawless hospitality. 
              </p>
              <p>
                Whether you're stepping in for a high-intensity corporate luncheon, an intimate couple's candlelit booking, a multi-generational family banquet, or a wild nightlife weekend fueled by award-winning resident DJs — the barracks are ready to serve.
              </p>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gold-accent/10">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={index} className="flex gap-3.5 p-3 rounded-sm bg-night-black/40 border border-white/5 hover:border-gold-accent/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-gold-accent/10 border border-gold-accent/30">
                      <IconComp className="w-5 h-5 text-gold-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 text-gray-400 text-xs">
              <div className="flex gap-8 w-full sm:w-auto">
                <div>
                  <span className="block font-serif text-4xl font-extrabold text-white leading-none">38</span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-accent font-mono mt-1 block">VIP Outpost Cabins</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10 self-center" />
                <div>
                  <span className="block font-serif text-4xl font-extrabold text-white leading-none">12+</span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-accent font-mono mt-1 block">Signature Mixology Cups</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10 self-center" />
                <div>
                  <span className="block font-serif text-4xl font-extrabold text-white leading-none">Daily</span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-accent font-mono mt-1 block">Live Gigs & Acoustics</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
