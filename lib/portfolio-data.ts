export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Project {
  category: string;
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  gallery?: string[];
  clientUrl: string;
  sector: string;
  type: string;
  objective: string;
  process: string;
  result: string;
  link: string;
  technologies?: string[];
  testimonial?: Testimonial;
  previousProject?: {
    title: string;
    description: string;
    image: string;
    slug: string;
  };
  nextProject?: {
    title: string;
    description: string;
    image: string;
    slug: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    category: "Web Development",
    title: "E-commerce Platform Redesign",
    description: "A complete redesign and development of an e-commerce platform focusing on user experience and conversion optimization.",
    slug: "ecommerce-platform-redesign",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1698335991476-9b4efe7c6d03?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1698335991431-7409fdbd6779?auto=format&fit=crop&q=80&w=1200"
    ],
    clientUrl: "https://example.com",
    sector: "Retail",
    type: "E-commerce",
    objective: "Increase online sales and improve user experience",
    process: "User research, wireframing, prototyping, development",
    result: "150% increase in conversion rate",
    link: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    testimonial: {
      quote: "The team delivered an exceptional e-commerce platform that exceeded our expectations.",
      author: "John Smith",
      role: "CEO",
      company: "Fashion Retail Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  },
  {
    id: "2",
    category: "Mobile Development",
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and personal fitness goals.",
    slug: "fitness-tracking-app",
    image: "https://images.unsplash.com/photo-1698335991476-9b4efe7c6d03?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1698335991476-9b4efe7c6d03?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1698335991431-7409fdbd6779?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200"
    ],
    clientUrl: "https://example.com",
    sector: "Health & Fitness",
    type: "Mobile App",
    objective: "Create an intuitive fitness tracking solution",
    process: "Market research, UX design, development, testing",
    result: "100,000+ downloads in first month",
    link: "https://example.com",
    technologies: ["React Native", "Firebase", "TypeScript"],
    testimonial: {
      quote: "The app has transformed how our users track their fitness journey.",
      author: "Sarah Lee",
      role: "Product Manager",
      company: "FitTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    }
  },
  {
    id: "3",
    category: "Web Development",
    title: "Educational Platform",
    description: "An interactive learning platform for students and educators with real-time collaboration features.",
    slug: "educational-platform",
    image: "https://images.unsplash.com/photo-1698335991431-7409fdbd6779?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1698335991431-7409fdbd6779?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1698335991476-9b4efe7c6d03?auto=format&fit=crop&q=80&w=1200"
    ],
    clientUrl: "https://example.com",
    sector: "Education",
    type: "EdTech",
    objective: "Modernize online learning experience",
    process: "Stakeholder interviews, prototyping, agile development",
    result: "500% increase in student engagement",
    link: "https://example.com",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
    testimonial: {
      quote: "This platform has revolutionized how we deliver online education.",
      author: "Michael Brown",
      role: "Director of Education",
      company: "EduTech Inc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
  }
];
