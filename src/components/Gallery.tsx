import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ChevronLeft, ChevronRight, X, Compass } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Food' | 'Drinks' | 'Ambience' | 'Live Music' | 'Corporate Events' | 'Celebrations'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    'All',
    'Food',
    'Drinks',
    'Ambience',
    'Live Music',
    'Corporate Events',
    'Celebrations'
  ] as const;

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const openLightbox = (id: string) => {
    const originalIndex = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? GALLERY_ITEMS.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === GALLERY_ITEMS.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-night-black">
      {/* Background Ornament */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-accent font-semibold">
            The Visual Arsenal Log
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
            INSIDE 38 BARRACKS
          </h2>
          <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-4" />
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12 max-w-5xl mx-auto">
          {filterCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-4 py-2 text-[10px] sm:text-xs tracking-wider uppercase font-semibold transition-all duration-300 rounded-sm cursor-pointer border ${
                  isSelected
                    ? 'bg-gold-accent text-night-black border-gold-accent shadow-[0_4px_15px_rgba(200,164,77,0.35)]'
                    : 'text-gray-400 hover:text-white border-white/5 bg-white/5 hover:border-gold-accent/30'
                }`}
              >
                {cat === 'Corporate Events' ? 'Corporate' : cat}
              </button>
            );
          })}
        </div>

        {/* Zoomable Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => openLightbox(item.id)}
                className="group relative cursor-pointer aspect-square rounded-sm overflow-hidden border border-gold-accent/10 hover:border-gold-accent/50 shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Cinematic Overlay & Content on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-black via-night-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="space-y-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[8px] uppercase tracking-[0.2em] font-mono text-gold-accent font-semibold block">
                      {item.category} Outpost
                    </span>
                    <h3 className="text-white text-sm font-bold uppercase tracking-wider">{item.title}</h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-300 pt-1">
                      <Eye className="w-3.5 h-3.5 text-gold-accent" />
                      <span>View full cloche</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram anchor tagline */}
        <div className="mt-12 text-center text-xs text-gray-400 uppercase tracking-[0.25em]">
          📸 Tag <span className="text-white font-bold">#38Barracks</span> in your dispatches to get featured inside our weekly briefings!
        </div>

      </div>

      {/* LIGHTBOX MODAL DIALOG */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
            {/* Lighter back overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-night-black/98"
            />

            {/* Lightbox body content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center rounded-sm text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 bg-white/5 hover:bg-gold-accent text-white hover:text-night-black border border-white/20 p-2.5 rounded-sm cursor-pointer transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Slider Image frame */}
              <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden border border-gold-accent/20">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] max-w-full object-contain rounded-sm"
                />

                {/* Left arrow controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-night-black/75 border border-white/10 hover:border-gold-accent hover:text-gold-accent text-white rounded-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right arrow controls */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-night-black/75 border border-white/10 hover:border-gold-accent hover:text-gold-accent text-white rounded-sm cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image Description Footer */}
              <div className="mt-4 text-center space-y-1 max-w-xl mx-auto">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-accent font-semibold block">
                  {GALLERY_ITEMS[lightboxIndex].category} Outfitting Portfolio
                </span>
                <h3 className="text-white text-lg font-bold uppercase tracking-wider">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <p className="text-gray-400 text-xs">
                  Aesthetic layout at Connaught Place, New Delhi. (File reference: {lightboxIndex + 1} / {GALLERY_ITEMS.length})
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
