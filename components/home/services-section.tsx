"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Search, 
  ShoppingBag, 
  Megaphone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesSection() {
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
        staggerChildren: 0.1,
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

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that delight your customers",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Build fast, responsive, and scalable web applications with modern technologies",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile apps that users love",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your visibility and reach more customers through search engines",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Build powerful online stores that drive sales and growth",
      features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Analytics"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Reach and engage your target audience across digital channels",
      features: ["Social Media", "Email Marketing", "Content Marketing", "PPC Campaigns"]
    }
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl -m-2 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                <div className="relative p-8 space-y-4 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10">
                  <service.icon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg group"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
