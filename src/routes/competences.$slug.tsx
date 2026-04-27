import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { getBlocBySlug, type Bloc } from "../data/competences";

export const Route = createFileRoute("/competences/$slug")({
  head: ({ params }) => {
    const bloc = getBlocBySlug(params.slug);
    const title = bloc ? `${bloc.title} — Portfolio BTS SIO` : "Compétence — Portfolio BTS SIO";
    const description = bloc?.description ?? "Détail d'un bloc de compétences BTS SIO.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }): Bloc => {
    const bloc = getBlocBySlug(params.slug);
    if (!bloc) throw notFound();
    return bloc;
  },
  notFoundComponent: () => (
    <div className="min-h-screen px-6 pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 font-display text-2xl text-foreground">Compétence introuvable</h1>
        <Link to="/competences" className="text-primary hover:underline">
          ← Retour aux compétences
        </Link>
      </div>
    </div>
  ),
  component: CompetenceDetailPage,
});

function CompetenceDetailPage() {
  const bloc = Route.useLoaderData();

  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/competences"
          className="mb-8 inline-flex items-center gap-2 font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux compétences
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {bloc.icon}
          </div>

          <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            {bloc.title}
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">{bloc.details.intro}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {bloc.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1 font-display text-xs text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          <section className="mb-8 rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
              Activités principales
            </h2>
            <ul className="space-y-2">
              {bloc.details.activites.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
              Mes réalisations
            </h2>
            <ul className="space-y-2">
              {bloc.details.realisations.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
}