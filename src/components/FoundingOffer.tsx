import { ShieldCheck } from "lucide-react";
import { PLACES_TOTAL, scarcityLine } from "@/lib/founding";

const bonuses = [
  {
    n: "01",
    title: "Coach Skip à 19€/mois à vie",
    body: "Même si le prix public monte à 39€, 49€ ou 69€ dans 6 mois, tu restes bloqué·e à 19€/mois tant que tu es abonné·e.",
  },
  {
    n: "02",
    title: "Mise en place en direct avec moi (45 min)",
    body: "On configure ton plan ensemble, on cale tes objectifs et tes contraintes. Tu démarres avec un cadre sur mesure, pas un setup générique.",
  },
  {
    n: "03",
    title: "Accès DM direct",
    body: "Tu me ping, je réponds. Tes questions et tes retours passent en priorité.",
  },
  {
    n: "04",
    title: "Tu demandes une fonction, je la priorise",
    body: "Il te manque un format de logging, une intégration, un type de plan ? Tu me le dis, je l'arbitre en haut de la roadmap. Les Founding Members façonnent ce que Coach Skip devient.",
  },
];

export function FoundingOffer() {
  return (
    <section id="founding-member" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            05 - Founding Member
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {PLACES_TOTAL} places. Le tarif Founding Member{" "}
            <span className="italic">ne reviendra jamais.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Coach Skip ouvre {PLACES_TOTAL} places fondateurs avant la sortie
            publique. Je prends ces {PLACES_TOTAL} Founding Members pour
            finaliser le produit avec eux. Tu obtiens un tarif et un accès que
            personne d'autre n'aura ensuite.
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
                  Bonus {b.n}
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
            href="https://buy.stripe.com/3cIcN7fuWg9g1NW5nQ4AU03"
            target="_blank"                           
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            → Devenir Founding Member : 19€/mois à vie
          </a>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {scarcityLine()} Résiliation à tout moment via Stripe.
          </p>
        </div>

        {/* Guarantee block */}
        <div
          className="mt-14 flex flex-col gap-4 rounded-2xl border-2 border-primary/40 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
          style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 8%, transparent)" }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
              Garantie 30 jours satisfait ou remboursé
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Si dans les 30 premiers jours Coach Skip ne te convient pas, je te
              rembourse intégralement. Sans question, sans formulaire à remplir.{" "}
              <span className="text-foreground">Le risque est sur moi, pas sur toi.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
