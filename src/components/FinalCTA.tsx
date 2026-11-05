import {
  PILOT_CTA_LABEL,
  PILOT_CTA_URL,
  PILOT_DURATION,
  PILOT_PLACES,
  PILOT_PRICE,
} from "@/lib/offer";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          08 - Cohorte pilote
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {PILOT_PLACES} places.<br />
          <span className="text-primary text-glow-gold">{PILOT_DURATION}.</span><br />
          Un avis <span className="text-primary">honnête</span> en échange.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {PILOT_PRICE} pour les {PILOT_DURATION}. Mise en place en direct avec moi,
          suivi chaque semaine.{" "}
          <span className="text-foreground">
            Les places sont limitées parce que je suis chaque personne moi-même.
          </span>
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href={PILOT_CTA_URL}
            className="inline-flex items-center rounded-full bg-primary px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] sm:text-[13px]"
          >
            → {PILOT_CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
