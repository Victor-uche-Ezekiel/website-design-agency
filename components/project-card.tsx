import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  category,
  link,
  index,
}: ProjectCardProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portfolio/${slug}`}>
        <Card className="group relative overflow-hidden border-primary/20 bg-background/5 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-6">
            {/* Project Image */}
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <p className="text-muted-foreground line-clamp-2">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs py-0.5 px-2"
                  >
                    {tech}
                  </Badge>
                ))}
                {technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs py-0.5 px-2">
                    +{technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
