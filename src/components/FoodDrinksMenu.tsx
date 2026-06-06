import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Info, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  onOpenBooking: (preselectedEvent?: string) => void;
}

export default function FoodDrinksMenu({ onOpenBooking }: MenuProps) {
  const [activeTab, setActiveTab ] = useState<'starters' | 'mains' | 'desserts' | 'cocktails' | 'mocktails' | 'platters'>('starters');
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuFilter, setMenuFilter] = useState<'all' | 'veg' | 'nonveg' | 'popular'>('all');

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'starters', label: 'Signature Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'cocktails', label: 'Bespoke Cocktails' },
    { id: 'mocktails', label: 'Mocktails' },
    { id: 'platters', label: 'Platters & Grills' },
  ];

  // Active tab items
  const showcasedItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  // Helper tags for custom items
  const isVeg = (itemName: string) => {
    const name = itemName.toLowerCase();
    return name.includes('paneer') || name.includes('shaffron') || name.includes('risotto') || name.includes('sweet') || name.includes('shahi') || name.includes('lava') || name.includes('lemonade') || name.includes('mojito') || name.includes('shmor') || name.includes('s’mor');
  };

  // Full interactive search resolver
  const resolvedFullMenuItems = MENU_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (menuFilter === 'veg') return isVeg(item.name);
    if (menuFilter === 'nonveg') return !isVeg(item.name) && item.category !== 'cocktails' && item.category !== 'mocktails' && item.category !== 'desserts';
    if (menuFilter === 'popular') return !!item.isPopular;

    return true;
  });

  return (
    <section id="menu" className="relative py-24 bg-night-black">
      {/* Decorative Blur and mesh */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] gold-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-accent font-semibold">
            Fine Mess Hall Gastronomy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide uppercase luxury-heading">
            FOOD & DRINKS SHOWCASE
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto font-light leading-relaxed">
            Every plate is high-quality culinary ordinance; prepared with authentic spices and local flair, balanced by elite global presentation.
          </p>
          <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-4" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto p-1 bg-olive-dark/15 border border-gold-accent/15 rounded-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs tracking-wider uppercase font-semibold transition-all duration-300 rounded-sm cursor-pointer ${
                  isActive
                    ? 'bg-gold-accent text-night-black shadow-[0_4px_15px_rgba(200,164,77,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {showcasedItems.map((item, index) => {
              const vegetarian = isVeg(item.name);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row gap-5 p-5 bg-olive-dark/10 hover:bg-olive-dark/20 border border-gold-accent/10 hover:border-gold-accent/35 rounded-sm transition-all duration-300 group"
                >
                  {/* Food Picture */}
                  <div className="relative w-full sm:w-32 h-32 rounded-sm overflow-hidden flex-shrink-0 border border-white/5">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {item.isPopular && (
                      <span className="absolute top-2 left-2 bg-cta-red text-white text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold rounded-sm shadow-md">
                        MUST TRY
                      </span>
                    )}
                  </div>

                  {/* Body & Descriptions */}
                  <div className="flex-grow flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {/* Diet Indicator (V vs. Nv) */}
                          {item.category !== 'cocktails' && item.category !== 'mocktails' && (
                            <span 
                              className={`w-3.5 h-3.5 border flex items-center justify-center p-[2px] ${
                                vegetarian ? 'border-green-600' : 'border-red-800'
                              }`}
                              title={vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${vegetarian ? 'bg-green-600' : 'bg-red-800'}`} />
                            </span>
                          )}
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-gold-accent transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <span className="text-sm font-bold text-gold-accent font-serif tracking-tight pr-1">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 font-light leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-gray-400">
                        CP Enclave Hot-Plate
                      </span>
                      <button
                        onClick={() => onOpenBooking()}
                        className="text-[10px] uppercase tracking-widest font-bold text-gold-accent hover:text-white transition-colors cursor-pointer"
                      >
                        Order at Table →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global CTA button for FULL MENU SEARCH WIDGET */}
        <div className="text-center">
          <button
            onClick={() => setIsFullMenuOpen(true)}
            className="inline-flex items-center gap-3 bg-transparent hover:bg-gold-accent text-gold-accent hover:text-night-black font-bold uppercase text-xs tracking-widest px-8 py-3.5 rounded-sm border-2 border-gold-accent transition-all duration-300 shadow-[0_5px_15px_rgba(200,164,77,0.1)] cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Explore Full Menu & Bar Ledger
          </button>
        </div>

      </div>

      {/* FULL DETAILED MENU MODAL */}
      <AnimatePresence>
        {isFullMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullMenuOpen(false)}
              className="absolute inset-0 bg-night-black/95 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-night-black border border-gold-accent/35 rounded-sm flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gold-accent/20 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-olive-dark/20">
                <div>
                  <h3 className="font-serif font-extrabold text-2xl tracking-wider text-white uppercase flex items-center gap-2">
                    <Compass className="w-5 h-5 text-gold-accent" />
                    THE BARRACKS GOURMET MANIFESTO
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
                    Comprehensive Pricing and Inventory ledger list
                  </p>
                </div>
                <button
                  onClick={() => setIsFullMenuOpen(false)}
                  className="absolute top-4 right-4 md:static text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-sm cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>

              {/* Utility Filter & Searched Input Bar */}
              <div className="p-4 bg-night-black border-b border-white/5 flex flex-col sm:flex-row items-center gap-3">
                {/* Search Text */}
                <div className="relative w-full sm:flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search dishes, cocktails, desserts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-olive-dark/10 border border-white/10 hover:border-white/20 focus:border-gold-accent text-sm text-white pl-9 pr-4 py-2.5 rounded-sm outline-none transition-colors font-sans"
                  />
                </div>

                {/* Filter Controls */}
                <div className="flex gap-1 bg-white/5 p-1 rounded-sm border border-white/5 flex-shrink-0 overflow-x-auto w-full sm:w-auto">
                  {(
                    [
                      { id: 'all', label: 'All Ledger' },
                      { id: 'veg', label: 'Pure Veg' },
                      { id: 'nonveg', label: 'Classic Meats' },
                      { id: 'popular', label: 'Top Sold' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setMenuFilter(item.id)}
                      className={`px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                        menuFilter === item.id
                          ? 'bg-gold-accent text-night-black'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu items scroll box */}
              <div className="flex-grow p-6 overflow-y-auto space-y-6">
                {resolvedFullMenuItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {resolvedFullMenuItems.map((item) => {
                      const vegetarian = isVeg(item.name);
                      return (
                        <div key={item.id} className="group p-3 border-b border-white/5 hover:border-gold-accent/20 flex gap-4 transition-colors">
                          <img
                            src={item.imageUrl}
                            alt=""
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 object-cover rounded-sm border border-white/5"
                          />
                          <div className="flex-grow space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                {item.category !== 'cocktails' && item.category !== 'mocktails' && (
                                  <span 
                                    className={`w-3 h-3 border flex items-center justify-center p-[2px] ${
                                      vegetarian ? 'border-green-600' : 'border-red-800'
                                    }`}
                                  >
                                    <span className={`w-1 h-1 rounded-full ${vegetarian ? 'bg-green-600' : 'bg-red-800'}`} />
                                  </span>
                                )}
                                {item.name}
                              </span>
                              <span className="text-xs font-bold text-gold-accent font-serif">{item.price}</span>
                            </div>
                            <p className="text-[11px] text-gray-400 leading-relaxed font-light">{item.description}</p>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-[8px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-sm uppercase tracking-widest font-mono">
                                {item.category}
                              </span>
                              {item.isPopular && (
                                <span className="text-[8px] bg-gold-accent/10 text-gold-accent px-2 py-[1px] border border-gold-accent/20 rounded-sm uppercase tracking-widest font-semibold">
                                  REGIMENTAL FAVOURITE
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-16 text-center">
                    <Info className="w-8 h-8 text-gold-accent mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-semibold text-white uppercase tracking-wider">No rations found matching filters.</p>
                    <p className="text-xs text-gray-400 mt-1">Try resetting search string or category tags.</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-olive-dark/20 border-t border-gold-accent/25 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Total available inventory: {MENU_ITEMS.length} items catalogued
                </span>
                <button
                  onClick={() => {
                    setIsFullMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="bg-gold-accent text-night-black font-bold uppercase text-[10px] tracking-widest px-4 py-2 rounded-sm"
                >
                  Apply For Table Reservation
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
