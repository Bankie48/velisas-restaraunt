
import { MenuItem, Review, RestaurantInfo } from './types';

export const THEME = {
  accent: '#E67E22',
  dark: '#1A1A1A',
  charcoal: '#262626',
  white: '#FFFFFF',
  textMain: '#333333',
  textLight: '#777777',
  fontSerif: "'Playfair Display', serif",
  fontSans: "'Inter', sans-serif",
};

export const RESTAURANT_DATA: RestaurantInfo = {
  name: "Velisa's Restaurant",
  tagline: "Enjoy delicious meals made with love.",
  rating: 4.5,
  reviewCount: 278,
  location: "Msasani Bay, Dar es Salaam",
  address: "765R+P5 Dar es Salaam, Tanzania",
  hours: "Mon - Sun: 10:00 AM - 10:00 PM",
  phone: "+255 700 000 000",
  email: "info@velisasrestaurant.com",
  socials: {
    instagram: "https://instagram.com/velisas_restaurant",
    facebook: "https://facebook.com/VelisasRestaurant",
    twitter: "https://twitter.com/velisas_dar",
    whatsapp: "https://wa.me/255700000000"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Grilled Red Snapper',
    description: 'Freshly caught red snapper, seasoned with Swahili spices and grilled to perfection.',
    price: '20,000 TZS',
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: 'Grilled Chicken',
    description: 'Succulent chicken breast marinated in local spices and grilled to perfection.',
    price: '15,000 TZS',
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    name: 'Beef Burger',
    description: 'Juicy beef patty with fresh lettuce, tomato, and our signature Velisa sauce.',
    price: '12,000 TZS',
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    name: 'French Fries',
    description: 'Hand-cut golden potatoes, double-fried for maximum crunch.',
    price: '6,000 TZS',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm5',
    name: 'Passion Fruit Mojito',
    description: 'Refreshing blend of local passion fruit, mint, and soda.',
    price: '10,000 TZS',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Asha',
    rating: 5,
    comment: 'Chakula kizuri sana!',
    date: '2 days ago'
  },
  {
    id: 'r2',
    author: 'John',
    rating: 4,
    comment: 'Huduma nzuri na haraka.',
    date: '1 week ago'
  }
];
