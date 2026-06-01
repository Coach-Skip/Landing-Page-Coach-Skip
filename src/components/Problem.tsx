export function Problem() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          02 — Le problème
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Tu connais <span className="italic">cette galère.</span>
        </h2>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Tu as essayé MyFitnessPal, Yazio, Cal AI. Tu as téléchargé 3 applis
            de meal prep. Tu as suivi un PDF de régime trouvé en ligne. Et au
            bout d'un mois, t'as décroché.
          </p>
          <p className="text-foreground">
            C'est pas un problème de motivation.{" "}
            <span className="text-primary">C'est un problème de système.</span>
          </p>
          <p>
            Tu passes 20 minutes par jour à logger tes repas dans une appli qui
            te dit juste combien tu manges, jamais quoi manger.
          </p>
          <p>
            Tu as un plan théorique pour la semaine, mais aucune idée de quoi
            faire quand tu sors au resto, quand t'as zéro temps de cuisiner, ou
            quand tu craques.
          </p>
          <p>
            Tu sais qu'un vrai coach nutritionnel résoudrait ça. Sauf qu'il
            coûte 80 à 200€/mois et que tu vas pas mettre ça sur la table tous
            les mois.
          </p>
          <p>
            Tu te retrouves seul·e avec une calculatrice de calories et ta
            volonté. Ce qui ne suffit pas.
          </p>
        </div>

        <blockquote className="mt-12 border-l-2 border-primary bg-accent/50 px-6 py-6 sm:px-8 sm:py-8">
          <p className="font-display text-xl italic leading-snug text-foreground sm:text-2xl">
            « C'est exactement ce problème que j'ai résolu pour moi-même pendant
            5 ans, avant d'en faire Coach Skip. »
          </p>
        </blockquote>
      </div>
    </section>
  );
}
