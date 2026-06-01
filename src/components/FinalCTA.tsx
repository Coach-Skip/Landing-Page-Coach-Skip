export function FinalCTA() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          08 — Dernière chance
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          50 Founding Members.<br />
          Le tarif <span className="italic">à vie.</span><br />
          Le risque <span className="text-primary">sur moi.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          19€/mois à vie. Onboarding 1-on-1. Accès DM direct. Garantie 30 jours
          satisfait ou remboursé.{" "}
          <span className="text-foreground">
            Le tarif Founding Member ne reviendra jamais une fois les 50 places
            vendues.
          </span>
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href="#founding-member"
            className="inline-flex items-center rounded-full bg-primary px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] sm:text-[13px]"
          >
            → Devenir Founding Member — 19€/mois à vie
          </a>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Moins de 50 places restantes.
          </p>
        </div>
      </div>
    </section>
  );
}
