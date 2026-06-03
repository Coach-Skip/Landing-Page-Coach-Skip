import { PLACES_TOTAL, scarcityLine } from "@/lib/founding";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          08 - Dernière chance
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {PLACES_TOTAL} Founding Members.<br />
          Le tarif <span className="italic">à vie.</span><br />
          Le risque <span className="text-primary">sur moi.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          19€/mois à vie. Mise en place en direct avec moi. Accès DM direct. Garantie 30 jours
          satisfait ou remboursé.{" "}
          <span className="text-foreground">
            Le tarif Founding Member ne reviendra jamais une fois les {PLACES_TOTAL}{" "}
            places vendues.
          </span>
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href="https://buy.stripe.com/3cIcN7fuWg9g1NW5nQ4AU03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] sm:text-[13px]"
          >
            → Devenir Founding Member : 19€/mois à vie
          </a>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {scarcityLine()}
          </p>
        </div>
      </div>
    </section>
  );
}
