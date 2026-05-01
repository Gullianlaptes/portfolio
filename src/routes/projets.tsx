import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    title: "Creation d'un serveur de sauvegarde de doné et utilisateur",
    period: "Sept 2024 — Déc 2024",
    context: "Réalisation en formation",
    description: "Développement d'un server de sauvegarde de donées le service informatique. Mise en place d'un système de suivi et de priorisation des demandes.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    competences: ["Patrimoine informatique", "Incidents & assistance"],
    details: {
      objectif: "Mettre en place un serveur permettant de sauvegarder automatiquement les données et les profils utilisateurs.",
      missions: [
        "Analyse des besoins de sauvegarde",
        "Installation et configuration du serveur",
        "Mise en place de scripts de sauvegarde automatisés",
        "Tests de restauration",
      ],
      resultat: "Système de sauvegarde fonctionnel et documenté, prêt à être déployé.",
    },
  },
  {
    title: "Migration de domaine",
    period: "Alternance sur les 2 ans",
    context: "Réalisation en milieu professionnel",
    description: "Participation a la migration de tout les équipements informatique et utilisateur dans le nouveau domaine  après rachats de l'entreprise . Configuration de services, tests d'intégration et documentation technique.",
    tags: ["Windows Server", "Active Directory", "DHCP"],
    competences: ["Services informatiques", "Patrimoine informatique"],
    details: {
      objectif: "Migrer l'ensemble du parc informatique vers un nouveau domaine suite au rachat de l'entreprise.",
      missions: [
        "Inventaire des postes et utilisateurs à migrer",
        "Création des comptes dans le nouveau domaine Active Directory",
        "Migration des postes utilisateurs un par un",
        "Reconfiguration des services et imprimantes",
        "Documentation des procédures de migration",
      ],
      resultat: "Migration complète du parc sans interruption majeure de service.",
    },
  },
  {
    title: "modélisation 3D",
    period: "Aternance sur les 2 ans",
    context: "Réalisation en milieu professionnel",
    description: "Les laborantins sont amener à transporter leur échantillons avec des portoirs, pour éviter l'achat de ceux-ci et réduire les dépenses on m'a attribué la tâche de les modéliser puis les imprimer en 3D sur mesure.",
    tags: ["3D Fusion", "Creality"],
    competences: ["Conception 3D"],
    details: {
      objectif: "Concevoir et imprimer des portoirs sur mesure pour les laborantins afin de réduire les coûts d'achat.",
      missions: [
        "Prise de mesures des échantillons et besoins terrain",
        "Modélisation 3D sur Fusion 360",
        "Impression 3D sur imprimante Creality",
        "Tests d'usage et ajustements",
      ],
      resultat: "Portoirs imprimés en interne, économies réalisées sur l'achat de matériel.",
    },
  },
  {
    title: "Nouveau projet",
    period: "À compléter",
    context: "Réalisation à compléter",
    description: "Description courte du projet — clique pour voir tous les détails.",
    tags: ["À compléter"],
    competences: ["À compléter"],
    details: {
      objectif: "À compléter — décris ici l'objectif principal du projet.",
      missions: [
        "À compléter — première mission",
        "À compléter — deuxième mission",
      ],
      resultat: "À compléter — résultat obtenu.",
    },
  },
];

function ProjetsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Réalisations professionnelles"
          subtitle="Projets réalisés en formation et en milieu professionnel dans le cadre du BTS SIO."
        />
        <div className="space-y-6">
          {projets.map((projet, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.article
                key={projet.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card transition-all hover:border-glow"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs text-primary">
                      {projet.context}
                    </span>
                    <span className="font-display text-xs text-muted-foreground">{projet.period}</span>
                  </div>
                  <h3 className="mb-2 flex items-center justify-between gap-2 font-display text-xl font-semibold text-foreground">
                    <span>{projet.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
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
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 border-t border-border px-6 py-6">
                        <div>
                          <h4 className="mb-2 font-display text-sm font-semibold text-foreground">Objectif</h4>
                          <p className="text-sm text-muted-foreground">{projet.details.objectif}</p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-display text-sm font-semibold text-foreground">Missions réalisées</h4>
                          <ul className="space-y-2">
                            {projet.details.missions.map((m) => (
                              <li key={m} className="flex gap-3 text-sm text-muted-foreground">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-2 font-display text-sm font-semibold text-foreground">Résultat</h4>
                          <p className="text-sm text-muted-foreground">{projet.details.resultat}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">{"\n"}</p>
      </div>
    </div>
  );
}
