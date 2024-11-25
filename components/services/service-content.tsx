"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

interface ServiceContentProps {
  service: {
    title: string;
    description: string;
    features: string[];
    icon: string;
  };
}

export function ServiceContent({ service }: ServiceContentProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen">
      <PageHeader
        title={service.title}
        description={service.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <motion.section
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  isDark
                    ? 'bg-background/5 backdrop-blur-sm border-primary/20'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full bg-primary`} />
                  <p className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {feature}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss how we can help transform your digital presence
          </p>
          <Button size="lg" className="group">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
