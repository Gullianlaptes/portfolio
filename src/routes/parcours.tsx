import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Building2, MapPin, FlaskConical } from "lucide-react";

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
    icon: <Briefcase className="h-5 w-5" />,
    year: "2024/2026",
    title: "Alternance en entreprise",
    location: "",
    description: "2 ans au seins de l'entreprise ALS France : gestion du parc informatique , gestion des utilisateur dans un domaine, sécurité informatique",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    year: "2024/2026",
    title: "Stage en entreprise — Terminale",
    location: "Lycée",
    description: "2 ans au seins de l'entreprise ALS France : gestion du parc informatique , gestion des utilisateur dans un domaine, sécurité informatique",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    year: "2024",
    title: "Stage en entreprise — Terminale",
    location: "Lycée",
    description: "2 stages de 4 semaine chez Seroo informatique : Réparation de matériel informatique et ventes de matériel informatique",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    year: "2023",
    title: "Stage en entreprise — Première",
    location: "Lycée",
    description: "2 stages de 4 semaine chez LB Info : réparation et dépannage de matériel informatique et développement de site web.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    year: "2022",
    title: "Stage en entreprise — Seconde",
    location: "Lycée",
    description: "2 stage de 3 semaine chez Transacom : logistique gestion des stocke et préparation de matériel de télécommunication pour professionnel.",
  },
];

function ParcoursPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">
        {/* Présentation de l'entreprise d'alternance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="mb-4 flex items-center gap-3 text-primary">
            <Building2 className="h-6 w-6" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider">Mon entreprise d'alternance</span>
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">ALS France</h2>
          <div className="mb-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Saint-Quentin-Fallavier (38)
            </span>
            <span className="flex items-center gap-1.5">
              <FlaskConical className="h-4 w-4 text-primary" />
              Laboratoire d'analyses
            </span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            ALS France est un laboratoire qui fait partie du groupe mondial ALS, leader dans les contrôles et les analyses. L'entreprise a été créée en 1999 et compte une soixantaine de personnes sur le site de Saint-Quentin-Fallavier.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Activité principale :</span> ALS France réalise des analyses dans plusieurs domaines, principalement l'environnement (analyses de l'eau, des sols, de l'air, amiante, PFAS, microplastiques), mais aussi l'alimentation, les produits cosmétiques et la santé en intérieur (qualité de l'air dans les bâtiments, salles propres).
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Concrètement, des clients (entreprises, collectivités, industriels) envoient des échantillons au laboratoire pour les faire analyser, et ALS leur fournit ensuite des résultats fiables et certifiés (accréditation COFRAC).
          </p>
        </motion.section>

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
