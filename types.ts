
export type Category = 'Appetizers' | 'Main Courses' | 'Desserts' | 'Drinks' | 'Fast Food' | 'Snacks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  location: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  socials: SocialLinks;
}
