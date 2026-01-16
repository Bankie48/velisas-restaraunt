
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Drinks';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export enum Section {
  Home = 'home',
  Menu = 'menu',
  About = 'about',
  Reviews = 'reviews',
  Contact = 'contact'
}
