import { Code2, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
            <Code2 className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
            <Briefcase className="h-5 w-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-muted-foreground transition-colors hover:text-primary">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="font-display text-xs text-muted-foreground">
           © 2026 — Portfolio BTS SIO. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
