export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts' | 'cocktails' | 'mocktails' | 'platters';
  imageUrl: string;
  isPopular?: boolean;
}

export interface SignatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AmenityItem {
  name: string;
  category: 'ambience' | 'offers' | 'hospitality';
}

export interface CelebrationCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  avatarUrl: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Drinks' | 'Ambience' | 'Live Music' | 'Corporate Events' | 'Celebrations';
  imageUrl: string;
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  eventType: string;
  specialRequests?: string;
}

export interface LoyaltyMembership {
  fullName: string;
  phone: string;
  email: string;
  rank: string;
  serialNumber: string;
  joinedDate: string;
  discountCode: string;
}
