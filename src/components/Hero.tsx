import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { PLACES_TOTAL, scarcityLine } from "@/lib/founding";

function LaunchVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    setHasStarted(true);
    void videoRef.current?.play();
  };

  return (
    <div className="relative aspect-9/16 w-full max-w-85 overflow-hidden rounded-2xl border border-border bg-black shadow-[0_20px_60px_-20px_var(--color-primary)]">
      <video
        ref={videoRef}
        src="/coach-skip-launch.mp4"
        poster="/coach-skip-poster.jpg"
        controls={hasStarted}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label="Vidéo de lancement Coach Skip par Gaspard"
      />
      {!hasStarted && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Lire la vidéo de lancement Coach Skip"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linear-to-b from-black/30 via-black/50 to-black/75 transition-colors hover:from-black/40 hover:via-black/60 hover:to-black/80"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform group-hover:scale-110">
            <Play className="h-8 w-8 translate-x-0.5 fill-white text-white" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/90">
            Lancer la vidéo · 1:18
          </span>
        </button>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Left - content */}
        <div className="animate-reveal lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" aria-hidden />
            {PLACES_TOTAL} places fondateurs · accès anticipé
          </div>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Le coach nutritionnel{" "}
            <span className="text-primary text-glow-gold">qui te tient la main, chaque jour.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une IA personnelle qui te génère ton plan, l'adapte à ta vie réelle,
            et te recadre quand tu dérives. Comme un coach humain, sauf qu'il est
            dispo 24/7 et tient dans ta poche.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Par Gaspard
            </span>
            <span>Champion de France développé couché</span>
            <span aria-hidden>·</span>
            <span>5 ans de tracking quotidien</span>
          </div>

          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              id="founding-member"
              href="https://buy.stripe.com/3cIcN7fuWg9g1NW5nQ4AU03"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-display text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-primary)] transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              Devenir Founding Member : 19€/mois à vie
            </a>
            <p className="max-w-md font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {scarcityLine()} Tarif bloqué à vie, même après hausse publique.
            </p>
          </div>
        </div>

        {/* Right - launch video (vertical 9:16, native Reel format) */}
        <div className="animate-reveal flex justify-center lg:col-span-5 lg:pt-2">
          <LaunchVideo />
        </div>
      </div>
    </section>
  );
}
