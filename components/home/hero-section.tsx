"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NetBackground } from "@/components/ui/net-background";
import Spline from "@splinetool/react-spline";
import { SplineBackground } from "../spline-background";

export function HeroSection() {
  const words = ["Development", "Design", "Branding", "SEO"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex items-center justify-center bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      {/* Animated Net Background */}
      <div className="absolute inset-0">{/* <NetBackground /> */}</div>

      {/* Spline 3D Background */}

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Transforming Ideas into
            <div className="h-[1.2em] overflow-hidden mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block text-primary"
                >
                  {words[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            We craft exceptional digital experiences that captivate your
            audience and drive real business results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
