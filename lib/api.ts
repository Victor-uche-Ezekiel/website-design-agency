import { HomePageData } from "@/types/home";
import {
  stats,
  challenges,
  services,
  aboutStats,
  processSteps,
  featuredProjects,
  testimonials,
} from "./home-data";

// This will be replaced with actual API calls later
export async function getHomePageData(): Promise<
  HomePageData & {
    aboutStats: typeof aboutStats;
    processSteps: typeof processSteps;
    featuredProjects: typeof featuredProjects;
    testimonials: typeof testimonials;
  }
> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    stats,
    challenges,
    services,
    aboutStats,
    processSteps,
    featuredProjects,
    testimonials,
  };
}
