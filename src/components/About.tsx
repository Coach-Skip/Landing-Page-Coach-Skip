export function About() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              06 - À propos
            </div>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Pourquoi je sors Coach Skip{" "}
              <span className="text-primary">et pourquoi maintenant.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Je m'appelle <span className="text-foreground font-semibold">Gaspard</span>.
                Ingénieur du numérique de formation, et je traque mes calories
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
                Jusqu'au GPT personnalisé qui calculait les macros de mes plats au resto.
                Ça marchait bien pour moi. Au point où des gens autour de moi
                m'ont demandé « comment tu fais ».
              </p>
              <p className="text-foreground">
                Sur ces 5 ans : <span className="text-primary">10 kg perdus</span>,
                descendu à <span className="text-primary">8% de masse grasse</span>{" "}
                en compétition, sans jamais sacrifier ma performance. Pas avec
                un programme magique : avec un système d'ajustement quotidien.
              </p>
              <p className="text-foreground">
                Coach Skip, c'est ce système. Industrialisé, accessible, mis dans
                les mains de n'importe qui.
              </p>
              <p>
                En parallèle, j'ai monté{" "}
                <span className="text-foreground">Le Sportif Gourmand</span>,
                une marque de pâtisseries protéinées, et{" "}
                <span className="text-foreground">Skip Le Sportif Gourmand</span>,
                un compte de contenu nutrition/sport sur Instagram et YouTube.
                J'évolue dans cet écosystème tous les jours. Coach Skip n'est
                pas un side-project lancé sur un coup de tête, c'est un outil
                que j'utilise déjà au quotidien.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 font-mono text-[11px] uppercase tracking-wider">
                <a
                  href="https://www.instagram.com/skip.sportif.gourmand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  Instagram · @skip.sportif.gourmand
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1.5 text-muted-foreground">
                  YouTube · Skip Le Sportif Gourmand
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-accent/40">
              <img
                src="/gaspard-portrait.jpg"
                alt="Portrait de Gaspard, fondateur de Coach Skip"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                <span>Fondateur</span>
                <span className="text-primary">Coach Skip</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau preuve : niveau + résultat */}
        <div className="mt-20 sm:mt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Preuve · Compétition
          </div>
          <h3 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Ces résultats, je les ai obtenus avec le système que Coach Skip
            industrialise.
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <figure className="group">
              <div className="aspect-3/4 overflow-hidden rounded-2xl border border-border bg-accent/40">
                <img
                  src="/gaspard-physique.jpg"
                  alt="Gaspard, physique sec en salle, 8% de masse grasse en compétition"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Méthode appliquée
                </div>
                <div className="font-display text-base font-semibold text-foreground sm:text-lg">
                  8% de masse grasse en compétition
                </div>
              </figcaption>
            </figure>

            <figure className="group">
              <div className="aspect-3/4 overflow-hidden rounded-2xl border border-border bg-accent/40">
                <img
                  src="/gaspard-equipe-france.jpg"
                  alt="Gaspard en maillot de l'équipe de France de Force Athlétique, en compétition"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Niveau international
                </div>
                <div className="font-display text-base font-semibold text-foreground sm:text-lg">
                  Équipe de France · Championnats d'Europe
                </div>
              </figcaption>
            </figure>

            <figure className="group">
              <div className="aspect-3/4 overflow-hidden rounded-2xl border border-border bg-accent/40">
                <img
                  src="/gaspard-podium.jpg"
                  alt="Gaspard sur le podium des Championnats de France de Force Athlétique, avec médaille"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Palmarès documenté
                </div>
                <div className="font-display text-base font-semibold text-foreground sm:text-lg">
                  Podium · Championnats de France de Force Athlétique
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
