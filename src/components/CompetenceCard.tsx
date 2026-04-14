import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CompetenceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
  index: number;
}

export function CompetenceCard({ icon, title, description, skills, index }: CompetenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-glow hover:card-glow"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-secondary px-3 py-1 font-display text-xs text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
