export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string;
  contact: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "alex-thompson",
    name: "Alex Thompson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    bio: `Alex Thompson brings over a decade of experience in digital design and branding to our team. 
    As our Creative Director, Alex leads the creative vision for all client projects and ensures the highest 
    standards of design excellence.
    
    With a background in both traditional graphic design and modern digital interfaces, Alex has helped 
    numerous brands establish their digital presence and create memorable user experiences. His approach 
    combines aesthetic beauty with functional design thinking.`,
    expertise: ["Brand Strategy", "UI/UX Design", "Design Systems", "Team Leadership"],
    education: "MFA in Design, Rhode Island School of Design",
    contact: "alex.thompson@pixelperfect.com",
    socialLinks: {
      twitter: "https://twitter.com/alexthompson",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson"
    }
  },
  {
    id: "2",
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    bio: `Sarah Chen is our Lead Developer with extensive expertise in modern web technologies. Her 
    technical leadership has been instrumental in delivering robust and scalable solutions for our clients.
    
    Sarah specializes in full-stack development with a particular focus on performance optimization and 
    building responsive web applications. She is passionate about clean code and maintaining high 
    development standards.`,
    expertise: ["Full-stack Development", "React/Next.js", "Cloud Architecture", "Performance Optimization"],
    education: "MS in Computer Science, Stanford University",
    contact: "sarah.chen@pixelperfect.com",
    socialLinks: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    }
  },
  {
    id: "3",
    slug: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "UX Strategy Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
    bio: `Michael Rodriguez leads our UX strategy initiatives, bringing a human-centered approach to 
    digital product design. His expertise in user research and experience design helps ensure our 
    solutions truly meet user needs.
    
    With a background in psychology and human-computer interaction, Michael excels at understanding 
    user behavior and translating insights into actionable design decisions.`,
    expertise: ["User Research", "Information Architecture", "Usability Testing", "Product Strategy"],
    education: "MA in Human-Computer Interaction, Carnegie Mellon University",
    contact: "michael.rodriguez@pixelperfect.com",
    socialLinks: {
      twitter: "https://twitter.com/mrodriguez",
      linkedin: "https://linkedin.com/in/mrodriguez",
      github: "https://github.com/mrodriguez"
    }
  }
];
