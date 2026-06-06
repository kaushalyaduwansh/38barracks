import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass, MessageSquare } from 'lucide-react';

export default function ContactLocation() {
  const operations = [
    { label: 'Weekly Outpost Patrol (Mon - Sun)', val: '12:00 PM (Noon) — 01:00 AM (Midnight) IST' },
    { label: 'Gourmet Gastronomy Hours', val: '12:00 PM (Noon) — 11:30 PM' },
    { label: 'Premium Nightlife Acoustics & Beats', val: '08:00 PM — 01:00 AM (Midnight)' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-night-black border-t border-gold-accent/5">
      {/* Background Ornament banner */}
      <div className="absolute top-1/4 right-[25%] w-[400px] h-[400px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-accent font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-4.5 h-4.5 text-gold-accent" />
            Fortress Coordinates
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
            CONTACT & LOCATION
          </h2>
          <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-4" />
        </div>

        {/* 2-Column Map vs details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Styled Map Iframe */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-gold-accent/40 shadow-xl bg-night-black aspect-video sm:h-[460px] w-full">
              {/* Google Maps Iframe */}
              <iframe
                title="38 Barracks Connaught Place Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9960241038596!2d77.2207908!3d28.6298889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36a32dfb07%3A0x6bba8fb166eb8122!2s38%20Barracks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(120deg) contrast(110%) brightness(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay GPS Indicator */}
              <div className="absolute top-4 left-4 bg-night-black/90 border border-gold-accent/30 p-3 rounded-sm">
                <span className="text-[8px] text-gold-accent font-mono tracking-widest font-bold uppercase block">
                  COORDINATES FOUND
                </span>
                <span className="text-[10px] text-white font-mono">
                  28.6299° N, 77.2208° E
                </span>
              </div>
            </div>

            {/* Directions Link widget */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://maps.app.goo.gl/NWeTz1gBscS5N3MRA"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 py-3 border border-gold-accent/30 hover:border-gold-accent hover:bg-gold-accent/10 text-gold-accent hover:text-white text-[10px] tracking-widest font-extrabold uppercase rounded-sm transition-all"
              >
                Launch Google Maps Navigation
              </a>
              <a
                href="tel:+91999999999"
                className="flex items-center justify-center gap-2 py-3 bg-olive-dark/40 hover:bg-white/5 border border-white/10 text-white text-[10px] tracking-widest font-extrabold uppercase rounded-sm transition-all"
              >
                Call Valet Outpost
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details & Operational hours */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Address cards */}
            <div className="space-y-6">
              
              {/* Item: Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-gold-accent/10 border border-gold-accent/35 rounded-sm flex items-center justify-center text-gold-accent">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-accent">Outpost Registry Address</h4>
                  <p className="text-white text-sm mt-1 leading-relaxed max-w-sm">
                    M-38, Outer Circle, Opp. Shankar Market, Connaught Place, New Delhi, Delhi 110001
                  </p>
                </div>
              </div>

              {/* Item: Phones */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-gold-accent/10 border border-gold-accent/35 rounded-sm flex items-center justify-center text-gold-accent">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-accent">Telephone Connections</h4>
                  <p className="text-white text-sm mt-1 font-semibold">
                    <a href="tel:+91999999999" className="hover:text-gold-accent transition-colors">+91 99999 99999</a>
                    <span className="text-gray-500 mx-2">|</span>
                    <a href="tel:+911142424242" className="hover:text-gold-accent transition-colors">011-42424242</a>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-mono">Duty Liaison Desk Line</p>
                </div>
              </div>

              {/* Item: Emails */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-gold-accent/10 border border-gold-accent/35 rounded-sm flex items-center justify-center text-gold-accent">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-accent">Strategic Correspondence</h4>
                  <p className="text-white text-sm mt-1 font-semibold truncate hover:text-gold-accent transition-colors">
                    <a href="mailto:liaison@38barracks.com">liaison@38barracks.com</a>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-mono">Inquiries & Franchise briefs</p>
                </div>
              </div>

            </div>

            {/* Operational hours divider bar */}
            <div className="p-6 bg-olive-dark/10 border border-gold-accent/15 rounded-sm space-y-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock className="w-4.5 h-4.5 text-gold-accent" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-accent">
                  Operational Timings
                </span>
              </div>

              <div className="space-y-3 divide-y divide-white/5">
                {operations.map((op, i) => (
                  <div key={i} className={`pt-2.5 ${i === 0 ? 'pt-0 border-t-0' : ''}`}>
                    <span className="block text-[9px] uppercase tracking-wider text-gray-400 mt-0.5">{op.label}</span>
                    <span className="block text-xs font-bold text-white tracking-wide mt-1">{op.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
