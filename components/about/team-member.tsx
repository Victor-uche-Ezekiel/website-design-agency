"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  slug: string;
}

export function TeamMember({ name, role, image, bio, slug }: TeamMemberProps) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Link href={`/team/${slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="group cursor-pointer"
      >
        <Card className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
            <p className="text-primary mb-3">{role}</p>
            <p className="text-muted-foreground">{bio}</p>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}