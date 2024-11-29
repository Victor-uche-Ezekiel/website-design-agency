import { LucideIcon } from 'lucide-react';

export interface Stat {
  number: string;
  label: string;
  sublabel: string;
}

// Using string type for icon name instead of the actual component
export interface Challenge {
  iconName: string;
  title: string;
  description: string;
}

export interface Service {
  iconName: string;
  title: string;
  description: string;
  buttonText: string;
  gradient: string;
  features: string[];  // Adding features array
}

export interface Testimonial {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
}

export interface HomePageData {
  stats: Stat[];
  challenges: Challenge[];
  services: Service[];
  testimonials: Testimonial[];
  // Add other section data types as needed
}
