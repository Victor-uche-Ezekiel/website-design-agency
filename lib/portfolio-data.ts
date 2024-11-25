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
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory and AI-powered recommendations.",
    slug: "modern-e-commerce-platform",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    clientUrl: "https://example-ecommerce.com",
    sector: "Retail",
    type: "B2C",
    objective:
      "The client needed a modern e-commerce platform that could handle their growing inventory and provide personalized recommendations to their customers.",
    process:
      "We developed a scalable solution using Next.js and TypeScript, integrating Stripe for payments and implementing an AI-powered recommendation system.",
    result:
      "The platform has increased sales by 200% and improved customer engagement through personalized recommendations.",
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
    title: "Corporate Dashboard",
    description:
      "An intuitive analytics dashboard for enterprise data visualization and reporting.",
    slug: "corporate-dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    technologies: ["React", "D3.js", "Material UI", "GraphQL"],
    clientUrl: "https://example-corp.com",
    sector: "Enterprise",
    type: "B2B",
    objective:
      "The client required a comprehensive dashboard solution for visualizing complex enterprise data and generating detailed reports.",
    process:
      "We created a responsive dashboard using React and D3.js, with GraphQL for efficient data fetching and Material UI for a professional interface.",
    result:
      "The dashboard has streamlined reporting processes and saved hundreds of hours in data analysis time.",
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
    title: "Startup Landing Page",
    description:
      "A high-converting landing page with modern design and seamless animations.",
    slug: "startup-landing-page",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    clientUrl: "https://example-startup.com",
    sector: "Technology",
    type: "B2C",
    objective:
      "The client needed a high-converting landing page that could showcase their innovative product and drive sales.",
    process:
      "We designed and developed a modern landing page using Next.js and Framer Motion, with Tailwind CSS for a responsive and visually appealing interface.",
    result:
      "The landing page has increased conversions by 50% and improved the client's online presence.",
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
