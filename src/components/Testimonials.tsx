import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, ThumbsUp, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-olive-dark/15 border-t border-gold-accent/5 military-grid">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-[20%] w-[350px] h-[350px] glow-orange opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header/Promo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Highlight Left side */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-accent block">
              Direct Despatches from Ground Zero
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading leading-tight">
              WHAT OUR <br />
              <span className="text-gold-accent font-serif font-black italic">GUESTS SAY</span>
            </h2>
            <div className="w-12 h-[2px] bg-gold-accent mt-3" />
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
              We hold our reviews in highest military regard. With over 12,400+ reviews globally across CP, our regiment commands elite status.
            </p>
          </div>

          {/* Large Google Rating Badge Banner Right Side */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 bg-night-black border border-gold-accent/25 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              {/* Stars */}
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star 
                      key={star} 
                      className={`w-5 h-5 ${i === 4 ? 'text-gold-accent/50 fill-gold-accent/30' : 'text-gold-accent fill-gold-accent'}`} 
                    />
                  ))}
                </div>
                <h3 className="font-serif text-5xl font-extrabold text-white leading-none">
                  4.6 <span className="text-sm font-sans font-light text-gray-400">/ 5★ SCORE</span>
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Based on 12,420+ Google Local Guides</p>
              </div>

              <div className="h-[1px] md:h-16 w-full md:w-[1px] bg-white/10" />

              {/* Stats detail */}
              <div className="grid grid-cols-2 gap-4 text-center md:text-left w-full md:w-auto">
                <div>
                  <span className="block font-stencil text-3xl font-bold text-gold-accent leading-none">96%</span>
                  <span className="text-[8px] text-gray-400 uppercase tracking-widest font-mono mt-1.5 block">Recommended rate</span>
                </div>
                <div>
                  <span className="block font-stencil text-3xl font-bold text-gold-accent leading-none">4.8★</span>
                  <span className="text-[8px] text-gray-400 uppercase tracking-widest font-mono mt-1.5 block">Food & Cocktails bar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((rev, index) => {
            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 px-7 bg-night-black border border-gold-accent/10 rounded-sm hover:border-gold-accent/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Floating Quote Symbol */}
                <div className="absolute top-6 right-6 text-gold-accent/10 group-hover:text-gold-accent/20 transition-colors pointer-events-none">
                  <Quote className="w-10 h-10 transform scale-x-[-1]" />
                </div>

                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
                    ))}
                  </div>

                  {/* Narrative Body */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light italic">
                    "{rev.content}"
                  </p>
                </div>

                {/* Reviewer bio block */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-cover rounded-full border border-gold-accent/25"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                        {rev.author}
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10" />
                      </h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-medium mt-0.5">{rev.role}</p>
                    </div>
                  </div>
                  
                  {/* Metadata and helpful count */}
                  <div className="text-right flex flex-col justify-between py-0.5">
                    <span className="text-[9px] text-gray-500 font-mono flex items-center gap-1 justify-end">
                      <Calendar className="w-3 h-3" />
                      {rev.date}
                    </span>
                    <span className="text-[9px] text-gold-accent flex items-center gap-1 justify-end mt-1">
                      <ThumbsUp className="w-2.5 h-2.5" />
                      Helpful (42)
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
