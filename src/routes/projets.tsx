import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Portfolio BTS SIO" },
      { name: "description", content: "Mes réalisations professionnelles en formation et en stage BTS SIO." },
      { property: "og:title", content: "Projets — Portfolio BTS SIO" },
      { property: "og:description", content: "Réalisations professionnelles BTS SIO." },
    ],
  }),
  component: ProjetsPage,
});

const projets = [
  {
    title: "Projet de gestion de tickets",
    period: "Sept 2024 — Déc 2024",
    context: "Réalisation en formation",
    description: "Développement d'une application de gestion de tickets d'incidents pour le service informatique. Mise en place d'un système de suivi et de priorisation des demandes.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    competences: ["Patrimoine informatique", "Incidents & assistance"],
  },
  {
    title: "Migration de domaine",
    period: "Alternance sur les 2 ans",
    context: "Réalisation en milieu professionnel",
    description: "Participation a la migration de tout les équipements informatique et utilisateur dans le nouveau domaine  après rachats de l'entreprise . Configuration de services, tests d'intégration et documentation technique.",
    tags: ["Windows Server", "Active Directory", "DHCP"],
    competences: ["Services informatiques", "Patrimoine informatique"],
  },
  {
    title: "modélisation 3D",
    period: "Aternance sur les 2 ans",
    context: "Réalisation en milieu professionnel",
    description: "Les laborantins sont amener à transporter leur échantillons avec des portoirs, pour éviter l'achat de ceux-ci et réduire les dépenses on m'a attribué la tâche de les modéliser puis les imprimer en 3D sur mesure.",
    tags: ["3D Fusion", "Creality"],
    competences: ["Conception 3D"],
  },
];

function ProjetsPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Réalisations professionnelles"
          subtitle="Projets réalisés en formation et en milieu professionnel dans le cadre du BTS SIO."
        />
        <div className="space-y-6">
          {projets.map((projet, i) => (
            <motion.article
              key={projet.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-glow"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs text-primary">
                  {projet.context}
                </span>
                <span className="font-display text-xs text-muted-foreground">{projet.period}</span>
              </div>
              <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                {projet.title}
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{projet.description}</p>
              <div className="flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 font-display text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {projet.competences.map((c) => (
                  <span key={c} className="font-display text-xs text-primary">• {c}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">{"\n"}</p>
      </div>
    </div>
  );
}
