import { MenuItem, SignatureCard, AmenityItem, CelebrationCard, TestimonialItem, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Signature Starters
  {
    id: 'starter-1',
    name: 'Commanding Officer’s Chili Chicken',
    description: 'Crispy fried pulled tenders tossed in a custom Szechuan military pepper glaze and fresh scallions.',
    price: '₹545',
    category: 'starters',
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'starter-2',
    name: 'Colonel’s Paneer Tikka Stuffed',
    description: 'Fresh farmhouse paneer stuffed with rich mint pesto and direct coal roasted with an edible 24k gold leaf accent.',
    price: '₹515',
    category: 'starters',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'starter-3',
    name: 'Dynamite Golden Prawns',
    description: 'Elite tiger prawns tempura-fried, glazed in cold sriracha emulsion, presented in a smoked box with aromatic beechwood.',
    price: '₹675',
    category: 'starters',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'starter-4',
    name: 'Gunpowder Scotch Eggs',
    description: 'Slow-poached organic eggs, wrapped in spiced minced lamb and crisped, served with a military mustard drop.',
    price: '₹595',
    category: 'starters',
    imageUrl: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=800'
  },

  // Mains
  {
    id: 'main-1',
    name: 'The General’s Butler Butter Chicken',
    description: 'Charcoal-shredded tandoori chicken simmered in an opulent velvet tomato-gravy enriched with white butter and cashew nut paste.',
    price: '₹645',
    category: 'mains',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'main-2',
    name: 'Barracks Special Rogan Josh',
    description: 'Slow-braised premium Kashmiri lamb shank infused with alkanet root extract and authentic spices under active dum seal.',
    price: '₹710',
    category: 'mains',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'main-3',
    name: 'Truffle Mushroom Risotto',
    description: 'Slow-creamed Carnaroli rice cooked in heavy parmigiano brodo, loaded with wild porcini mushrooms and finished with black summer truffle oil.',
    price: '₹625',
    category: 'mains',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'main-4',
    name: 'Royal Barracks Biryani (Dum-cooked)',
    description: 'Aromatic basmati layers stacked with caramelized onions, fresh mint, and choice saffron milk. Hand-served in personal brass deg.',
    price: '₹695',
    category: 'mains',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Campfire Deconstructed S’mores',
    description: 'Warm dark chocolate ganache, graham soil, hand-torched marshmallow meringue served with active negative ice fog smoke.',
    price: '₹415',
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dessert-2',
    name: 'Saffron Shahi Tukda Gold',
    description: 'Crispitied ghee toast, double-thick whole milk rabri, crushed green pistachio and silver vark finish.',
    price: '₹395',
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },

  // Cocktails
  {
    id: 'cocktail-1',
    name: 'Major General’s Smoked Martini',
    description: 'Premium London dry gin, dry vermouth, locked with oil-pressed green herbs, presented inside an oak-smoked glass cloche.',
    price: '₹795',
    category: 'cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'cocktail-2',
    name: '38 Caliber Bourbon Sour',
    description: 'Rich barrel-aged Kentucky bourbon, active citrus extract, organic egg white froth, gold dust stencil branding.',
    price: '₹845',
    category: 'cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cocktail-3',
    name: 'The Grenade Old Fashioned',
    description: 'Muddled Demerara, angostura bitters, single malt wash, poured over an ice sector modeled like a combat grenade.',
    price: '₹895',
    category: 'cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },

  // Mocktails
  {
    id: 'mocktail-1',
    name: 'Bulletproof Citrus Punch',
    description: 'Muddled blood orange, fresh lime, biological cold rosemary extract, carbonized pink salt soda rim.',
    price: '₹375',
    category: 'mocktails',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mocktail-2',
    name: 'No-Duty Combat Mojito',
    description: 'Bruised sweet mint leaves, fresh lime wheels, organic pure cane extract, topped with crisp cold-pressed cucumber juice.',
    price: '₹345',
    category: 'mocktails',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'
  },

  // Platters
  {
    id: 'platter-1',
    name: 'Royal Infantry Mixed Platter',
    description: 'An elite culinary arsenal featuring custom spiced lamb chops, gold tandoori paneer, commanding seekh kebabs, and mint chatpata chicken.',
    price: '₹1,595',
    category: 'platters',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'platter-2',
    name: 'Imperial Barracks Seafood Lock',
    description: 'Sizzling tiger prawns, coastal kingfish fillets, crispy squid rings tossed with fresh kaffir-lime compound butter and military pepper sauce.',
    price: '₹1,895',
    category: 'platters',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
  }
];

export const SIGNATURE_EXPERIENCES: SignatureCard[] = [
  {
    id: 'sig-1',
    title: 'Multi-Cuisine Dining',
    description: 'A masterpiece selection of North Indian tandoor, delicate Asian wok, and Continental fine dining elements structured with visual luxury.',
    iconName: 'Utensils',
    badge: 'Elite Kitchen'
  },
  {
    id: 'sig-2',
    title: 'Live Music & Celebrity DJs',
    description: 'Daily high-energy gigs and acoustics giving way to premium Dubai-style electronic nightlife and celebrity artist integrations.',
    iconName: 'Music',
    badge: 'Acoustics & Nightlife'
  },
  {
    id: 'sig-3',
    title: 'Craft Signature Mixology',
    description: 'An elite bar setting featuring drinks crafted with botanical infusions, visual smoke cloches, and customized ice stamp profiles.',
    iconName: 'GlassWater',
    badge: 'Artisanal Bar'
  },
  {
    id: 'sig-4',
    title: 'Elite VIP Celebrations',
    description: 'Private lounges and bulletproof support for personal birthdays, milestones, and high-end profile milestone dinners.',
    iconName: 'Sparkles',
    badge: 'Custom Party Plans'
  },
  {
    id: 'sig-5',
    title: 'Corporate Hosting & Networking',
    description: 'Impeccable layouts, technical screening equipment, customized buffets, and separate executive soundproofing.',
    iconName: 'Briefcase',
    badge: 'Corporate Priority'
  },
  {
    id: 'sig-6',
    title: 'Royal Loyalty Guard',
    description: 'Continuous military rank progression yielding complimentary covers, priority tables, and customized chef plates.',
    iconName: 'Award',
    badge: 'VIP Club'
  }
];

export const AMENITIES: AmenityItem[] = [
  { name: 'Live Band Performances', category: 'ambience' },
  { name: 'Premium DJ Nights', category: 'ambience' },
  { name: 'Full International Bar', category: 'hospitality' },
  { name: 'Rooftop Lounge Aesthetics', category: 'ambience' },
  { name: 'Elite Family Sections', category: 'hospitality' },
  { name: 'Romantic Couple Booths', category: 'hospitality' },
  { name: 'Executive Corporate Cabins', category: 'hospitality' },
  { name: 'Birthday Event Coordination', category: 'offers' },
  { name: 'Candlelight Private Dining', category: 'hospitality' },
  { name: 'Complimentary Valet Parking', category: 'hospitality' },
  { name: 'VIP Ultra-Seating Lounges', category: 'hospitality' },
  { name: 'Fully Air Conditioned Arena', category: 'ambience' },
  { name: 'Priority Tables On Call', category: 'offers' },
  { name: 'Military ID Loyalty Perks', category: 'offers' },
  { name: 'High-Impact Photo Backdrops', category: 'ambience' },
  { name: 'Custom Catering Options', category: 'offers' }
];

export const CELEBRATIONS: CelebrationCard[] = [
  {
    id: 'cel-1',
    title: 'Birthday Celebrations',
    description: 'High-energy military-grade cake entries, luxury table setups, dedicated photography team, and heavy beats curated by checking in with our resident DJs.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cel-2',
    title: 'Anniversary Celebrations',
    description: 'Dim romantic lighting, fine candlelight menu setups, signature champagne popping, and customized strings acoustics to serenate your bond.',
    imageUrl: 'https://images.unsplash.com/photo-1507504038482-7621c51d661b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cel-3',
    title: 'High-Profile Kitty Parties',
    description: 'Sophisticated gourmet grazing setups, personalized multi-course mocktail menus, premium seating, and dedicated service staff to curate elite group bonding.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cel-4',
    title: 'Private & VIP Parties',
    description: 'Complete floor mock blockades, customized mixologist setups, tailormade entrance security controls, and exclusive sound profiles for top-tier hosts.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cel-5',
    title: 'High-Octane Live Screenings',
    description: 'Massive ultra-low lag projection screens, stadium-grade surround sound acoustics, energetic fan groupings, and bucket deals running all match night.',
    imageUrl: 'https://images.unsplash.com/photo-1486282944864-a77424943f01?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    author: 'Siddharth Sharma',
    role: 'Venture Capitalist',
    rating: 5,
    content: '38 Barracks represents fine hospitality at its peak in Delhi. The military luxury aesthetic is breathtaking, but the real star is the food and live acoustics. The Gunpowder Scotch Eggs and Butter Chicken were out of this world!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    author: 'Ananya Goel',
    role: 'Fashion Designer & Influencer',
    rating: 5,
    content: 'The mixology here competes directly with Dubai premium nightlife! The oak wood smoke martini was an entire cinematic experience. The staff treated our birthday cohort like royalty. Beautiful lighting and top-tier photos!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    author: 'Maj. Vikram Malhotra (Retd.)',
    role: 'Veteran Host',
    rating: 5,
    content: 'Extremely impressed by the military decorum and attention to historical visual motifs at 38 Barracks. They have coupled soldierly orderliness with elite dining perfection. Standard of hospitality is pristine.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    date: '3 days ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Signature Tandoor Platters',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-2',
    title: 'Artisanal Rosemary Infusions',
    category: 'Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-3',
    title: 'Military Vintage Arsenal Lounge',
    category: 'Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-4',
    title: 'High Energy Band Gigs',
    category: 'Live Music',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-5',
    title: 'Elite Executive Launches',
    category: 'Corporate Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-6',
    title: 'Romantic Candlelight Booth',
    category: 'Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1507504038482-7621c51d661b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-7',
    title: 'High-spirited B-day Gigs',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-8',
    title: 'Premium Cold Sea Crab Cloche',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
  }
];

export const INSTAGRAM_REELS = [
  {
    id: 'reel-1',
    title: 'Weekend Night Party at Connaught Place',
    likes: '14.2K',
    views: '280K',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=400',
    link: 'https://instagram.com/38barracks'
  },
  {
    id: 'reel-2',
    title: 'Major Generals Bourbon Sour Craft Assembly',
    likes: '8.9K',
    views: '124K',
    thumbnail: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=400',
    link: 'https://instagram.com/38barracks'
  },
  {
    id: 'reel-3',
    title: 'Unbelievable Saffron Shahi Tukda Gold Prep',
    likes: '11.5K',
    views: '195K',
    thumbnail: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400',
    link: 'https://instagram.com/38barracks'
  },
  {
    id: 'reel-4',
    title: 'Daily Midweek Acoustic Live Vibes Delhi',
    likes: '7.1K',
    views: '92K',
    thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=400',
    link: 'https://instagram.com/38barracks'
  }
];
