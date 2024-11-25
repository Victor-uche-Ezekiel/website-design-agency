"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';
import Link from 'next/link';
import { Palette, Code, Layout, Megaphone, Rocket, LineChart } from 'lucide-react';

const iconMap = {
  design: Palette,
  development: Code,
  ui: Layout,
  marketing: Megaphone,
  startup: Rocket,
  analytics: LineChart,
};

export function ServicesList() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, inView] = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div key={service.id} variants={itemVariants}>
          <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card
              className={`p-6 h-full transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-background/5 backdrop-blur-sm border-primary/20 hover:bg-background/10'
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className={`text-2xl ${isDark ? 'text-primary' : 'text-primary/80'}`}>
                    <IconMap icon={service.icon} />
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 flex-grow ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="flex items-center text-primary group">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

function IconMap({ icon }: { icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap];
  return <Icon className="h-6 w-6" />;
}