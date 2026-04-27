import { createFileRoute } from "@tanstack/react-router";
import { CompetenceCard } from "../components/CompetenceCard";
import { SectionHeading } from "../components/SectionHeading";
import { blocs } from "../data/competences";

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

function CompetencesPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Compétences BTS SIO"
          subtitle="Les 6 blocs de compétences du référentiel BTS Services Informatiques aux Organisations que j'ai développés au cours de ma formation en alternace."
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
