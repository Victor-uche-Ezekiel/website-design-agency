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
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
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
    image: "/projects/ecommerce.jpg",
    clientUrl: "https://example.com",
    sector: "Retail",
    type: "E-commerce",
    objective: "Improve user experience and increase conversion rates",
    process: "User research, wireframing, prototyping, development",
    result: "40% increase in conversion rate",
    link: "https://example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    testimonial: {
      quote:
        "The e-commerce platform transformed our business. Sales increased by 200% in the first quarter.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Forward",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    nextProject: {
      title: "Corporate Dashboard",
      description:
        "An intuitive analytics dashboard for enterprise data visualization.",
      slug: "corporate-dashboard",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "2",
    category: "Digital Marketing",
    title: "Brand Identity System",
    description: "Development of a comprehensive brand identity system including logo, typography, and digital assets.",
    slug: "brand-identity-system",
    image: "/projects/branding.jpg",
    clientUrl: "https://example.com",
    sector: "Technology",
    type: "Branding",
    objective: "Create a cohesive brand identity",
    process: "Brand research, design exploration, implementation",
    result: "Successful brand launch with positive feedback",
    link: "https://example.com",
    technologies: ["Figma", "Adobe Creative Suite", "Brand Design", "Typography"],
    testimonial: {
      quote:
        "The dashboard has streamlined our reporting process and saved countless hours.",
      author: "Michael Chen",
      role: "CTO",
      company: "TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    previousProject: {
      title: "Modern E-commerce Platform",
      description:
        "A full-featured e-commerce solution with real-time inventory.",
      slug: "modern-e-commerce-platform",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    nextProject: {
      title: "Startup Landing Page",
      description: "A high-converting landing page with modern design.",
      slug: "startup-landing-page",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "3",
    category: "UI/UX Design",
    title: "Mobile App Interface",
    description: "Design and development of an intuitive mobile app interface for a fitness tracking application.",
    slug: "mobile-app-interface",
    image: "/projects/mobile-app.jpg",
    clientUrl: "https://example.com",
    sector: "Health & Fitness",
    type: "Mobile App",
    objective: "Create an intuitive user interface",
    process: "User research, wireframing, prototyping",
    result: "95% user satisfaction rate",
    link: "https://example.com",
    technologies: ["React Native", "UI/UX Design", "Prototyping", "User Testing"],
    testimonial: {
      quote:
        "Our conversion rate doubled after launching the new landing page.",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      company: "InnovateLab",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    previousProject: {
      title: "Corporate Dashboard",
      description:
        "An intuitive analytics dashboard for enterprise data visualization.",
      slug: "corporate-dashboard",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: "4",
    category: "Web Development",
    title: "AI-Powered Education Platform",
    description:
      "An innovative learning platform with personalized content delivery.",
    slug: "ai-powered-education-platform",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    technologies: ["Next.js", "Python", "TensorFlow", "AWS"],
    clientUrl: "https://example-education.com",
    sector: "Education",
    type: "B2B",
    objective:
      "The client required a cutting-edge education platform that could provide personalized learning experiences for students.",
    process:
      "We developed a scalable solution using Next.js and Python, integrating TensorFlow for AI-powered content delivery and AWS for reliable infrastructure.",
    result:
      "The platform has improved student engagement by 30% and increased learning outcomes by 25%.",
    testimonial: {
      quote:
        "Student engagement increased significantly with the personalized learning approach.",
      author: "David Park",
      role: "Principal",
      company: "Future Academy",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    previousProject: {
      title: "Startup Landing Page",
      description: "A high-converting landing page with modern design.",
      slug: "startup-landing-page",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  },
];
