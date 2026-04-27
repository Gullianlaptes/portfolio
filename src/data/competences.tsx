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
      intro: "Ce bloc consiste à maintenir le parc informatique d'une organisation : recenser le matériel et les logiciels, gérer les comptes et droits des utilisateurs, et garantir la disponibilité des données. C'est au cœur de mon alternance chez ALS France.",
      activites: [
        "Inventaire et suivi du matériel (postes, serveurs, périphériques, licences)",
        "Gestion des comptes et des habilitations dans un domaine Active Directory",
        "Mise en place et vérification des sauvegardes",
        "Application des règles de sécurité et du RGPD",
      ],
      realisations: [
        "Alternance ALS France (2024–2026) : gestion complète du parc informatique de l'entreprise",
        "Création et administration des utilisateurs dans le domaine",
        "Suivi des sauvegardes et procédures de restauration",
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
      intro: "Ce bloc couvre l'assistance aux utilisateurs : prendre en charge les incidents, diagnostiquer les pannes matérielles ou logicielles et apporter une solution adaptée. J'ai pratiqué cette compétence en alternance et lors de mes stages en réparation.",
      activites: [
        "Prise en charge et qualification des demandes utilisateurs",
        "Diagnostic des pannes matérielles et logicielles",
        "Résolution à distance ou en intervention sur site",
        "Communication avec l'utilisateur et suivi jusqu'à la clôture",
      ],
      realisations: [
        "Support quotidien des utilisateurs chez ALS France",
        "Stages chez Seroo Informatique (2024) : réparation de matériel informatique",
        "Stages chez LB Info (2023) : dépannage et réparation de postes",
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
      intro: "Ma spécialisation BTS SIO est l'option SISR (réseau et systèmes). J'aborde donc ce bloc par l'angle de l'infrastructure qui rend possible la présence en ligne d'une organisation, et j'ai aussi touché au développement web pendant mes stages.",
      activites: [
        "Mise en place et configuration d'un hébergement web",
        "Gestion DNS et nom de domaine",
        "Sécurisation des accès (HTTPS, pare-feu, filtrage)",
        "Notions de développement web côté front",
      ],
      realisations: [
        "Stage chez LB Info (2023) : participation au développement de sites web",
        "Création de ce portfolio BTS SIO en ligne",
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
      intro: "Ce bloc consiste à organiser un projet informatique : comprendre le besoin, planifier les étapes, suivre l'avancement et évaluer les résultats. Je l'ai mis en pratique en formation BTS SIO et sur les missions internes de mon alternance.",
      activites: [
        "Analyse du besoin et rédaction d'un cahier des charges",
        "Planification des tâches et des échéances",
        "Suivi de l'avancement et des risques",
        "Travail collaboratif et communication d'équipe",
      ],
      realisations: [
        "Projets en équipe pendant la formation BTS SIO",
        "Participation à des projets internes en alternance chez ALS France",
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
      intro: "Ce bloc consiste à rendre un service informatique réellement opérationnel : tests, mise en production, documentation et accompagnement des utilisateurs. Je le pratique régulièrement chez ALS France lorsque je déploie des postes ou des services.",
      activites: [
        "Tests d'intégration et de validation avant mise en production",
        "Déploiement et mise en service auprès des utilisateurs",
        "Rédaction de documentation technique et utilisateur",
        "Accompagnement et formation des utilisateurs",
      ],
      realisations: [
        "Déploiement et configuration de postes utilisateurs chez ALS France",
        "Préparation et mise en service de matériel télécom (stage Transacom, 2022)",
        "Documentation des procédures internes",
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
      intro: "Ce bloc consiste à construire son parcours pro : faire de la veille, se former en autonomie et gérer son identité numérique. Mes stages successifs (Seconde, Première, Terminale) puis mon alternance m'ont permis de structurer ce développement.",
      activites: [
        "Veille technologique régulière (réseau, systèmes, cybersécurité)",
        "Autoformation sur de nouveaux outils et concepts",
        "Construction et mise à jour d'un portfolio professionnel",
        "Gestion de l'identité numérique pro",
      ],
      realisations: [
        "Parcours progressif : stages dès la Seconde (Transacom), puis Première (LB Info), Terminale (Seroo) et alternance (ALS France)",
        "Création de ce portfolio BTS SIO",
        "Veille active sur le réseau informatique et la cybersécurité",
      ],
    },
  },
];

export function getBlocBySlug(slug: string): Bloc | undefined {
  return blocs.find((b) => b.slug === slug);
}