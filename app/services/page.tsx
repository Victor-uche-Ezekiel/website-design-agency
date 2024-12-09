"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ServicesList } from "@/components/services/services-list";
import { PricingSection } from "@/components/services/pricing-section";
import { FaqSection } from "@/components/services/faq-section";
import { ProcessTimeline } from "@/components/services/process-timeline";

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-hidden min-h-screen pt-16">
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions tailored to your business needs"
        isHomePage={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesList />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          <ProcessTimeline />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-24"
      >
        <PricingSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FaqSection />
      </motion.div>
    </div>
  );
}
