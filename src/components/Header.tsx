import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldAlert, Calendar, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenLoyalty: () => void;
  onOpenCorporate: () => void;
  activeSection: string;
}

export default function Header({ onOpenBooking, onOpenLoyalty, onOpenCorporate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'Home', id: '#home' },
    { name: 'Menu', id: '#menu' },
    { name: 'Events & Parties', id: '#celebrations' },
    { name: 'Corporate', id: '#corporate' },
    { name: 'Contact', id: '#contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled
            ? 'py-3 bg-night-black/90 backdrop-blur-md border-b border-gold-accent/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <img
                src="/fonts/logo/logo.png"
                alt="38 Barracks Logo"
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {menuLinks.map((link) => {
                const isActive = activeSection === link.id.slice(1);
                return (
                  <a
                    key={link.id}
                    href={link.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`relative px-2.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all duration-300 ${isActive
                        ? 'text-gold-accent font-semibold'
                        : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gold-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/91999999999?text=Hi%2038%20Barracks%2C%20I%20would%20like%20to%20reserve%20a%20table."
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 border border-gold-accent/30 rounded-md hover:bg-gold-accent/10 transition-all text-gold-accent hover:border-gold-accent"
                title="WhatsApp Reservation"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-[rgba(15,26,20,0.85)] hover:bg-[rgba(15,26,20,1)] text-gold-accent font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border border-gold-accent/40 hover:border-gold-accent transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(15,26,20,0.5)] cursor-pointer"
              >
                Reserve Table
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[rgba(15,26,20,0.85)] text-gold-accent font-bold text-[10px] tracking-wider uppercase px-3.5 py-2 rounded-sm border border-gold-accent/30"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border border-gold-accent/30 text-gold-accent rounded-sm hover:bg-gold-accent/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-night-black/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-center py-6 px-5 gap-8 overflow-y-auto"
          >
            {/* Close Button inside Overlay */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-gold-accent border border-gold-accent/30 rounded-sm hover:bg-gold-accent/10"
            >
              <X className="w-6 h-6" />
            </button>

            <img src="/fonts/logo/logo.png" alt="38 Barracks Logo" className="h-16 w-auto object-contain mb-4" />

            <div className="flex flex-col items-center w-full max-w-xs gap-2">
              {menuLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-center py-3.5 px-3 rounded-sm border-b border-gold-accent/10 hover:border-gold-accent/40 text-lg font-serif text-gray-300 hover:text-gold-accent tracking-widest uppercase transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="w-16 h-[1px] bg-gold-accent/30 my-2" />

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[rgba(15,26,20,0.85)] border border-gold-accent/40 hover:bg-[rgba(15,26,20,1)] hover:border-gold-accent text-gold-accent font-bold text-sm tracking-widest uppercase py-4 rounded-sm text-center transition-all shadow-lg"
              >
                Reserve Table
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCorporate();
                  }}
                  className="w-full bg-[rgba(15,26,20,0.4)] text-gold-accent border border-gold-accent/30 hover:border-gold-accent font-bold text-[10px] tracking-widest uppercase py-3 rounded-sm text-center transition-all"
                >
                  Corporate
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLoyalty();
                  }}
                  className="w-full bg-night-black text-rose-500 border border-rose-500/30 hover:border-rose-500 font-bold text-[10px] tracking-widest uppercase py-3 rounded-sm text-center transition-all"
                >
                  VIP Club
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
