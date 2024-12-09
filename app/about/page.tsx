"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TeamMember } from "@/components/about/team-member";
import { PageHeader } from "@/components/page-header";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { DesignComparison } from "@/components/home/design-comparison";
import { teamMembers } from "@/config/team";

export default function AboutPage() {
  const [missionRef, missionInView] = useInView({ triggerOnce: true });

  return (
    <div className="pt-16">
      <PageHeader
        title="About Us"
        description="We're a team of passionate designers and developers creating exceptional digital experiences."
        isHomePage={false}
      />

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At PixelPerfect, we believe in transforming ideas into
                exceptional digital experiences. Our mission is to help
                businesses thrive in the digital age through innovative design
                and cutting-edge technology.
              </p>
              <p className="text-muted-foreground">
                Founded in 2020, we've grown from a small design studio to a
                full-service digital agency, serving clients worldwide with a
                focus on quality, creativity, and results.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our diverse team of experts brings together years of experience in
              design, development, and digital strategy.
            </p>
            <a
              href="/team"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 mb-12 hidden"
            >
              View All Team Members
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                slug={member.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Comparison Section */}
      <section>
        <DesignComparison />
      </section>

      {/* Process Timeline Section */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <ProcessTimeline />
        </div>
      </section>
    </div>
  );
}
