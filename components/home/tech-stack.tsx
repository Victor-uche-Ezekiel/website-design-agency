"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Blocks, 
  Paintbrush2, 
  FileCode2, 
  Frame, 
  Laptop2,
  Database,
  Cloud,
  Layers,
  Settings2
} from 'lucide-react';

const technologies = [
  {
    name: "Next.js",
    icon: <Blocks className="w-8 h-8" />,
    description: "React framework for production"
  },
  {
    name: "React",
    icon: <Code2 className="w-8 h-8" />,
    description: "UI component library"
  },
  {
    name: "Tailwind CSS",
    icon: <Paintbrush2 className="w-8 h-8" />,
    description: "Utility-first CSS framework"
  },
  {
    name: "TypeScript",
    icon: <FileCode2 className="w-8 h-8" />,
    description: "Typed JavaScript"
  },
  {
    name: "Framer Motion",
    icon: <Frame className="w-8 h-8" />,
    description: "Animation library"
  },
  {
    name: "Node.js",
    icon: <Settings2 className="w-8 h-8" />,
    description: "JavaScript runtime"
  },
  {
    name: "Database",
    icon: <Database className="w-8 h-8" />,
    description: "Data storage solutions"
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="w-8 h-8" />,
    description: "Scalable infrastructure"
  },
  {
    name: "UI/UX Design",
    icon: <Layers className="w-8 h-8" />,
    description: "User experience design"
  },
  {
    name: "Full-Stack",
    icon: <Laptop2 className="w-8 h-8" />,
    description: "End-to-end development"
  }
];

export function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Our Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use cutting-edge technologies to build modern, scalable, and performant web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:border-primary/50 transition-colors group">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-primary group-hover:text-primary/80 transition-colors">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
