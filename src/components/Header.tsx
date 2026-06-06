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
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
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
              <div className="relative w-10 h-10 flex items-center justify-center border-2 border-gold-accent bg-olive-dark/40 rounded-sm">
                <span className="font-serif text-2xl font-extrabold text-gold-accent tracking-tighter">38</span>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cta-red rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-stencil text-2xl text-white tracking-widest leading-none group-hover:text-gold-accent transition-colors">
                  BARRACKS
                </span>
                <span className="text-[9px] text-gold-accent tracking-[0.25em] font-medium leading-none mt-1">
                  CONNAUGHT PLACE
                </span>
              </div>
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
                    className={`relative px-2.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                      isActive
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
                className="bg-gold-accent hover:bg-gold-accent/90 text-night-black font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border border-gold-accent transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(200,164,77,0.3)] cursor-pointer"
              >
                Reserve Table
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-gold-accent text-night-black font-bold text-[10px] tracking-wider uppercase px-3.5 py-2 rounded-sm"
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

      {/* Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full z-30 bg-night-black border-b border-gold-accent/20 shadow-2xl lg:hidden flex flex-col py-6 px-5 gap-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {menuLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left py-2.5 px-3 rounded-sm border border-gold-accent/5 hover:border-gold-accent/30 text-xs text-gray-300 hover:text-white hover:bg-olive-dark/20 tracking-wider uppercase font-medium transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="h-[1px] bg-gold-accent/10 my-1" />

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gold-accent text-night-black font-bold text-xs tracking-widest uppercase py-3 rounded-sm text-center"
              >
                Reserve Table
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCorporate();
                  }}
                  className="w-full bg-olive-dark/80 text-gold-accent border border-gold-accent/30 font-bold text-[10px] tracking-widest uppercase py-2.5 rounded-sm text-center"
                >
                  Corporate Event
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLoyalty();
                  }}
                  className="w-full bg-night-black text-rose-500 border border-rose-500/30 font-bold text-[10px] tracking-widest uppercase py-2.5 rounded-sm text-center"
                >
                  30% OFF Club
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
