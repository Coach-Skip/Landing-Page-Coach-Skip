function ChatMockup() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4 shadow-[0_20px_60px_-30px_var(--color-primary)]">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Coach Skip
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">12:42</span>
      </div>

      <div className="space-y-3">
        {/* User bubble - right */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm border border-border bg-transparent px-4 py-2.5 text-sm text-foreground">
            100g de riz, 150g de poulet ce midi
          </div>
        </div>

        {/* AI bubble - left */}
        <div className="flex justify-start">
          <div
            className="max-w-[85%] rounded-2xl rounded-bl-sm border border-primary/30 px-4 py-2.5 text-sm text-foreground"
            style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 14%, transparent)" }}
          >
            OK, c'est noté ! 🎯 Il te reste{" "}
            <span className="font-semibold text-primary">800 kcal</span> et{" "}
            <span className="font-semibold text-primary">60g de protéines</span>{" "}
            pour ce soir. Tu veux que je te propose un dîner avec ce que tu as
            au frigo ?
          </div>
        </div>

        {/* typing indicator */}
        <div className="flex items-center gap-1 pl-2 pt-1">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground" />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground" style={{ animationDelay: "0.2s" }} />
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
}

const blocks = [
  {
    n: "01",
    title: "Un plan qui s'adapte à ta vraie vie",
    body: "Tu choisis ton niveau d'autonomie. Tu peux suivre un plan que Coach Skip te génère et qu'il réajuste chaque jour selon ce que tu as fait la veille : resto imprévu, écart, frigo vide, journée chargée. Ou tu peux piloter au feeling : tu lui dis ce que tu manges, il recadre en temps réel.",
  },
  {
    n: "02",
    title: "Logging sans friction",
    body: "Tu photographies tes repas, il estime tes macros automatiquement. Ou tu lui dis à voix haute : '100g de riz, 150g de poulet ce midi', il calcule et te répond avec ce qu'il te reste pour la journée.",
  },
  {
    n: "03",
    title: "Un coach qui dialogue, pas un tracker passif",
    body: "Il te suggère un dîner avec les restes de ton frigo. Il te recadre quand tu dérives sans te culpabiliser. Il célèbre quand tu tiens. C'est l'écart entre une calculatrice et un coach.",
  },
];

export function Solution() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            03 - La solution
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Coach Skip, c'est un coach nutritionnel personnel{" "}
            <span className="italic">mais porté par une IA.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pas un tracker. Pas un journal alimentaire. Un coach qui pilote ta
            nutrition au jour le jour comme un vrai coach humain le ferait.
            Sauf qu'il est dispo 24/7, qu'il s'adapte à ta vie en temps réel,
            et qu'il coûte 5x moins cher.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.n}
              className="group flex flex-col rounded-2xl border border-border bg-accent/30 p-6 transition-colors hover:border-primary/40 hover:bg-accent/60"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Bloc {b.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold leading-tight text-foreground">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </article>
          ))}
        </div>

        {/* Chat mockup illustrating Bloc 2 */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Démo · Bloc 02
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Logger un repas, c'est une phrase. <span className="italic">Pas un formulaire.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Voix, photo ou texte. Coach Skip comprend, calcule, et te dit ce
              qu'il te reste puis te propose la suite.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
