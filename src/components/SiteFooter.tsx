const links = [
  { label: "Mentions légales", href: "#" },
  { label: "CGV", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Contact", href: "mailto:hello@coachskip.fr" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-baseline gap-1 font-display font-extrabold italic uppercase tracking-tight text-foreground">
            <span>Coach</span>
            <span
              className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary"
              aria-hidden
            />
            <span>Skip</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            © 2026 Coach Skip — Tous droits réservés
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Fait avec méthode à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
