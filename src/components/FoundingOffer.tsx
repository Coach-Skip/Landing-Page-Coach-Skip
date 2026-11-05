import {
  PILOT_CTA_LABEL,
  PILOT_CTA_URL,
  PILOT_DURATION,
  PILOT_PLACES,
  PILOT_PRICE,
} from "@/lib/offer";

const bonuses = [
  {
    n: "01",
    title: `${PILOT_PRICE} pour les ${PILOT_DURATION}`,
    body: "Un prix unique pour toute la durée du programme.",
  },
  {
    n: "02",
    title: "Mise en place en direct avec moi (45 min)",
    body: "On configure ton plan ensemble, on cale tes objectifs et tes contraintes. Tu démarres avec un cadre sur mesure, pas un setup générique.",
  },
  {
    n: "03",
    title: "Un suivi chaque semaine",
    body: "Je regarde ton journal, j'ajuste ton plan et je réponds à tes questions. Tes retours passent en priorité.",
  },
  {
    n: "04",
    title: "Ton avis façonne la suite",
    body: "À la fin, je te demande un retour honnête. Il sert à améliorer le programme pour les prochaines personnes.",
  },
];

export function FoundingOffer() {
  return (
    <section id="offre" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            05 - Cohorte pilote
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {PILOT_PLACES} places.{" "}
            <span className="text-primary">Un tarif de lancement pour des retours honnêtes.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Je lance une cohorte pilote de {PILOT_PLACES} personnes. Tu bénéficies
            d'un tarif réduit et d'un suivi direct avec moi pendant {PILOT_DURATION}.
            En échange, je te demande un avis honnête à la fin, pour améliorer le
            programme.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {bonuses.map((b) => (
            <article
              key={b.n}
              className="rounded-2xl border border-border bg-accent/30 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Inclus {b.n}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight text-foreground">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3">
          <a
            href={PILOT_CTA_URL}
            className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            → {PILOT_CTA_LABEL}
          </a>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {PILOT_PRICE} pour les {PILOT_DURATION}. {PILOT_PLACES} places seulement.
          </p>
        </div>
      </div>
    </section>
  );
}
