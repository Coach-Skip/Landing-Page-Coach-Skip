export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-baseline gap-1 font-display font-extrabold italic uppercase tracking-tight text-foreground">
          <span>Coach</span>
          <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary" aria-hidden />
          <span>Skip</span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          © 2026 Coach Skip — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
