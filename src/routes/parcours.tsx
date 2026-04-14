import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Route = createFileRoute("/parcours")({
  head: () => ({
    meta: [
      { title: "Parcours — Portfolio BTS SIO" },
      { name: "description", content: "Mon parcours de formation et mes expériences professionnelles en informatique." },
      { property: "og:title", content: "Parcours — Portfolio BTS SIO" },
      { property: "og:description", content: "Formation et expériences en BTS SIO." },
    ],
  }),
  component: ParcoursPage,
});

const timeline = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    year: "2023 — 2025",
    title: "BTS SIO — Option SLAM / SISR",
    location: "Centre de formation",
    description: "Formation en Services Informatiques aux Organisations. Apprentissage du développement, de l'administration réseau et de la gestion de projets informatiques.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    year: "2024",
    title: "Stage en entreprise — 1ère année",
    location: "Entreprise",
    description: "Stage de 6 semaines en milieu professionnel. Mise en pratique des compétences acquises en formation sur des projets réels.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    year: "2025",
    title: "Stage en entreprise — 2ème année",
    location: "Entreprise",
    description: "Stage de 6 semaines avec des missions plus avancées. Participation active à des projets d'équipe et prise d'autonomie.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    year: "2023",
    title: "Baccalauréat",
    location: "Lycée",
    description: "Obtention du baccalauréat, première étape vers la formation en informatique.",
  },
];

function ParcoursPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Mon parcours"
          subtitle="Formation, stages et expériences qui ont construit mes compétences en informatique."
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
          
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-6 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-1/2" />
                
                <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-glow">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      {item.icon}
                      <span className="font-display text-xs font-semibold">{item.year}</span>
                    </div>
                    <h3 className="mb-1 font-display text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mb-2 font-display text-xs text-muted-foreground">{item.location}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
