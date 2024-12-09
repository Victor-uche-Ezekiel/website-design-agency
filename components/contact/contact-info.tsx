"use client";

import { motion } from 'framer-motion';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  link: string;
}

export function ContactInfo({ icon, title, content, link }: ContactInfoProps) {
  return (
    <motion.a
      href={link}
      target={title === "Address" ? "_blank" : undefined}
      rel={title === "Address" ? "noopener noreferrer" : undefined}
      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {Array.isArray(content) ? (
          <div className="space-y-1">
            {content.map((line, i) => (
              <p key={i} className="text-muted-foreground">{line}</p>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </motion.a>
  );
}
