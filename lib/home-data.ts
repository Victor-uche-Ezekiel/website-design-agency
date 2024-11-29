import { Stat, Challenge, Service } from "@/types/home";
import type { LucideProps } from "lucide-react";

export interface AboutStat {
  iconName: "Users2" | "Heart" | "Trophy" | "Clock";
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    number: "8989",
    label: "Hyper Qualified Opportunities",
    sublabel: "by AI-based Engine",
  },
  {
    number: "3x",
    label: "Increase in conversion rates",
    sublabel: "when using AI software Hub",
  },
  {
    number: "21%",
    label: "Increase in deal size",
    sublabel: "from focused matchmaking",
  },
];

export const aboutStats: AboutStat[] = [
  {
    iconName: "Users2",
    value: 200,
    prefix: "",
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered digital solutions"
  },
  {
    iconName: "Heart",
    value: 98,
    prefix: "",
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations"
  },
  {
    iconName: "Trophy",
    value: 15,
    prefix: "",
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition for excellence"
  },
  {
    iconName: "Clock",
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Support Available",
    description: "Always here when you need us"
  }
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "In our discovery session, we collaborate with you and extract as much information about the project as possible, along with any expectations you have."
  },
  {
    number: "02",
    title: "Planning",
    description: "Wire-framing and sitemap creation are an essential part of the process. This allows everyone a birds eye view of the entire website."
  },
  {
    number: "03",
    title: "Design",
    description: "During the design phase, we can explore all the ideas and requests brought up in the discovery phase. We offer a number of design revisions until we get the desired look and feel for your project."
  },
  {
    number: "04",
    title: "Development",
    description: "We primarily develop websites using modern frameworks and technologies for the vast majority of our clients. We are also proficient with WordPress and custom needs."
  },
  {
    number: "05",
    title: "Testing",
    description: "Before launching your new site, we test everything thoroughly to ensure your website works as it should, as well as being fully responsive."
  }
];

export const challenges: Challenge[] = [
  {
    iconName: "Users2",
    title: "Competition",
    description: "Using data makes you 23x more likely to acquire new customers.",
  },
  {
    iconName: "Scale3",
    title: "Financial Constraints",
    description: "59% of businesses struggle to secure the right finance.",
  },
  {
    iconName: "TrendingUp",
    title: "Scale",
    description: "92% of businesses fail to hit their ambitions.",
  },
];

export const services: Service[] = [
  {
    iconName: "Code2",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices to deliver exceptional user experiences.",
    buttonText: "Learn More",
    gradient: "from-blue-600 to-purple-600",
    features: [
      "Frontend Development",
      "Backend Systems",
      "API Integration",
      "Performance Optimization"
    ]
  },
  {
    iconName: "Palette",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with your users in mind, ensuring seamless interactions and engagement.",
    buttonText: "Learn More",
    gradient: "from-pink-600 to-purple-600",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design"
    ]
  },
  {
    iconName: "ShoppingCart",
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with secure payment integration, inventory management, and customer analytics.",
    buttonText: "Learn More",
    gradient: "from-green-600 to-blue-600",
    features: [
      "Mobile-First Design",
      "Cross-Browser Support",
      "Touch-Friendly Interface",
      "Adaptive Images"
    ]
  },
  {
    iconName: "LineChart",
    title: "Analytics & SEO",
    description:
      "Data-driven optimization and search engine strategies to increase your visibility and drive organic growth.",
    buttonText: "Learn More",
    gradient: "from-purple-600 to-blue-600",
    features: [
      "Custom Website Design",
      "Responsive Layouts",
      "UI/UX Optimization",
      "Brand Integration"
    ]
  },
];

export const featuredProjects = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    description: "Complete overhaul of an e-commerce platform with modern UI/UX principles",
    slug: "ecommerce-platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description: "Modern healthcare management system with real-time patient tracking",
    slug: "healthcare-management",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "Financial Analytics Dashboard",
    description: "Real-time financial analytics dashboard with advanced visualization",
    slug: "financial-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Express"],
  }
];

export const testimonials = [
  {
    id: "1",
    title: "Amazing Web Design Service",
    description: "They transformed our online presence completely. The team was professional and delivered beyond our expectations.",
    slug: "amazing-web-design",
    image: "/testimonials/client1.jpg",
    technologies: ["React", "Tailwind CSS", "Next.js"]
  },
  {
    id: "2",
    title: "Outstanding E-commerce Solution",
    description: "The e-commerce platform they built for us has significantly improved our online sales and customer experience.",
    slug: "ecommerce-solution",
    image: "/testimonials/client2.jpg",
    technologies: ["Shopify", "Custom CSS", "JavaScript"]
  },
  {
    id: "3",
    title: "Excellent UI/UX Design",
    description: "Their attention to detail in UI/UX design has helped us achieve a much better user engagement rate.",
    slug: "ui-ux-design",
    image: "/testimonials/client3.jpg",
    technologies: ["Figma", "Adobe XD", "Prototyping"]
  }
];
