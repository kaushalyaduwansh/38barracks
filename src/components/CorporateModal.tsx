import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, Briefcase, DollarSign, Calendar, Users, CheckCircle, ShieldCheck } from 'lucide-react';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewInquiryRegistered: () => void;
}

export default function CorporateModal({ isOpen, onClose, onNewInquiryRegistered }: CorporateModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    designation: '',
    phone: '',
    email: '',
    attendees: '15 - 30 (Brief Room)',
    date: '',
    budget: 'Premium Executive Suite',
    brief: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.company || !formData.phone || !formData.email || !formData.date) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSuccessTicket(`CORP-LEDR-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      onNewInquiryRegistered();
    }, 1400);
  };

  const handleCloseSuccess = () => {
    setSuccessTicket(null);
    onClose();
  };

  const attendeeTiers = [
    '15 - 30 (Brief Room Cabin)',
    '30 - 60 (Mid Floor Outpost)',
    '60 - 120 (Commanding Hall Block)',
    '120+ (Complete Venue Lockout)'
  ];

  const budgets = [
    'Moderate Standing Cover',
    'Premium Executive Suite',
    'Limitless VIP Regimental Grandeur'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          
          {/* Backdrop screen filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-night-black/90 backdrop-blur-sm"
          />

          {/* Modal popup structural container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-night-black border border-gold-accent/35 rounded-sm shadow-2xl overflow-hidden text-left"
          >
            {/* Top gold header boundary */}
            <div className="h-1 bg-gradient-to-r from-gold-accent/30 via-gold-accent to-gold-accent/30" />

            {/* Close modal action x button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-sm hover:bg-white/5 cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Presentation card */}
            {successTicket ? (
              <div className="p-6 md:p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gold-accent/10 border-2 border-gold-accent rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <ShieldCheck className="w-8 h-8 text-gold-accent" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-stencil text-3xl text-white tracking-widest uppercase">
                    LIAISON OFFICER DISPATCHED
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Your luxury corporate logistics docket is being processed
                  </p>
                </div>

                {/* Print Ticket Visual receipt */}
                <div className="border border-gold-accent/30 rounded-sm bg-olive-dark/10 p-5 space-y-4 text-left relative overflow-hidden">
                  <span className="absolute top-2 right-2 bg-gold-accent/10 border border-gold-accent/30 text-gold-accent text-[7px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded-sm">
                    LIAISON BRIEF SECURED
                  </span>
                  
                  <div className="space-y-1">
                    <span className="text-[8px] text-gold-accent uppercase font-mono tracking-widest block">DOCKET SYSTEM LEDGER ID</span>
                    <span className="text-sm font-semibold font-mono text-white block">{successTicket}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-sans pt-1 border-t border-white/5">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">RECRUIT COMPANY</span>
                      <span className="font-bold text-white uppercase">{formData.company}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">EXECUTIVE POINT</span>
                      <span className="font-bold text-white uppercase">{formData.fullName} ({formData.designation})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-sans pt-1 border-t border-white/5">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">PLANNING UNIT TIER</span>
                      <span className="font-semibold text-white">{formData.attendees}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">EST. CAMPAIGN DATE</span>
                      <span className="font-semibold text-white font-mono">{formData.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 leading-relaxed max-w-sm mx-auto">
                  📞 <span className="font-semibold text-white uppercase">ATTENTION:</span> An elite personal Corporate Liaison officer has been allocated and will ring you within <span className="text-gold-accent font-bold">45 minutes</span> to coordinate customized menu drafts.
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCloseSuccess}
                    className="w-full py-3 bg-gold-accent text-night-black font-extrabold text-xs tracking-widest uppercase rounded-sm border border-gold-accent transition-colors cursor-pointer animate-pulse"
                  >
                    Liaison Confirmed & Dismissed
                  </button>
                </div>
              </div>
            ) : (
              
              /* Form State code */
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="space-y-1">
                  <h3 className="font-stencil text-2xl text-white tracking-widest uppercase">
                    CORPORATE GATHERING BRIEF
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Design custom menu limits, acoustic layouts, and priority seating
                  </p>
                </div>

                {/* Inputs container */}
                <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
                  
                  {/* Company & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="McKinsey Delhi"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        Liaison Designation
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="HR Director"
                        value={formData.designation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                      Lead Organizer Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Officer Arthur"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white px-3 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                        Direct Phone Contact
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                        Business Correspondence Mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="liaison@corporate.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Attendees & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        Expected Attendees
                      </label>
                      <select
                        value={formData.attendees}
                        onChange={(e) => setFormData((prev) => ({ ...prev, attendees: e.target.value }))}
                        className="w-full bg-olive-dark/15 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      >
                        {attendeeTiers.map((tier) => (
                          <option key={tier} value={tier} className="bg-night-black text-white">
                            {tier}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      Budget allocation
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                      className="w-full bg-olive-dark/15 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-night-black text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requirements brief */}
                  <div className="space-y-1 border-t border-white/5 pt-2.5">
                    <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                      Specific Logistics & Menu Directives
                    </label>
                    <textarea
                      placeholder="Buffet requirements, bar tab authorizations, VIP acoustic allocations, sound isolation instructions..."
                      value={formData.brief}
                      onChange={(e) => setFormData((prev) => ({ ...prev, brief: e.target.value }))}
                      rows={2.5}
                      className="w-full bg-olive-dark/10 border border-white/10 text-xs text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                    />
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold-accent hover:bg-gold-accent/90 disabled:bg-gold-accent/40 text-night-black font-extrabold text-xs tracking-widest uppercase rounded-sm border border-gold-accent transition-colors shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? 'MINTING LOGISTICS PORTAL...' : 'SUBMIT CORPS LOGISTICS BRIEF'}
                  </button>
                </div>

              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
