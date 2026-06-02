import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group inline-flex items-baseline gap-1 font-display font-extrabold italic uppercase tracking-tight text-foreground">
          <span className="text-lg">Coach</span>
          <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary transition-transform group-hover:scale-125" aria-hidden />
          <span className="text-lg">Skip</span>
        </Link>

        <a
          href="https://buy.stripe.com/fZu28taaC8GO9go2bE4AU00"
          target="_blank"                           
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Devenir Founding Member
        </a>
      </div>
    </header>
  );
}
