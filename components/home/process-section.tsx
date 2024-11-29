"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProcessStep } from '@/lib/home-data';
import { useMemo } from 'react';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  // Respect user's reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  // Split the intersection observer into two parts
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px"
  });

  const [stepsRef, stepsInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "100px 0px"
  });

  // Memoize variants to prevent recreating on every render
  const variants = useMemo(() => ({
    header: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
      }
    },
    step: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 }
      }
    }
  }), [shouldReduceMotion]);

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          variants={variants.header}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-4">THE PROCESS</h2>
          <h3 className="text-4xl md:text-6xl font-bold max-w-4xl">
            Our process is what makes our web projects run so smoothly
          </h3>
        </motion.div>

        <div ref={stepsRef} className="mt-24 space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={variants.step}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${
                index % 2 === 0 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div 
                className={`md:col-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-1'}`}
              >
                <span className="text-7xl md:text-8xl font-bold text-primary/20">{step.number}</span>
              </div>
              
              <div 
                className={`md:col-span-4 ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-3'}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index === 0 && (
                <div className="md:col-span-5 md:col-start-8">
                  <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold">
                      Our average design and development projects start around £8k - £10k
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}