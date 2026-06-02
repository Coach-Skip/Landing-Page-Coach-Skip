import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Left - content */}
        <div className="animate-reveal lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" aria-hidden />
            Bêta privée en cours
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Le coach nutritionnel{" "}
            <span className="italic text-foreground/90">qui te pilote à ta place.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une IA personnelle qui te génère ton plan, l'adapte chaque jour à ta
            vraie vie, et t'accompagne au quotidien mais pour 5x moins cher
            qu'un vrai coach.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              id="founding-member"
              href="https://buy.stripe.com/fZu28taaC8GO9go2bE4AU00"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-display text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              Devenir Founding Member : 19€/mois à vie
            </a>
            <p className="max-w-md font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              50 places. Soyez parmi les premiers. Tarif bloqué à vie même après
              hausse publique.
            </p>
          </div>
        </div>

        {/* Right - video placeholder 16:9 */}
        <div className="animate-reveal lg:col-span-5 lg:pt-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-accent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.25_0_0)_0%,transparent_60%)]" />
            <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Vidéo de présentation
            </div>
            <button
              type="button"
              aria-label="Lire la vidéo de présentation"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-primary text-primary" />
              </span>
            </button>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              02:14
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
