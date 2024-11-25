"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "In our discovery session, we collaborate with you and extract as much information about the project as possible, along with any expectations you have."
  },
  {
    number: "02",
    title: "Planning",
    description: "Wire-framing and sitemap creation are an essential part of the process. This allows everyone a birds eye view of the entire website."
  },
  {
    number: "03",
    title: "Design",
    description: "During the design phase, we can explore all the ideas and requests brought up in the discovery phase. We offer a number of design revisions until we get the desired look and feel for your project."
  },
  {
    number: "04",
    title: "Development",
    description: "We primarily develop websites using modern frameworks and technologies for the vast majority of our clients. We are also proficient with WordPress and custom needs."
  },
  {
    number: "05",
    title: "Testing",
    description: "Before launching your new site, we test everything thoroughly to ensure your website works as it should, as well as being fully responsive."
  }
];

export function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-4">THE PROCESS</h2>
          <h3 className="text-4xl md:text-6xl font-bold max-w-4xl">
            Our process is what makes our web projects run so smoothly
          </h3>
        </motion.div>

        <div className="mt-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-1'}`}>
                <span className="text-7xl md:text-8xl font-bold text-primary/20">{step.number}</span>
              </div>
              
              <div className={`md:col-span-4 ${index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-3'}`}>
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