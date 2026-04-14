import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Server, Globe, Users, Rocket, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio BTS SIO — Développeur Web" },
      { name: "description", content: "Portfolio professionnel d'un étudiant BTS SIO. Découvrez mes compétences, projets et parcours en informatique." },
      { property: "og:title", content: "Portfolio BTS SIO — Développeur Web" },
      { property: "og:description", content: "Portfolio professionnel d'un étudiant BTS SIO." },
    ],
  }),
  component: Index,
});

const competences = [
  { icon: <Server className="h-6 w-6" />, label: "Patrimoine informatique" },
  { icon: <Users className="h-6 w-6" />, label: "Incidents & assistance" },
  { icon: <Globe className="h-6 w-6" />, label: "Présence en ligne" },
  { icon: <Code2 className="h-6 w-6" />, label: "Mode projet" },
  { icon: <Rocket className="h-6 w-6" />, label: "Services informatiques" },
  { icon: <BookOpen className="h-6 w-6" />, label: "Développement pro" },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-16">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-display text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              BTS SIO — Services Informatiques aux Organisations
            </div>
            
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl">
              <span className="text-foreground">LAPTES</span>
              <br />
              <span className="text-gradient">Gullian</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              En formation BTS SIO depuis 2024, j'essaie d'acquérir des compétences pour répondre aux attentes d'un technicien supérieure en informatique.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/competences"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Mes compétences <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-display text-sm font-semibold text-foreground transition-all hover:border-primary/50"
              >
                Mes contacts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competence preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center font-display text-2xl font-bold text-foreground"
        >
          Blocs de compétences <span className="text-primary">BTS SIO</span>
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competences.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {c.icon}
              </div>
              <span className="font-display text-sm font-medium text-foreground">{c.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/competences" className="font-display text-sm text-primary hover:underline">
            Voir le détail des compétences →
          </Link>
        </div>
      </section>
    </div>
  );
}
