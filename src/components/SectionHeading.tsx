import { motion } from "framer-motion";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-gradient mb-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
