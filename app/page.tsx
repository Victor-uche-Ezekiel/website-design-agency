import { DesignComparison } from "@/components/home/design-comparison";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { TestimonialsHighlight } from "@/components/home/testimonials-highlight";
import { BlogSection } from "@/components/home/blog-section";
import { StatsSection } from "@/components/home/stats-section";
import { CTABanner } from "@/components/home/cta-banner";
import { PageHeader } from "@/components/page-header";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { TechStack } from "@/components/home/tech-stack";
import { getHomePageData } from "@/lib/api";

export default async function Home() {
  const { services, stats, aboutStats, processSteps, featuredProjects, testimonials } = await getHomePageData();
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection stats={aboutStats} />
      <ServicesSection services={services} />
      <PortfolioSection projects={featuredProjects} />
      <ProcessSection steps={processSteps} />
      <DesignComparison />
      <TechStack />
      <TestimonialsHighlight testimonials={testimonials} />
      <BlogSection />
      <StatsSection stats={stats} />
      <CTABanner />
      <PageHeader
        title="Welcome to Our Agency"
        description="We create stunning digital experiences"
      />
    </div>
  );
}
