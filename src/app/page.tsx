"use client";

import { useState, useEffect } from 'react';
import { MessageSquare, Calendar, ArrowUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import SignatureExperiences from '../components/SignatureExperiences';
import Amenities from '../components/Amenities';
import FoodDrinksMenu from '../components/FoodDrinksMenu';
import EventsCelebrations from '../components/EventsCelebrations';
import CorporateEvents from '../components/CorporateEvents';
import LoyaltyProgram from '../components/LoyaltyProgram';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ReservationCTA from '../components/ReservationCTA';
import InstagramFeed from '../components/InstagramFeed';
import ContactLocation from '../components/ContactLocation';
import Footer from '../components/Footer';

// Modals
import BookingModal from '../components/BookingModal';
import CorporateModal from '../components/CorporateModal';

// Types
import { LoyaltyMembership } from '../types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [preselectedEvent, setPreselectedEvent] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [alertNotification, setAlertNotification] = useState<string | null>(null);

  const [loyaltyMember, setLoyaltyMember] = useState<LoyaltyMembership | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('38B_LOYALTY');
      if (saved) {
        setLoyaltyMember(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Handle local state updates for loyalty card
  const handleSaveLoyalty = (member: LoyaltyMembership) => {
    setLoyaltyMember(member);
    if (member) {
      localStorage.setItem('38B_LOYALTY', JSON.stringify(member));
      triggerAlert('🏆 Congratulations! Your Regimental Loyalty ID card has been successfully minted.');
    } else {
      localStorage.removeItem('38B_LOYALTY');
      triggerAlert('Dismissed Card Record.');
    }
  };

  // Helper alert notification triggers
  const triggerAlert = (message: string) => {
    setAlertNotification(message);
    setTimeout(() => {
      setAlertNotification(null);
    }, 4500);
  };

  // Pre-configured handlers for trigger popups
  const handleOpenBooking = (eventTitle?: string) => {
    setPreselectedEvent(eventTitle);
    setIsBookingOpen(true);
  };

  const handleOpenCorporate = () => {
    setIsCorporateOpen(true);
  };

  const handleOpenLoyaltyScroll = () => {
    const el = document.querySelector('#loyalty');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Sync scroll listeners: Toggle floating buttons & register active section light-ups
  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating scroll button
      setShowScrollTop(window.scrollY > 500);

      // Section highlighters
      const sections = [
        'home', 'about', 'menu', 'gallery', 'celebrations',
        'corporate', 'loyalty', 'testimonials', 'contact'
      ];

      for (const sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if center of viewport hits
          if (rect.top <= 200 && rect.bottom >= 180) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-night-black text-[#F3F4F6] selection:bg-gold-accent selection:text-night-black">
      
      {/* 1. Header (Sticky high-contrast) */}
      <Header
        activeSection={activeSection}
        onOpenBooking={() => handleOpenBooking()}
        onOpenLoyalty={handleOpenLoyaltyScroll}
        onOpenCorporate={handleOpenCorporate}
      />

      {/* 2. Main Page Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCorporate={handleOpenCorporate}
        />

        {/* About Experience Section */}
        <About />

        {/* Signature Experience Block Grid */}
        <SignatureExperiences
          onOpenBooking={() => handleOpenBooking()}
          onOpenLoyalty={handleOpenLoyaltyScroll}
          onOpenCorporate={handleOpenCorporate}
        />

        {/* Bento Amenities & Features Section */}
        <Amenities />

        {/* Gastronomy categories & Menu showcase */}
        <FoodDrinksMenu
          onOpenBooking={(title) => handleOpenBooking(title)}
        />

        {/* Occasions, celebrations, parties list */}
        <EventsCelebrations
          onOpenBooking={(title) => handleOpenBooking(title)}
        />

        {/* Corporate listings briefings */}
        <CorporateEvents
          onOpenCorporate={handleOpenCorporate}
        />

        {/* Skeuomorphic Military ID Card Loyalty Program */}
        <LoyaltyProgram
          onOpenLoyalty={handleOpenLoyaltyScroll}
          membershipState={loyaltyMember}
          onSaveMembership={handleSaveLoyalty}
        />

        {/* Visual gallery block with lightboxes */}
        <Gallery />

        {/* Testimonials with verified Google rankings */}
        <Testimonials />

        {/* Premium Reservation conversion banner */}
        <ReservationCTA
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Instagram Follow reel grid */}
        <InstagramFeed />

        {/* Contact info logistics & Google Map coordinate frame */}
        <ContactLocation />
      </main>

      {/* 3. Footer Regulatory Briefs */}
      <Footer />

      {/* 4. MODALS & INQUIRY CHANNELS */}
      
      {/* Multi-step table reservation modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedEvent={preselectedEvent}
        onNewBookingRegistered={() => {
          triggerAlert('📝 Table reservation registered in active duty queues!');
        }}
      />

      {/* Corporate events business inquiry wizard */}
      <CorporateModal
        isOpen={isCorporateOpen}
        onClose={() => setIsCorporateOpen(false)}
        onNewInquiryRegistered={() => {
          triggerAlert('💼 Corporate brief received! Liaison officer has been allocated.');
        }}
      />

      {/* FLOATING ACTION UTILITY TRIGGERS */}
      
      {/* (A) Floating WhatsApp Dispatch */}
      <a
        href="https://wa.me/91999999999?text=Hi%2038%20Barracks%2C%20I%3B%20like%20to%20place%20a%20table%20reservation."
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 left-6 z-30 group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-105 transition-all text-sm font-semibold tracking-wide"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5.5 h-5.5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 uppercase tracking-widest text-[10px] whitespace-nowrap">
          Order Table Support
        </span>
      </a>

      {/* (B) Scrolling Floor Reservation badge */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5"
          >
            {/* Rapid Reserve Button */}
            <button
              onClick={() => handleOpenBooking()}
              className="flex items-center gap-2 bg-gold-accent hover:bg-gold-accent/90 text-night-black font-extrabold text-[10px] tracking-widest uppercase px-5 py-3 rounded-full shadow-[0_5px_15px_rgba(200,164,77,0.4)] transition-all transform hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </button>

            {/* Scroll to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-night-black/90 hover:bg-gold-accent text-gold-accent hover:text-night-black border border-gold-accent/30 hover:border-gold-accent p-2 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer self-end"
              title="Return to Headquarters"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* (C) SYSTEM VOUCHER NOTIFICATION TOAST */}
      <AnimatePresence>
        {alertNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-45 bg-[#0F1A14] border border-gold-accent text-white py-3.5 px-6 rounded-sm shadow-2xl flex items-center gap-3 text-xs w-full max-w-md"
          >
            <Sparkles className="w-5 h-5 text-gold-accent animate-spin" />
            <span className="font-medium">{alertNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
