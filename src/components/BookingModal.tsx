import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Gift, ShieldAlert, CheckCircle, Smartphone } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEvent?: string;
  onNewBookingRegistered: () => void;
}

export default function BookingModal({ isOpen, onClose, preselectedEvent, onNewBookingRegistered }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '07:30 PM',
    guests: 2,
    eventType: 'Casual Outing',
    soundproofCabin: false,
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState<{
    serialCode: string;
    tableNo: string;
    date: string;
    time: string;
    guests: number;
    fullName: string;
  } | null>(null);

  // Auto-set preselected occasion category if triggered by specific cards
  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({ 
        ...prev, 
        eventType: preselectedEvent.includes('Birthday') ? 'Birthday Celebration' : 
                   preselectedEvent.includes('Anniversary') ? 'Anniversary Outing' :
                   preselectedEvent.includes('Kitty') ? 'Kitty Party' : 
                   preselectedEvent.includes('Private') ? 'VIP Private Party' : 
                   preselectedEvent.includes('Screening') ? 'Live Screening Night' : preselectedEvent
      }));
    }
  }, [preselectedEvent, isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.date) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `RES-${Math.floor(100000 + Math.random() * 900000)}`;
      const assignedTable = `T-${Math.floor(10 + Math.random() * 89)}`;
      
      setSuccessTicket({
        serialCode: code,
        tableNo: assignedTable,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        fullName: formData.fullName
      });

      setIsSubmitting(false);
      onNewBookingRegistered();
    }, 1500);
  };

  const timeSlots = [
    '12:30 PM (Lunch)', '01:30 PM (Lunch)', '03:00 PM (Lunch)',
    '07:30 PM (Dinner)', '08:30 PM (Dinner)', '09:30 PM (Dinner)',
    '10:30 PM (Nightlife)', '11:30 PM (Late Night)'
  ];

  const occasions = [
    'Casual Outing', 'Birthday Celebration', 'Anniversary Outing',
    'Kitty Party', 'VIP Private Party', 'Live Screening Night', 'Corporate Reunion'
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

          {/* Modal Container popup structure */}
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

            {/* Success Slate presentation */}
            {successTicket ? (
              <div className="p-6 md:p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-990/40 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-stencil text-3xl text-white tracking-widest uppercase">
                    OUTPOST ENGAGED
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Your luxury table booking confirmation is active
                  </p>
                </div>

                {/* Print Ticket Visual receipt */}
                <div className="border border-gold-accent/40 rounded-sm bg-olive-dark/10 p-5 space-y-4 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-12 w-12 bg-gold-accent/5 pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div>
                      <span className="text-[8px] text-gold-accent uppercase font-mono tracking-widest block">ASSESSMENT CODE</span>
                      <span className="text-sm font-semibold font-mono text-white">{successTicket.serialCode}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] text-gold-accent uppercase font-mono tracking-widest block">TABLE NUMBER</span>
                      <span className="text-sm font-semibold font-mono text-white">{successTicket.tableNo}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-sans pb-2.5 border-b border-white/5">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">OFFICER HOST</span>
                      <span className="font-bold text-white uppercase">{successTicket.fullName}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">RATIONS UNIT</span>
                      <span className="font-bold text-white">{successTicket.guests} Occupants</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">DATE SPEC.</span>
                      <span className="font-semibold text-white font-mono">{successTicket.date}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-mono mb-1">TIME SLOT</span>
                      <span className="font-semibold text-white font-mono">{successTicket.time}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 leading-relaxed max-w-sm mx-auto">
                  🚨 <span className="font-semibold text-white uppercase tracking-wider">REGIMENTAL RULES:</span> Confirmation SMS sent! Table will be held for exactly <span className="text-gold-accent font-bold">15 minutes</span> from schedules. Dress protocol applies.
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-gold-accent text-night-black font-extrabold text-xs tracking-widest uppercase rounded-sm border border-gold-accent transition-colors cursor-pointer"
                  >
                    Confirm & Close Window
                  </button>
                </div>
              </div>
            ) : (
              
              /* Form State code */
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="space-y-1">
                  <h3 className="font-stencil text-2xl text-white tracking-widest uppercase">
                    RESERVE OUTPOST TABLE
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Lock your luxury dining & nightlife spot at Connaught Place
                  </p>
                </div>

                {/* Inputs container */}
                <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Colonel Arthur"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white px-3 py-2.5 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                        Secure Contact (Phone)
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
                        Email Coordinates
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="colonel@38barracks.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-olive-dark/10 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Date & Time split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-accent" />
                        Target Date
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
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-accent" />
                        Time Segment
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                        className="w-full bg-olive-dark/15 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-night-black text-white">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occasion & Guests split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Gift className="w-3.5 h-3.5 text-gold-accent" />
                        Occasion Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData((prev) => ({ ...prev, eventType: e.target.value }))}
                        className="w-full bg-olive-dark/15 border border-white/10 text-sm text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                      >
                        {occasions.map((occ) => (
                          <option key={occ} value={occ} className="bg-night-black text-white">
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gold-accent" />
                        Guests Unit: <span className="text-white font-bold ml-1">{formData.guests} Occupants</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="25"
                        value={formData.guests}
                        onChange={(e) => setFormData((prev) => ({ ...prev, guests: parseInt(e.target.value) }))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold-accent mt-3"
                      />
                    </div>
                  </div>

                  {/* Soundproof exclusive cabin checkbox */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="soundproof"
                      checked={formData.soundproofCabin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, soundproofCabin: e.target.checked }))}
                      className="w-4 h-4 rounded-sm border-white/20 text-gold-accent bg-transparent focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="soundproof" className="text-[10px] uppercase font-mono tracking-wider text-gray-300 cursor-pointer select-none">
                      🔒 Require Exclusive Soundproof Outpost Cabin (Priority Check)
                    </label>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest font-semibold text-gold-accent block">
                      Instructions & Special Provisions
                    </label>
                    <textarea
                      placeholder="Vegetarian preferences, gluten allergy, champagne requirements, custom cake labels..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                      rows={2}
                      className="w-full bg-olive-dark/10 border border-white/10 text-xs text-white px-3 py-2.5 rounded-sm outline-none focus:border-gold-accent transition-colors"
                    />
                  </div>

                </div>

                {/* Guidelines note */}
                <div className="p-3 bg-cta-red/5 border border-cta-red/20 rounded-sm text-[10px] text-gray-400 flex gap-2">
                  <ShieldAlert className="w-4 h-4 text-cta-red flex-shrink-0 mt-0.5" />
                  <p>
                    <span className="font-bold text-white uppercase">DRESS CODE NOTE:</span> Smart casuals mandatory. Flip-flops or athletic shorts strictly prohibited from evening sessions. Valet parking commands are open on port arrivals.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold-accent hover:bg-gold-accent/90 disabled:bg-gold-accent/40 text-night-black font-extrabold text-xs tracking-widest uppercase rounded-sm border border-gold-accent transition-colors shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? 'ENGAGING COORDINATION MATRIX...' : 'COMMIT OUTPOST BOOKING'}
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
