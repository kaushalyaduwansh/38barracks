import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Shield, Users, Barcode, Printer, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { LoyaltyMembership } from '../types';

interface LoyaltyProps {
  onOpenLoyalty: () => void;
  membershipState: LoyaltyMembership | null;
  onSaveMembership: (member: LoyaltyMembership) => void;
}

export default function LoyaltyProgram({ onOpenLoyalty, membershipState, onSaveMembership }: LoyaltyProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedRank: 'CADET'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ranks = [
    { name: 'CADET', discount: '15% Off', perk: 'Complimentary dessert' },
    { name: 'SERGEANT', discount: '20% Off', perk: 'Priority table reservations' },
    { name: 'LIEUTENANT', discount: '25% Off', perk: 'Chef’s table invitation' },
    { name: 'COLONEL', discount: '30% Off', perk: 'VIP soundproof cabin lockout' },
  ];

  const handleRankSelect = (rankName: string) => {
    setFormData((prev) => ({ ...prev, selectedRank: rankName }));
  };

  const handleJoin = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomId = Math.floor(100000 + Math.random() * 900000);
      const serial = `38B-${formData.selectedRank.slice(0, 3)}-${randomId}`;
      const joinedDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      const coupon = `BARRACKS30-${formData.selectedRank.toUpperCase()}`;

      const newMembership: LoyaltyMembership = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        rank: formData.selectedRank,
        serialNumber: serial,
        joinedDate,
        discountCode: coupon
      };

      onSaveMembership(newMembership);
      setIsSubmitting(false);
    }, 1200);
  };

  // Pre-fill fields if needed
  useEffect(() => {
    if (membershipState) {
      setFormData({
        fullName: membershipState.fullName,
        phone: membershipState.phone,
        email: membershipState.email,
        selectedRank: membershipState.rank
      });
    }
  }, [membershipState]);

  return (
    <section id="loyalty" className="relative py-24 bg-olive-dark/15 border-y border-gold-accent/5 overflow-hidden military-grid">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] gold-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative list of benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold-accent flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-accent" />
                Regimental Loyal Officer Guard
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
                38 BARRACKS <br />
                <span className="text-gold-accent font-serif font-black italic">LOYALTY PROGRAM</span>
              </h2>
              <div className="w-16 h-[2.5px] bg-gold-accent mt-3" />
            </div>

            {/* Special Highlight Callbox */}
            <div className="p-6 bg-cta-red/10 border-l-4 border-cta-red rounded-sm max-w-xl">
              <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-cta-red font-bold">
                Deploy Outpost Special Promotion
              </p>
              <h3 className="text-3xl font-bold font-stencil tracking-wider text-white mt-1">
                30% OFF ON YOUR NEXT VISIT
              </h3>
              <p className="text-gray-300 text-xs mt-1.5 font-light leading-relaxed">
                Construct your digital Military Loyalty ID Card today to instantly redeem a 30% discount voucher, locking early privileges.
              </p>
            </div>

            {/* Structured benefits block */}
            <div className="space-y-4 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-gold-accent mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Exclusive Member Rewards</h4>
                  <p className="text-gray-400 text-xs font-light">Free drinks allotments, dessert plates on birthdays, and double points per visit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-gold-accent mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Priority Table Air Raid</h4>
                  <p className="text-gray-400 text-xs font-light">Immediate table allocation during weekends in CP Delhi without queues.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4.5 h-4.5 text-gold-accent mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Promotion of Rank Ranks</h4>
                  <p className="text-gray-400 text-xs font-light">Sergeant, Lieutenant, and Colonel status unlocks heavy premium cocktail comps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic ID Form or Visual minted Pass */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                
                {/* STATE 2: Loyalty badge minted successfully! */}
                {membershipState ? (
                  <motion.div
                    key="pass-minted"
                    initial={{ opacity: 0, scale: 0.95, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-olive-dark rounded-sm border-2 border-gold-accent/60 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden"
                  >
                    {/* Atmospheric Watermark Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                      <Shield className="w-72 h-72 text-white" />
                    </div>

                    {/* ID Header */}
                    <div className="flex items-center justify-between border-b border-gold-accent/20 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center border border-gold-accent bg-night-black rounded-sm">
                          <span className="font-serif text-base font-black text-gold-accent">38</span>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-stencil">REGIMENTAL FORCE</h4>
                          <p className="text-[8px] text-gold-accent tracking-widest font-mono uppercase mt-0.5">MEMBER PASS ID</p>
                        </div>
                      </div>
                      <span className="bg-cta-red text-white text-[8px] font-extrabold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm border border-cta-red">
                        ACTIVE DUTY
                      </span>
                    </div>

                    {/* ID Body */}
                    <div className="grid grid-cols-3 gap-4 py-2">
                      {/* Avatar profile */}
                      <div className="col-span-1 flex flex-col items-center justify-center border border-gold-accent/25 bg-night-black/80 rounded-sm p-2 h-28 relative">
                        <Users className="w-10 h-10 text-gold-accent/50" />
                        <span className="text-[7px] text-gray-400 absolute bottom-1 font-mono uppercase tracking-widest">SECURE DATA</span>
                      </div>

                      {/* Fields */}
                      <div className="col-span-2 space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="block text-[8px] uppercase tracking-widest font-mono text-gold-accent">OFFICER NAME</span>
                          <span className="text-sm font-bold text-white uppercase tracking-wide truncate block">{membershipState.fullName}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest font-mono text-gold-accent">RANK REG.</span>
                            <span className="text-[10px] font-extrabold text-white uppercase font-stencil tracking-wider">{membershipState.rank}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] uppercase tracking-widest font-mono text-gold-accent">MEMBER EST.</span>
                            <span className="text-[9px] text-gray-300 font-mono">{membershipState.joinedDate}</span>
                          </div>
                        </div>
                        <div>
                          <span className="block text-[8px] uppercase tracking-widest font-mono text-gold-accent">CONTACT COMMS.</span>
                          <span className="text-[9px] text-gray-300 truncate block">{membershipState.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Barcode and discount section */}
                    <div className="mt-4 pt-4 border-t border-gold-accent/20 flex flex-col gap-2.5 bg-night-black/60 p-3.5 rounded-sm border border-white/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[8px] text-gold-accent uppercase font-mono tracking-widest block">LOYALTY PASS SERIAL</span>
                          <span className="text-xs text-white font-mono font-bold">{membershipState.serialNumber}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] text-rose-500 uppercase font-mono tracking-widest block">PASS DISCOUNT</span>
                          <span className="text-sm text-rose-500 font-stencil tracking-wide">30% OFF LOCKED</span>
                        </div>
                      </div>

                      {/* Barcode artwork */}
                      <div className="flex flex-col items-center pt-1 border-t border-white/5">
                        <Barcode className="w-full h-8 text-white opacity-95" />
                        <span className="text-[8px] text-gray-400 uppercase font-mono tracking-[0.25em] mt-1.5">
                          REDEEM VOUCHER CODE: <span className="text-gold-accent font-bold font-sans">{membershipState.discountCode}</span>
                        </span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => window.print()}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-transparent hover:bg-white/5 border border-white/20 hover:border-gold-accent text-white hover:text-gold-accent font-bold text-[9px] uppercase tracking-widest py-2 rounded-sm transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        Print Pass
                      </button>
                      <button
                        onClick={() => onSaveMembership(null as any)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-gold-accent hover:bg-gold-accent/90 text-night-black font-extrabold text-[9px] uppercase tracking-widest py-2 rounded-sm transition-colors cursor-pointer"
                      >
                        Create New Card
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  
                  /* STATE 1: Enter details to assemble ID */
                  <motion.form
                    key="id-builder-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleJoin}
                    className="w-full bg-night-black border border-gold-accent/25 p-6 rounded-sm space-y-4 shadow-xl"
                  >
                    <div className="space-y-1">
                      <h3 className="font-stencil text-xl text-white tracking-widest uppercase">
                        ASSEMBLE RECRUIT ID
                      </h3>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                        Enter credentials to mint professional loyalty ledger card
                      </p>
                    </div>

                    <div className="space-y-3.5 text-left">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Marshal Johnny"
                          value={formData.fullName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                          className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white px-3 py-2.5 rounded-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                          Secure Phone Connection
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 99999 99999"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white px-3 py-2.5 rounded-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Email Comms */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                          Digital Dispatch Address (Email)
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="officer@barracks.gov"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white px-3 py-2.5 rounded-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Slider Selection of Militant Rank */}
                      <div className="space-y-2 pt-2">
                        <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                          Select Requested Regiment Rank: <span className="text-white font-bold">{formData.selectedRank}</span>
                        </label>
                        <div className="grid grid-cols-4 gap-1">
                          {ranks.map((r) => {
                            const isSelect = formData.selectedRank === r.name;
                            return (
                              <button
                                key={r.name}
                                type="button"
                                onClick={() => handleRankSelect(r.name)}
                                className={`py-1.5 text-[8px] uppercase tracking-wider font-bold border rounded-sm transition-all text-center cursor-pointer ${
                                  isSelect
                                    ? 'bg-gold-accent text-night-black border-gold-accent'
                                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                {r.name.slice(0, 4)}.
                              </button>
                            );
                          })}
                        </div>
                        {/* Rank Perk box */}
                        <div className="p-2 py-1.5 bg-olive-dark/20 border border-gold-accent/15 rounded-sm text-[9px] text-gray-400">
                          ⭐️ {formData.selectedRank} Perk: <span className="text-white font-semibold">{ranks.find(r => r.name === formData.selectedRank)?.perk}</span>
                        </div>
                      </div>

                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gold-accent hover:bg-gold-accent/90 disabled:bg-gold-accent/40 text-night-black font-extrabold text-xs tracking-widest uppercase rounded-sm border border-gold-accent transition-all duration-300 shadow-[0_5px_15px_rgba(200,164,77,0.2)] cursor-pointer"
                    >
                      {isSubmitting ? 'MINTING SECURE CHIP PASS...' : 'ASSEMBLE CARD & GET 30% OFF'}
                    </button>
                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
