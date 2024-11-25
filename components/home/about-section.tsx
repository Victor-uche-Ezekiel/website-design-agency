"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { ArrowRight, Users2, Trophy, Clock, Heart } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    {
      icon: Users2,
      value: 200,
      prefix: "",
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered digital solutions"
    },
    {
      icon: Heart,
      value: 98,
      prefix: "",
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: Trophy,
      value: 15,
      prefix: "",
      suffix: "+",
      label: "Industry Awards",
      description: "Recognition for excellence"
    },
    {
      icon: Clock,
      value: 24,
      prefix: "",
      suffix: "/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're a passionate team of creators and innovators, dedicated to crafting exceptional digital experiences that drive success.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative mb-16">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                alt="Our team collaborating"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative p-6 text-center space-y-4">
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {stat.prefix}
                    <Counter 
                      from={0} 
                      to={stat.value} 
                      duration={2}
                      formatValue={(value) => Math.round(value).toString()}
                    />
                    {stat.suffix}
                  </h4>
                  <div>
                    <p className="font-semibold">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex gap-4 flex-wrap justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg group"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/5 shadow-lg"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
