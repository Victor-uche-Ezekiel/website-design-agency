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

export const aboutContent = {
  heading: "Pioneering Digital Innovation",
  subheading: "Creating Exceptional Digital Experiences",
  text: "At Vikiflow, we're more than just a web design agency - we're your partner in digital transformation. Our innovative team combines creativity with technical expertise to create stunning digital experiences that drive real business results.",
  highlights: [
    {
      title: "Innovation First",
      description:
        "We stay ahead of the curve with cutting-edge technologies and design trends.",
    },
    {
      title: "Client Success",
      description:
        "Your success is our priority. We work closely with you to achieve your business goals.",
    },
    {
      title: "Quality Driven",
      description:
        "We maintain high standards in every aspect of our work, from design to development.",
    },
  ],
};

export const stats: Stat[] = [
  {
    number: "100%",
    label: "Client Satisfaction",
    sublabel: "on completed projects",
  },
  {
    number: "2x",
    label: "Faster delivery",
    sublabel: "with our agile approach",
  },
  {
    number: "24/7",
    label: "Support available",
    sublabel: "for all our clients",
  },
  {
    icon: "CheckCircle",
    label: "Project Success Rate",
    value: "100%",
    description: "Quality solutions delivered",
    sublabel: "for all our clients",
  },
];

export const aboutStats: AboutStat[] = [
  {
    iconName: "Users2",
    value: 25,
    prefix: "",
    suffix: "+",
    label: "Projects Launched",
    description: "Successfully delivered solutions",
  },
  {
    iconName: "Heart",
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Client Satisfaction",
    description: "Exceeding expectations",
  },
  {
    iconName: "Trophy",
    value: 5,
    prefix: "",
    suffix: "+",
    label: "Industry Recognition",
    description: "Rising star in digital design",
  },
  {
    iconName: "Clock",
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Support Available",
    description: "Always here when you need us",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    slug: "discovery",
    description:
      "In our discovery session, we collaborate with you and extract as much information about the project as possible, along with any expectations you have.",
    longDescription: `Our discovery phase is the foundation of every successful project. During this crucial stage, we dive deep into understanding your business, goals, and vision. Through collaborative sessions and detailed discussions, we:

    • Analyze your current situation and challenges
    • Define project objectives and success metrics
    • Identify target audience and user personas
    • Gather functional and technical requirements
    • Establish project timeline and milestones`,
    features: [
      "Requirements Gathering",
      "Business Analysis",
      "Project Scoping",
      "Timeline Planning",
      "Budget Estimation",
    ],
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=600&fit=crop",
  },
  {
    number: "02",
    title: "Planning",
    slug: "planning",
    description:
      "Wire-framing and sitemap creation are an essential part of the process. This allows everyone a birds eye view of the entire website.",
    longDescription: `The planning phase transforms our discoveries into actionable strategies. We create comprehensive blueprints for your project, including:

    • Detailed project roadmap
    • Information architecture
    • User flow diagrams
    • Content strategy
    • Technical specifications`,
    features: [
      "Wireframe Creation",
      "Sitemap Development",
      "Content Strategy",
      "Technical Architecture",
      "Resource Allocation",
    ],
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&h=600&fit=crop",
  },
  {
    number: "03",
    title: "Design",
    slug: "design",
    description:
      "During the design phase, we can explore all the ideas and requests brought up in the discovery phase. We offer a number of design revisions until we get the desired look and feel for your project.",
    longDescription: `Our design phase is where your vision starts taking shape visually. We focus on creating engaging, user-friendly interfaces that reflect your brand identity:

    • Creating mood boards and style guides
    • Developing responsive layouts
    • Designing user interfaces
    • Iterating based on feedback
    • Ensuring brand consistency`,
    features: [
      "UI/UX Design",
      "Visual Branding",
      "Responsive Layouts",
      "Interactive Prototypes",
      "Design System Creation",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    number: "04",
    title: "Development",
    slug: "development",
    description:
      "We primarily develop websites using modern frameworks and technologies for the vast majority of our clients. We are also proficient with WordPress and custom needs.",
    longDescription: `The development phase brings your project to life through clean, efficient code. Our development process includes:

    • Setting up development environment
    • Frontend and backend implementation
    • Database architecture
    • API integration
    • Performance optimization`,
    features: [
      "Frontend Development",
      "Backend Integration",
      "Database Setup",
      "API Development",
      "Code Quality Assurance",
    ],
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=600&fit=crop",
  },
  {
    number: "05",
    title: "Testing",
    slug: "testing",
    description:
      "Before launching your new site, we test everything thoroughly to ensure your website works as it should, as well as being fully responsive.",
    longDescription: `Our rigorous testing phase ensures your project meets the highest quality standards:

    • Comprehensive functionality testing
    • Cross-browser compatibility checks
    • Performance optimization
    • Security testing
    • User acceptance testing`,
    features: [
      "Quality Assurance",
      "Cross-browser Testing",
      "Performance Testing",
      "Security Audits",
      "User Acceptance Testing",
    ],
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=600&fit=crop",
  },
  {
    number: "06",
    title: "Launch",
    slug: "launch",
    description:
      "After thorough testing and your approval, we deploy your website to production, ensuring a smooth transition and immediate availability.",
    longDescription: `The launch phase is where your project goes live. We ensure a smooth deployment process:

    • Pre-launch checklist verification
    • Server configuration
    • Domain and DNS setup
    • SSL certificate installation
    • Post-launch monitoring`,
    features: [
      "Deployment Strategy",
      "Server Configuration",
      "Domain Setup",
      "SSL Implementation",
      "Launch Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

export const challenges: Challenge[] = [
  {
    iconName: "Users2",
    title: "Competition",
    description:
      "Using data makes you 23x more likely to acquire new customers.",
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
    title: "Web Development",
    description:
      "Build powerful, scalable web applications with cutting-edge technologies and best practices.",
    iconName: "Code",
    features: [
      "Full-Stack Development",
      "Custom Web Applications",
      "Performance Optimization",
      "API Development",
    ],
    buttonText: "Learn More",
    slug: "web-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, engaging user experiences with data-driven design solutions that convert visitors into customers.",
    iconName: "Palette",
    features: [
      "User Research & Analysis",
      "Interface Design",
      "User Experience Design",
      "Usability Testing",
    ],
    buttonText: "Learn More",
    slug: "ui-ux-design",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Build powerful online stores that drive sales, delight customers, and scale with your business growth.",
    iconName: "ShoppingCart",
    features: [
      "Custom E-commerce Development",
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Inventory Management",
    ],
    buttonText: "Learn More",
    slug: "e-commerce-solutions",
  },
];

export const featuredProjects = [
  {
    id: "1",
    category: "Web Development",
    title: "E-commerce Platform Redesign",
    description:
      "A complete redesign and development of an e-commerce platform focusing on user experience and conversion optimization.",
    slug: "ecommerce-platform-redesign",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    clientUrl: "https://example.com",
    sector: "Retail",
    type: "E-commerce",
    objective: "Increase online sales and improve user experience",
    process: "User research, wireframing, prototyping, development",
    result: "150% increase in conversion rate",
    link: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: "2",
    category: "Mobile Development",
    title: "Fitness Tracking App",
    description:
      "A mobile application for tracking workouts, nutrition, and personal fitness goals.",
    slug: "fitness-tracking-app",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1200",
    clientUrl: "https://example.com",
    sector: "Health & Fitness",
    type: "Mobile App",
    objective: "Create an intuitive fitness tracking solution",
    process: "Market research, UX design, development, testing",
    result: "100,000+ downloads in first month",
    link: "https://example.com",
    technologies: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: "3",
    category: "Web Development",
    title: "Educational Platform",
    description:
      "An interactive learning platform for students and educators with real-time collaboration features.",
    slug: "educational-platform",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
    clientUrl: "https://example.com",
    sector: "Education",
    type: "EdTech",
    objective: "Modernize online learning experience",
    process: "Stakeholder interviews, prototyping, agile development",
    result: "500% increase in student engagement",
    link: "https://example.com",
    technologies: ["Next.js", "Socket.io", "PostgreSQL"],
  },
];

export const testimonials = [
  {
    id: "1",
    title: "Innovative Web Design Approach",
    description:
      "Their fresh perspective and innovative approach helped us create a modern, engaging website that perfectly represents our brand.",
    slug: "innovative-web-design",
    image: "/testimonials/client1.jpg",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    projectSlug: "ecommerce-platform-redesign",
  },
  {
    id: "2",
    title: "Modern E-commerce Solution",
    description:
      "Vikiflow delivered a cutting-edge e-commerce platform that has revolutionized our online presence and boosted our sales.",
    slug: "modern-ecommerce",
    image: "/testimonials/client2.jpg",
    technologies: ["Shopify", "Custom CSS", "JavaScript"],
    projectSlug: "healthcare-management-system",
  },
  {
    id: "3",
    title: "Creative UI/UX Design",
    description:
      "Their innovative UI/UX design approach has created an engaging user experience that our customers love.",
    slug: "creative-ui-ux",
    image: "/testimonials/client3.jpg",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    projectSlug: "financial-analytics-dashboard",
  },
];
