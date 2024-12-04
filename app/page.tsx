import dynamic from "next/dynamic";
import { Suspense } from "react";
import { DesignComparison } from "@/components/home/design-comparison";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { TestimonialsHighlight } from "@/components/home/testimonials-highlight";
import { StatsSection } from "@/components/home/stats-section";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { PageHeader } from "@/components/page-header";
import { TeamSection } from "@/components/home/team-section";
import { getHomePageData } from "@/lib/api";

// Dynamically import components that are below the fold
const DesignComparisonDynamic = dynamic(
  () =>
    import("@/components/home/design-comparison").then(
      (mod) => mod.DesignComparison
    ),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const TechStackDynamic = dynamic(
  () => import("@/components/home/tech-stack").then((mod) => mod.TechStack),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const BlogSectionDynamic = dynamic(
  () => import("@/components/home/blog-section").then((mod) => mod.BlogSection),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const CTABannerDynamic = dynamic(
  () => import("@/components/home/cta-banner").then((mod) => mod.CTABanner),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  }
);

export default async function Home() {
  const {
    services,
    stats,
    aboutStats,
    processSteps,
    featuredProjects,
    testimonials,
  } = await getHomePageData();

  return (
    <div className="">
      <HeroSection />
      <AboutSection stats={aboutStats} />
      <ServicesSection services={services} />
      <PortfolioSection projects={featuredProjects} />

      <ProcessSection steps={processSteps} />
      <TeamSection />

      {/* <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}> */}
      <DesignComparisonDynamic />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}> */}
      {/* <TechStackDynamic /> */}
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}> */}
      <TestimonialsHighlight testimonials={testimonials} />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}> */}
      <BlogSectionDynamic />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 animate-pulse bg-muted" />}> */}
      <StatsSection stats={stats} />
      {/* </Suspense> */}

      {/* <Suspense fallback={<div className="h-32 animate-pulse bg-muted" />}> */}
      <CTABannerDynamic 
        title="Ready to Transform Your Digital Presence?"
        description="Let's create something amazing together. Reach out and start your project today."
        href="/contact"
      />
      {/* </Suspense> */}

      <PageHeader
        title="Welcome to Our Agency"
        description="We create stunning digital experiences"
      />
    </div>
  );
}
