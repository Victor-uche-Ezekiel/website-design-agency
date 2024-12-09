"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/portfolio-data";
import { useTheme } from "next-themes";
import { ImageGallery } from "./image-gallery";
import { TestimonialCard } from "./testimonial-card";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [contentRef, contentInView] = useInView({ triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true });
  const [navigationRef, navigationInView] = useInView({ triggerOnce: true });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[hsl(240,10%,3.9%)]" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative min-h-[85vh] flex items-center"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-black/50 via-black/50 to-[hsl(240,10%,3.9%)]"
                : "bg-gradient-to-b from-black/30 via-gray-900/40 to-gray-50"
            }`}
          />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>

      {/* Project Info Section */}
      <section
        className={`py-24 border-b ${
          isDark ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Client URL
              </h3>
              <a
                href={project.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
              >
                Visit website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Sector
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {project.sector}
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Type
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {project.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section ref={contentRef} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-24"
          >
            {/* Objective */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Objective
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.objective}
              </p>
            </div>

            {/* Process */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Process
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.process}
              </p>
            </div>

            {/* Result */}
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Result
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.result}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-black/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageGallery images={project.gallery || [project.image]} />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section
          className={`py-24 ${isDark ? "bg-black/10" : "bg-gray-50/80"}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <TestimonialCard
                quote={project.testimonial.quote}
                author={project.testimonial.author}
                role={project.testimonial.role}
                company={project.testimonial.company}
                avatar={project.testimonial.avatar}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section
        ref={navigationRef}
        className={`py-24 border-t ${
          isDark
            ? "border-white/10 bg-gradient-to-b from-transparent to-black/20"
            : "border-gray-200 bg-gradient-to-b from-transparent to-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={navigationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-2xl font-bold mb-12 text-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              View more of our work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.previousProject && (
                <Link
                  href={`/portfolio/${project.previousProject.slug}`}
                  className="group block"
                >
                  <Card
                    className={`overflow-hidden ${
                      isDark
                        ? "bg-background/5 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                        : "bg-white border-gray-200 hover:border-primary/40"
                    } transition-colors`}
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                      <img
                        src={project.previousProject.image}
                        alt={project.previousProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-semibold mb-2 group-hover:text-primary transition-colors ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.previousProject.title}
                      </h3>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.previousProject.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              )}
              {project.nextProject && (
                <Link
                  href={`/portfolio/${project.nextProject.slug}`}
                  className="group block"
                >
                  <Card
                    className={`overflow-hidden ${
                      isDark
                        ? "bg-background/5 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                        : "bg-white border-gray-200 hover:border-primary/40"
                    } transition-colors`}
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                      <img
                        src={project.nextProject.image}
                        alt={project.nextProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-semibold mb-2 group-hover:text-primary transition-colors ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.nextProject.title}
                      </h3>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.nextProject.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-24 ${
          isDark
            ? "bg-gradient-to-b from-transparent to-black/20"
            : "bg-gradient-to-b from-transparent to-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's work together
          </h2>
          <Button size="lg" asChild>
            <Link href="/contact" className="inline-flex items-center">
              Let's start a project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
