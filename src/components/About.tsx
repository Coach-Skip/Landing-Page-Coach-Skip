export function About() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              06 — À propos
            </div>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Pourquoi je sors Coach Skip{" "}
              <span className="italic">et pourquoi maintenant.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Je m'appelle <span className="text-foreground font-semibold">Gaspard</span>.
                Ingénieur du numérique de formation, et je tracke mes calories
                tous les jours depuis 5 ans. Pas par obsession mais par méthode.
              </p>
              <p>
                Pendant ces 5 ans, j'ai construit mes propres outils pour gérer
                ma nutrition en tant que sportif de haut niveau :{" "}
                <span className="text-foreground">
                  Champion de France de Développé couché, vice-champion d'Europe
                  et double vice-champion de France de Force Athlétique.
                </span>{" "}
                Tableaux d'ajustement quotidien, scripts d'estimation de macros,
                prompts qui me sortaient un plan repas à partir de mon frigo.
                Ça marchait bien pour moi. Au point où des gens autour de moi
                m'ont demandé « comment tu fais ».
              </p>
              <p className="text-foreground">
                Coach Skip, c'est ça. Industrialisé, accessible, mis dans les
                mains de n'importe qui.
              </p>
              <p>
                En parallèle, j'ai monté{" "}
                <span className="text-foreground">Le Sportif Gourmand</span>,
                une marque de pâtisseries protéinées, et{" "}
                <span className="text-foreground">Skip Le Sportif Gourmand</span>,
                un compte de contenu nutrition/sport. J'évolue dans cet
                écosystème tous les jours. Coach Skip n'est pas un side-project
                lancé sur un coup de tête — c'est un réel outil que j'utilise au
                quotidien.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-accent/40">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Photo · Gaspard
                </div>
                <div className="font-display text-6xl font-extrabold italic text-foreground/20">
                  GS
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Fondateur</span>
                <span className="text-primary">Coach Skip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
