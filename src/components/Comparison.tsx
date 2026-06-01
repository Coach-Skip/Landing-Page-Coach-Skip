const rows = [
  { criterion: "Te dit quoi faire", others: "Non, tu décides seul·e", coach: "Oui", skip: "Oui" },
  { criterion: "S'adapte chaque jour", others: "Non", coach: "Toutes les semaines", skip: "Oui, chaque jour" },
  { criterion: "Logging photo + vocal", others: "Partiel", coach: "Pas disponible", skip: "Oui" },
  { criterion: "Dispo 24/7", others: "Oui, mais passif", coach: "Non, créneaux fixes", skip: "Oui, et proactif" },
  { criterion: "Prix", others: "5–15€/mois", coach: "80–200€/mois", skip: "19€/mois (FM) — 39€+ ensuite" },
];

export function Comparison() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            04 — Comparaison
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tu te demandes en quoi c'est différent de ce que tu as{" "}
            <span className="italic">déjà essayé.</span>
          </h2>
        </div>

        {/* Desktop / tablet table */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-12 gap-0 border-y border-border">
            <div className="col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Critère
            </div>
            <div className="col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              MyFitnessPal, Cal AI, trackers
            </div>
            <div className="col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Coach humain
            </div>
            <div
              className="col-span-3 border-x-2 border-t-2 border-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary"
              style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }}
            >
              Coach Skip
            </div>

            {rows.map((r, i) => (
              <div key={r.criterion} className="contents">
                <div className={`col-span-3 px-5 py-5 text-sm font-semibold text-foreground ${i > 0 ? "border-t border-border" : ""}`}>
                  {r.criterion}
                </div>
                <div className={`col-span-3 px-5 py-5 text-sm text-muted-foreground ${i > 0 ? "border-t border-border" : ""}`}>
                  {r.others}
                </div>
                <div className={`col-span-3 px-5 py-5 text-sm text-muted-foreground ${i > 0 ? "border-t border-border" : ""}`}>
                  {r.coach}
                </div>
                <div
                  className={`col-span-3 border-x-2 px-5 py-5 text-sm font-semibold text-foreground border-primary ${
                    i === rows.length - 1 ? "border-b-2" : ""
                  }`}
                  style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }}
                >
                  {r.skip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-12 space-y-4 md:hidden">
          {rows.map((r) => (
            <div key={r.criterion} className="rounded-xl border border-border p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {r.criterion}
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Trackers</dt>
                  <dd className="text-right text-foreground">{r.others}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Coach humain</dt>
                  <dd className="text-right text-foreground">{r.coach}</dd>
                </div>
                <div
                  className="-mx-2 mt-2 flex justify-between gap-4 rounded-md border border-primary/40 px-2 py-2"
                  style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }}
                >
                  <dt className="font-semibold text-primary">Coach Skip</dt>
                  <dd className="text-right font-semibold text-foreground">{r.skip}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
