import { createFileRoute } from "@tanstack/react-router";
import { CompetenceCard } from "../components/CompetenceCard";
import { SectionHeading } from "../components/SectionHeading";
import { Server, HeadphonesIcon, Globe, FolderKanban, Rocket, BookOpen } from "lucide-react";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences — Portfolio BTS SIO" },
      { name: "description", content: "Découvrez les 6 blocs de compétences du BTS SIO que j'ai développés au cours de ma formation." },
      { property: "og:title", content: "Compétences — Portfolio BTS SIO" },
      { property: "og:description", content: "Les 6 blocs de compétences BTS SIO." },
    ],
  }),
  component: CompetencesPage,
});

const blocs = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Gérer le patrimoine informatique",
    description: "Recenser les ressources numériques, exploiter les référentiels, gérer les habilitations et les sauvegardes.",
    skills: ["Inventaire", "Référentiels", "Habilitations", "Sauvegardes", "RGPD"],
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Répondre aux incidents et demandes",
    description: "Collecter, suivre et traiter les demandes d'assistance concernant les services réseau, système.",
    skills: ["Support N1/N2", "Ticketing", "Diagnostic", "Résolution"],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Développer la présence en ligne",
    description: "Valoriser l'image de l'organisation sur les médias numériques, référencer et faire évoluer les sites web.",
    skills: ["SEO", "CMS", "Intégration web", "Analytics"],
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    title: "Travailler en mode projet",
    description: "Analyser les objectifs, planifier les activités et évaluer les indicateurs de suivi d'un projet.",
    skills: ["Agile", "Planification", "Gestion d'équipe", "KPI"],
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Mettre à disposition un service informatique",
    description: "Réaliser les tests d'intégration, déployer un service et accompagner les utilisateurs.",
    skills: ["Déploiement", "Tests", "Documentation", "Formation"],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Organiser son développement professionnel",
    description: "Mettre en place son environnement d'apprentissage, faire de la veille et gérer son identité professionnelle.",
    skills: ["Veille techno", "Autoformation", "Portfolio", "Identité pro"],
  },
];

function CompetencesPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Compétences BTS SIO"
          subtitle="Les 6 blocs de compétences du référentiel BTS Services Informatiques aux Organisations que j'ai développés au cours de ma formation et de mes stages."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocs.map((bloc, i) => (
            <CompetenceCard key={bloc.title} {...bloc} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
