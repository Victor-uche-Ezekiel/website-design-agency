import { projects } from "@/lib/portfolio-data";
import { ProjectContent } from "@/components/portfolio/project-content";
import { notFound } from "next/navigation";

// Generate static pages for each project
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Find project by converting title to slug
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
