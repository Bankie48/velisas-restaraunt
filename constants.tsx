
import { MenuItem, Review } from './types';

export const RESTAURANT_INFO = {
  name: "Velisa's",
  tagline: "Experience the Taste of Msasani Bay",
  rating: 4.3,
  reviewCount: 276,
  location: "Msasani Bay, Dar es Salaam",
  address: "765R+P5 Dar es Salaam",
  hours: "10:00 AM - 10:00 PM",
  phone: "+255 000 000 000",
  email: "info@velisas.com",
  socials: {
    instagram: "@velisas_restaurant",
    facebook: "VelisasRestaurant",
    whatsapp: "+255000000000"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Red Snapper',
    description: 'Freshly caught red snapper, seasoned with Swahili spices and grilled to perfection.',
    price: '35,000 TZS',
    category: 'Main Courses',
    image: 'https://picsum.photos/id/429/800/600'
  },
  {
    id: '2',
    name: 'Velisa\'s Signature Platter',
    description: 'A mix of calamari, prawns, and lobster served with garlic butter sauce.',
    price: '65,000 TZS',
    category: 'Main Courses',
    image: 'https://picsum.photos/id/102/800/600'
  },
  {
    id: '3',
    name: 'Coconut Calamari',
    description: 'Crispy fried calamari rings with a hint of coconut and lime dipping sauce.',
    price: '18,000 TZS',
    category: 'Appetizers',
    image: 'https://picsum.photos/id/493/800/600'
  },
  {
    id: '4',
    name: 'Msasani Bay Salad',
    description: 'Fresh organic greens, avocado, mango, and a passion fruit vinaigrette.',
    price: '15,000 TZS',
    category: 'Appetizers',
    image: 'https://picsum.photos/id/488/800/600'
  },
  {
    id: '5',
    name: 'Spiced Fruit Tart',
    description: 'Local seasonal fruits in a buttery pastry shell with cinnamon cream.',
    price: '12,000 TZS',
    category: 'Desserts',
    image: 'https://picsum.photos/id/63/800/600'
  },
  {
    id: '6',
    name: 'Passion Fruit Mojito',
    description: 'Refreshing blend of local passion fruit, mint, and soda.',
    price: '10,000 TZS',
    category: 'Drinks',
    image: 'https://picsum.photos/id/453/800/600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Amani Joseph',
    rating: 5,
    comment: 'The best red snapper in Dar! The ambiance at Msasani Bay is just incredible at sunset.',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'Sarah M.',
    rating: 4,
    comment: 'Great food and friendly staff. The coconut calamari is a must-try!',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Daniel K.',
    rating: 5,
    comment: 'Perfect for a quiet dinner. The no-contact delivery service is also very efficient.',
    date: '3 days ago'
  }
];
