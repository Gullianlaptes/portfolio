import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, FileText, Download } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Portfolio BTS SIO" },
      { name: "description", content: "Contactez-moi pour discuter de projets ou d'opportunités professionnelles." },
      { property: "og:title", content: "Contact — Portfolio BTS SIO" },
      { property: "og:description", content: "Me contacter pour un projet ou une opportunité." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Me contacter"
          subtitle="N'hésitez pas à me contacter pour discuter de projets, de stages ou d'opportunités professionnelles."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3"
          >
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:gullian.laptes@orange.fr" className="font-display text-sm text-foreground hover:text-primary transition-colors">gullian.laptes@orange.fr</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-display text-sm text-foreground">France</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3"
          >
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+33672797964" className="font-display text-sm text-foreground hover:text-primary transition-colors">06 72 79 79 64</a>
          </motion.div>
        </div>

        <motion.a
          href="/cv.pdf"
          download
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-10 flex items-center justify-between gap-4 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-5 transition-all hover:border-primary/60 hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-foreground">Mon CV</p>
              <p className="text-xs text-muted-foreground">Cliquez pour télécharger (PDF)</p>
            </div>
          </div>
          <Download className="h-5 w-5 text-primary" />
        </motion.a>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center"
          >
            <p className="font-display text-lg text-primary">✓ Message envoyé !</p>
            <p className="mt-2 text-sm text-muted-foreground">Merci, je reviendrai vers vous rapidement.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-5 rounded-xl border border-border bg-card p-6"
          >
            <div>
              <label className="mb-2 block font-display text-sm text-foreground">Nom</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="mb-2 block font-display text-sm text-foreground">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block font-display text-sm text-foreground">Message</label>
              <textarea
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Envoyer <Send className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
