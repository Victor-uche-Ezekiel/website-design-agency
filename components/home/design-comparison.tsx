"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { 
  Pencil, 
  Expand, 
  Search,
  Code2,
  ThumbsUp,
  CheckCircle,
  Copy,
  XCircle,
  EyeOff,
  Frown,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const positiveFeatures = [
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: "Creative Expertise",
    description: "Unique designs tailored to your brand, captivating users with innovative visuals."
  },
  {
    icon: <Expand className="h-8 w-8 text-primary" />,
    title: "Responsive Designs",
    description: "Ensuring seamless experiences across all devices, maximizing user engagement and satisfaction."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO Optimization",
    description: "Elevating your online presence with strategies that boost search engine rankings effectively."
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Custom Solutions",
    description: "Crafting bespoke websites that meet your specific needs, enhancing functionality and user experience."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Quick Turnaround",
    description: "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Exceptional Support",
    description: "Dedicated assistance during and after project completion, ensuring client satisfaction and success."
  }
];

const negativeFeatures = [
  {
    icon: <Copy className="h-8 w-8 text-destructive" />,
    title: "Generic Designs",
    description: "Settling for uninspired templates, failing to differentiate your brand in a crowded market."
  },
  {
    icon: <XCircle className="h-8 w-8 text-destructive" />,
    title: "Poor User Experience",
    description: "Teams not working together well, making it hard to achieve common goals and tasks."
  },
  {
    icon: <EyeOff className="h-8 w-8 text-destructive" />,
    title: "Low Visibility",
    description: "Bad vibes at work make people unhappy, lowering how much work gets done."
  },
  {
    icon: <Frown className="h-8 w-8 text-destructive" />,
    title: "Limited Functionality",
    description: "People doing the wrong jobs aren't happy, and it makes the work not so good."
  },
  {
    icon: <Calendar className="h-8 w-8 text-destructive" />,
    title: "Missed Deadlines",
    description: "Work processes are done poorly, taking too much time and money due to inefficient methods."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: "Inadequate Support",
    description: "People argue a lot, making it tough for the team to stay together and work well."
  }
];

export function DesignComparison() {
  const [isPositive, setIsPositive] = useState(true);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            layout
          >
            When people{" "}
            <span className={isPositive ? "text-primary" : "text-destructive"}>
              {isPositive ? "do" : "don't"}
            </span>
            {" "}work with us.
          </motion.h2>
          
          <div className="flex items-center gap-4">
            <Switch
              checked={isPositive}
              onCheckedChange={setIsPositive}
              className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-destructive"
            />
            <Button
              variant={isPositive ? "default" : "destructive"}
              className="rounded-full"
              onClick={() => setIsPositive(!isPositive)}
            >
              Let's build something
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isPositive ? 'positive' : 'negative'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(isPositive ? positiveFeatures : negativeFeatures).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow ${
                  isPositive ? 'hover:border-primary/50' : 'hover:border-destructive/50'
                }`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}