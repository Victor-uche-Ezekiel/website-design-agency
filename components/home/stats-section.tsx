"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Stat } from "@/types/home";

interface StatsProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsProps) {
  const { resolvedTheme } = useTheme();
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const isDark = resolvedTheme === "dark";

  return (
    <section ref={statsRef} className="py-24 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 transition-colors duration-200">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
