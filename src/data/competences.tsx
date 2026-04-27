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
      intro: "Ce bloc consiste à maintenir le parc informatique d'une organisation : recenser le matériel et les logiciels, gérer les droits d'accès des utilisateurs et garantir la disponibilité des données.",
      activites: [
        "Inventaire et suivi des équipements (postes, serveurs, périphériques, licences)",
        "Gestion des comptes et des habilitations dans un domaine Active Directory",
        "Mise en place et vérification des sauvegardes",
        "Application des règles RGPD et de sécurité",
      ],
      realisations: [
        "Chez ALS France : gestion complète du parc informatique et des utilisateurs du domaine",
        "Mise en place de procédures de sauvegarde et de restauration",
      ],
    },
  },
  {
    slug: "incidents-demandes",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Répondre aux incidents et demandes dans l'entreprise",
    description: "Collecter, suivre et traiter les demandes d'assistance concernant les services réseau, système.",
    skills: ["Support N1/N2", "Ticketing", "Diagnostic", "Résolution"],
    details: {
      intro: "Ce bloc couvre l'assistance aux utilisateurs : prendre en charge les incidents, diagnostiquer les pannes et apporter une solution adaptée tout en assurant le suivi.",
      activites: [
        "Prise en charge et qualification des tickets",
        "Diagnostic des pannes matérielles et logicielles",
        "Résolution à distance ou en intervention sur site",
        "Communication avec l'utilisateur et documentation des solutions",
      ],
      realisations: [
        "Support quotidien des utilisateurs chez ALS France",
        "Résolution d'incidents réseau, système et postes de travail",
      ],
    },
  },
  {
    slug: "presence-en-ligne",
    icon: <Globe className="h-6 w-6" />,
    title: "Développer la présence en ligne",
    description: "Spécialisé en réseau informatique, j'aborde ce bloc côté infrastructure et services en ligne.",
    skills: ["Hébergement", "DNS", "Sécurité web"],
    details: {
      intro: "Étant donné que ma spécialisation est le réseau informatique, je réponds à cette compétence sous l'angle de l'infrastructure qui supporte la présence en ligne d'une organisation.",
      activites: [
        "Mise en place et configuration d'un hébergement",
        "Gestion DNS et nom de domaine",
        "Sécurisation des accès (HTTPS, pare-feu)",
      ],
      realisations: [
        "Configuration de services réseau permettant la publication de sites internes",
      ],
    },
  },
  {
    slug: "mode-projet",
    icon: <FolderKanban className="h-6 w-6" />,
    title: "Travailler en mode projet",
    description: "Analyser les objectifs, planifier les activités et évaluer les indicateurs de suivi d'un projet.",
    skills: ["Agile", "Planification", "Gestion d'équipe"],
    details: {
      intro: "Ce bloc consiste à organiser un projet informatique : définir les objectifs, planifier les tâches, suivre l'avancement et évaluer les résultats.",
      activites: [
        "Analyse du besoin et rédaction du cahier des charges",
        "Planification des étapes (diagrammes de Gantt, sprints)",
        "Suivi des indicateurs et des risques",
        "Travail collaboratif et communication d'équipe",
      ],
      realisations: [
        "Projets menés en équipe pendant la formation BTS SIO",
        "Participation à des projets internes en alternance",
      ],
    },
  },
  {
    slug: "service-informatique",
    icon: <Rocket className="h-6 w-6" />,
    title: "Mettre à disposition un service informatique",
    description: "Réaliser les tests d'intégration, déployer un service et accompagner les utilisateurs.",
    skills: ["Déploiement", "Tests", "Documentation", "Formation"],
    details: {
      intro: "Ce bloc consiste à déployer un service informatique opérationnel : tests, mise en production, documentation et accompagnement des utilisateurs.",
      activites: [
        "Tests d'intégration et de validation",
        "Déploiement du service en production",
        "Rédaction de la documentation technique et utilisateur",
        "Formation et accompagnement des utilisateurs",
      ],
      realisations: [
        "Déploiement de services réseau et systèmes chez ALS France",
        "Documentation des procédures pour les utilisateurs",
      ],
    },
  },
  {
    slug: "developpement-professionnel",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Organiser mon développement professionnel",
    description: "Mettre en place mon environnement d'apprentissage, gérer mon identité professionnelle.",
    skills: ["Veille techno", "Autoformation", "Portfolio", "Identité pro"],
    details: {
      intro: "Ce bloc consiste à construire son parcours professionnel : faire de la veille, se former en autonomie et gérer son identité numérique.",
      activites: [
        "Veille technologique régulière",
        "Autoformation sur de nouveaux outils et concepts",
        "Construction d'un portfolio professionnel",
        "Gestion de l'identité numérique (LinkedIn, GitHub)",
      ],
      realisations: [
        "Création de ce portfolio BTS SIO",
        "Veille active sur le domaine du réseau et de la cybersécurité",
      ],
    },
  },
];

export function getBlocBySlug(slug: string): Bloc | undefined {
  return blocs.find((b) => b.slug === slug);
}