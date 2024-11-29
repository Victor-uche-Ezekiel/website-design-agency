"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NetBackground } from "@/components/ui/net-background";
import Spline from "@splinetool/react-spline";

export function HeroSection() {
  const words = ["Development", "Design", "Branding", "SEO"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  function onSplineLoad() {
    setIsSplineLoaded(true);
  }

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Layers Container */}
      <div className="relative w-full h-full">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Gradient blobs */}
        <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

        {/* Net Background */}
        <div className="absolute inset-0 z-20">
          <NetBackground />
        </div>

        {/* Spline Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded ? 0.5 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-30"
        >
          <Spline
            scene="https://prod.spline.design/Td54HQRN3ibF5fa2/scene.splinecode"
            onLoad={onSplineLoad}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Content Layer - Floating Above */}
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-7xl z-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8 text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Transforming Ideas into{" "}
                  <span className="inline-block h-[1.2em] relative">
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Stunning{" "}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIndex}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute ml-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                      >
                        {words[currentIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
                <p className="text-lg text-gray-300 md:text-xl max-w-[600px]">
                  We create exceptional digital experiences that captivate your
                  audience and drive real business results.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg group"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 text-white shadow-lg"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Empty for balance */}
            <motion.div variants={itemVariants} className="hidden lg:block" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
