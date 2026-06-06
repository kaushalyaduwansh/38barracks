import { Instagram, Facebook, Youtube, Linkedin, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { name: 'Home Base', id: '#home' },
    { name: 'Experience', id: '#about' },
    { name: 'Ration Ledgers (Menu)', id: '#menu' },
    { name: 'Visual Gallery', id: '#gallery' },
    { name: 'Celebrate Outpost', id: '#celebrations' },
    { name: 'Corporate Priority', id: '#corporate' },
    { name: 'Loyalty Club', id: '#loyalty' },
    { name: 'Dispatch Ground Desk', id: '#contact' },
  ];

  return (
    <footer className="bg-night-black border-t border-gold-accent/20 relative z-10 pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Core footer branding & details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2 group w-fit"
            >
              <img src="/fonts/logo/logo.jpg" alt="38 Barracks Logo" className="h-12 w-auto object-contain" />
            </a>
            
            <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans max-w-sm">
              Connaught Place’s benchmark military fine dining, craft mixology, and high-energy nightlife enclave. Formulated in elite, Dubai-spirited dark cinematic styling.
            </p>

            {/* Social handles list */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, url: 'https://instagram.com/38barracks' },
                { icon: Facebook, url: 'https://facebook.com/38barracks' },
                { icon: Youtube, url: 'https://youtube.com' },
                { icon: Linkedin, url: 'https://linkedin.com' },
              ].map((social, i) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 flex items-center justify-center rounded-sm bg-olive-dark/20 border border-gold-accent/20 text-gold-accent hover:bg-gold-accent hover:text-night-black hover:border-gold-accent transition-all duration-300"
                  >
                    <IconComp className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Anchor links */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C8A44D]">
              Tactical Outing Anchors
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {footerLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className="text-xs text-gray-400 hover:text-white transition-colors block tracking-wide uppercase font-mono text-[9px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Core Legal / SEO and taglines */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C8A44D]">
              REGISTRATION BULLETINS & BRIEFINGS
            </h4>
            <div className="p-4 bg-olive-dark/10 border border-gold-accent/15 rounded-sm">
              <p className="text-[10px] uppercase font-mono tracking-widest text-gold-accent font-bold flex items-center gap-1.5 mb-1 bg-transparent">
                <ShieldAlert className="w-3.5 h-3.5" />
                DRESS CODE PROTOCOLS
              </p>
              <p className="text-[10px] text-gray-300 leading-relaxed font-light">
                Smart casuals and elite evening wear. Slippers, shorts, or sports sandals are strictly barred during nightlife acoustics hours. Couples and mixed groups prioritised.
              </p>
            </div>
          </div>

        </div>

        {/* Divider bar */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-accent/20 to-transparent pt-4" />

        {/* SEO Copywriting Text block */}
        <div className="text-center space-y-4">
          <p className="text-[11px] text-gray-500 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="text-gray-400 font-semibold uppercase font-mono text-[9px]">SEO Index brief:</span> 38 Barracks is a premium restaurant and bar in Connaught Place, New Delhi, known for live music, nightlife stargazes, corporate events, birthday celebrations, kitty parties, and luxury dining experiences. Recognized as one of the best restaurants in Connaught Place (CP Delhi), we offer signature craft cocktails, premium multi-cuisine menus (North Indian, Asian, Continental), and daily live events. Secure your spot in advance with early bookings!
          </p>

          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
            © {currentYear} 38 Barracks Outposts. Made with high-end premium hospitality code blueprints. All rights reserved. Registered trademark.
          </p>
        </div>

      </div>
    </footer>
  );
}
