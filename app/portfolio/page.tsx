"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProjectFilter } from "@/components/portfolio/project-filter";
import { ProjectTestimonial } from "@/components/portfolio/project-testimonial";
import { projects } from "@/lib/portfolio-data";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Portfolio"
        description="Explore our latest work and see how we've helped businesses achieve their digital goals."
        isHomePage={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project) => (
              project.testimonial && (
                <ProjectTestimonial
                  key={project.id}
                  testimonial={project.testimonial}
                  projectSlug={project.slug}
                />
              )
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
