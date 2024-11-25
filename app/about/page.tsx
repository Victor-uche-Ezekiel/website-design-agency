"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TeamMember } from '@/components/about/team-member';
import { ProcessStep } from '@/components/about/process-step';
import { WhyChooseUs } from '@/components/about/why-choose-us';
import { PageHeader } from '@/components/page-header';

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
                At PixelPerfect, we believe in transforming ideas into exceptional digital experiences. Our mission is to help businesses thrive in the digital age through innovative design and cutting-edge technology.
              </p>
              <p className="text-muted-foreground">
                Founded in 2020, we've grown from a small design studio to a full-service digital agency, serving clients worldwide with a focus on quality, creativity, and results.
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
              Our diverse team of experts brings together years of experience in design, development, and digital strategy.
            </p>
            <a 
              href="/team" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 mb-12"
            >
              View All Team Members
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Thompson"
              role="Creative Director"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              bio="10+ years of experience in digital design and branding."
              slug="alex-thompson"
            />
            <TeamMember
              name="Sarah Chen"
              role="Lead Developer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              bio="Full-stack developer with expertise in modern web technologies."
              slug="sarah-chen"
            />
            <TeamMember
              name="Michael Rodriguez"
              role="UX Strategy Lead"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              bio="Specialist in user research and experience design."
              slug="michael-rodriguez"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We follow a refined, client-centric process that ensures exceptional results and complete satisfaction.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ProcessStep
                number={1}
                title="Discovery & Research"
                description="We begin with a deep dive into your business, conducting thorough research to understand your goals, target audience, and market position. This phase includes stakeholder interviews and competitive analysis."
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProcessStep
                number={2}
                title="Strategic Planning"
                description="Based on our research, we develop a comprehensive strategy that outlines the project roadmap, technical requirements, and creative direction. This ensures alignment with your business objectives."
                image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProcessStep
                number={3}
                title="Design & Development"
                description="Our team brings your vision to life through iterative design and development phases. We maintain constant communication and incorporate your feedback at every step to ensure perfect execution."
                image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProcessStep
                number={4}
                title="Launch & Growth"
                description="We ensure a smooth launch and provide ongoing support and optimization. Our team monitors performance metrics and makes data-driven improvements to maximize your digital success."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}