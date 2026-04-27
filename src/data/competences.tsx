import { Server, HeadphonesIcon, Globe, FolderKanban, Rocket, BookOpen } from "lucide-react";
import type { ReactNode } from "react";

export interface Bloc {
  slug: string;
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
  details: {
    intro: string;
    activites: string[];
    realisations: string[];
  };
}

export const blocs: Bloc[] = [
  {
    slug: "patrimoine-informatique",
    icon: <Server className="h-6 w-6" />,
    title: "Gérer le patrimoine informatique",
    description: "Recenser les ressources numériques, exploiter les référentiels, gérer les habilitations et les sauvegardes.",
    skills: ["Inventaire", "Référentiels", "Habilitations", "Sauvegardes", "RGPD"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
  {
    slug: "incidents-demandes",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Répondre aux incidents et demandes dans l'entreprise",
    description: "Collecter, suivre et traiter les demandes d'assistance concernant les services réseau, système.",
    skills: ["Support N1/N2", "Ticketing", "Diagnostic", "Résolution"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
  {
    slug: "presence-en-ligne",
    icon: <Globe className="h-6 w-6" />,
    title: "Développer la présence en ligne",
    description: "Spécialisé en réseau informatique, j'aborde ce bloc côté infrastructure et services en ligne.",
    skills: ["Hébergement", "DNS", "Sécurité web"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
  {
    slug: "mode-projet",
    icon: <FolderKanban className="h-6 w-6" />,
    title: "Travailler en mode projet",
    description: "Analyser les objectifs, planifier les activités et évaluer les indicateurs de suivi d'un projet.",
    skills: ["Agile", "Planification", "Gestion d'équipe"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
  {
    slug: "service-informatique",
    icon: <Rocket className="h-6 w-6" />,
    title: "Mettre à disposition un service informatique",
    description: "Réaliser les tests d'intégration, déployer un service et accompagner les utilisateurs.",
    skills: ["Déploiement", "Tests", "Documentation", "Formation"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
  {
    slug: "developpement-professionnel",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Organiser mon développement professionnel",
    description: "Mettre en place mon environnement d'apprentissage, gérer mon identité professionnelle.",
    skills: ["Veille techno", "Autoformation", "Portfolio", "Identité pro"],
    details: {
      intro: "",
      activites: [],
      realisations: [],
    },
  },
];

export function getBlocBySlug(slug: string): Bloc | undefined {
  return blocs.find((b) => b.slug === slug);
}