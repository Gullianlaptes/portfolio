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
    title: "Création d'un serveur de sauvegarde de données",
    period: "Sept 2024 — Déc 2024",
    context: "Réalisation en formation",
    description: "Mise en place d'un serveur Windows Server 2022 avec l'application UrBackup pour sauvegarder les partitions et les images d'autres machines du parc.",
    tags: ["Windows Server 2022", "UrBackup", "Sauvegarde", "Images disque"],
    competences: ["Patrimoine informatique", "Incidents & assistance"],
    details: {
      objectif: "Mettre en place un serveur Windows Server 2022 utilisant UrBackup pour sauvegarder automatiquement les partitions et les images disques d'autres machines.",
      missions: [
        "Installation et configuration de Windows Server 2022",
        "Installation et paramétrage de l'application UrBackup (serveur)",
        "Déploiement de l'agent UrBackup sur les machines clientes",
        "Configuration des sauvegardes de partitions et des images disques complètes",
        "Tests de restauration des partitions et des images",
      ],
      resultat: "Serveur de sauvegarde opérationnel sous Windows Server 2022 avec UrBackup, capable de sauvegarder les partitions et les images disques des autres machines pour assurer la continuité d'activité.",
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
    title: "Administration et sécurisation d'un parc hybride",
    period: "Alternance",
    context: "Réalisation en milieu professionnel",
    description: "Déploiement d'un poste Zorin OS intégré à un domaine Active Directory Windows, sécurisé par un pare-feu Stormshield et sauvegardé via un serveur UrBackup.",
    tags: ["Zorin OS", "Active Directory", "SSSD", "Kerberos", "Stormshield", "UrBackup", "GPO"],
    competences: ["Patrimoine informatique", "Services informatiques", "Incidents & assistance"],
    details: {
      objectif: "Déployer un poste de travail sous Zorin OS au sein d'une infrastructure gérée par un serveur Windows (Active Directory), centraliser la gestion des utilisateurs, sécuriser les flux réseau via un pare-feu Stormshield et garantir la protection des données par un serveur UrBackup.",
      missions: [
        "Centralisation de l'identité et compatibilité Linux/Windows via SSSD et Kerberos (SSO avec les identifiants du domaine)",
        "Application du principe du moindre privilège : utilisateur standard, demande de mot de passe admin pour toute modification",
        "Restriction du shell utilisateur à /bin/false pour interdire les commandes manuelles",
        "Application des GPO Active Directory (accès machine, complexité et renouvellement des mots de passe via la Default Domain Policy)",
        "Mise en place du serveur de sauvegarde UrBackup : agent client, sauvegardes automatisées et images disques pour le PCA",
        "Configuration du pare-feu Stormshield : matrice de flux (LDAP/Kerberos, port 55414 UrBackup) et filtrage URL (blocage paris sportifs et shopping)",
      ],
      resultat: "Infrastructure hybride sécurisée et facilement administrable : poste Linux stable à coût de licence nul, identité centralisée via l'AD, données protégées par UrBackup et flux réseau cadrés par Stormshield, avec un niveau de sécurité équivalent aux standards professionnels.",
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
