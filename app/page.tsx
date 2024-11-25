"use client";

import { motion } from 'framer-motion';
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DesignComparison } from '@/components/home/design-comparison';
import { ProcessSection } from '@/components/home/process-section';
import { PortfolioSection } from '@/components/home/portfolio-section';
import { TestimonialsHighlight } from '@/components/home/testimonials-highlight';
import { TechStack } from '@/components/home/tech-stack';
import { BlogSection } from '@/components/home/blog-section';
import { CTABanner } from '@/components/home/cta-banner';
import { SplineBackground } from '@/components/spline-background';
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from '@/components/home/services-section';
import { PageHeader } from "@/components/page-header";
import { 
  Users, 
  TrendingUp, 
  Scale,
  ChevronRight,
  Target,
  LineChart,
  Network,
  Briefcase,
  Database,
  Code,
  Smartphone,
  Palette
} from 'lucide-react';

const stats = [
  {
    number: "8989",
    label: "Hyper Qualified Opportunities",
    sublabel: "by AI-based Engine"
  },
  {
    number: "3x",
    label: "Increase in conversion rates",
    sublabel: "when using AI software Hub"
  },
  {
    number: "21%",
    label: "Increase in deal size",
    sublabel: "from focused matchmaking"
  }
];

const challenges = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Competition",
    description: "Using data makes you 23x more likely to acquire new customers.",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Financial Constraints",
    description: "59% of businesses struggle to secure the right finance.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Scale",
    description: "92% of businesses fail to hit their ambitions.",
  }
];

const services = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Web Design",
    description: "Creating stunning, user-friendly websites that capture your brand's essence and engage your audience.",
    buttonText: "Learn More",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Building robust, scalable web applications with modern technologies and best practices.",
    buttonText: "Learn More",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsive Design",
    description: "Ensuring your website looks and works perfectly on all devices and screen sizes.",
    buttonText: "Learn More",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and experiences that delight your users.",
    buttonText: "Learn More",
    gradient: "from-pink-600 to-purple-600"
  }
];

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* Design Comparison Section */}
      <DesignComparison />

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Testimonials Highlight Section */}
      <TestimonialsHighlight />

      {/* Blog Section */}
      <BlogSection />

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 relative">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-purple-900/20' : 'bg-gradient-to-b from-purple-100/50'} via-transparent to-transparent`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className={`p-6 ${isDark ? 'bg-purple-900/20' : 'bg-white/80'} backdrop-blur-sm border-purple-500/20`}>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
      <PageHeader
        title="Welcome to Our Agency"
        description="We create stunning digital experiences"
        isHomePage={true}
      />
    </div>
  );
}