## Objectif

Poser la structure de la landing page de **Coach Skip** (SaaS de coaching nutritionnel IA, cible FR) en mode sombre, avec l'accent orange `#ff4d00` et les typographies Inter Tight / Inter / JetBrains Mono validées. Le Header et le Hero contiennent le contenu final fourni ; les sections suivantes restent en attente du contenu à venir.

## 1. Design system (`src/styles.css`)

Remplacer la palette par les tokens validés :
- `--background` `#080808`, `--foreground` `#f2f2f2`
- `--primary` `#ff4d00`
- `--accent` `#1a1a1a`, `--muted` `#888`, `--border` `rgba(255,255,255,0.08)`
- Variables `--font-display` (Inter Tight 800 italic), `--font-body` (Inter), `--font-mono` (JetBrains Mono)
- Keyframes `reveal-up` + classe `.animate-reveal` pour l'entrée du Hero
- Lang `fr` sur `<html>` dans `__root.tsx`, chargement des polices Google (Inter, Inter Tight, JetBrains Mono)

## 2. Composants de layout (`src/components/`)

**`SiteHeader.tsx`** — nav fixe minimaliste, fond `bg-background/80` + backdrop-blur :
- Logo texte stylisé : `Coach Skip` (Inter Tight extrabold italic uppercase, point orange entre les deux mots)
- CTA droite : **Devenir Founding Member** (fond `foreground`, texte `background`, hover → orange)
- Pas de liens de navigation pour l'instant (ils viendront avec le contenu des autres sections)

**`SiteFooter.tsx`** — version minimale FR : logo + mention `© 2026 Coach Skip` + ligne de statut. Sera étoffé quand tu enverras le contenu du footer.

## 3. Hero (`src/routes/index.tsx`)

Layout 12 colonnes, contenu à gauche (col-span 7), visuel vidéo à droite (col-span 5) en desktop ; empilé en mobile (viewport actuel 457px).

Contenu textuel (exactement comme fourni) :
- Badge live (point orange pulsant) : `Bêta privée en cours`
- **H1** : « Le coach nutritionnel qui te pilote à ta place. » — Inter Tight extrabold, tracking serré, italique sur la deuxième ligne pour la signature visuelle de la direction.
- **Sous-titre** : « Une IA personnelle qui te génère ton plan, l'adapte chaque jour à ta vraie vie, et t'accompagne au quotidien — mais pour 5x moins cher qu'un vrai coach. »
- **CTA primaire** (orange, shadow glow) : `→ Devenir Founding Member — 19€/mois à vie`
- **Sous-CTA** (mono, muted, petit) : « 50 places. Soyez parmi les premiers. Tarif bloqué à vie même après hausse publique. »
- **Visuel droit** : placeholder vidéo en **ratio 16:9** (`aspect-video`), fond `bg-accent`, bordure subtile, icône play centrée + label mono « Vidéo de présentation ». Carte flottante en bas-gauche retirée (pas de métrique inventée).

## 4. Sections suivantes

- Bloc « Module 01 » et bloc CTA final de la direction d'origine : **supprimés** pour ne pas laisser de contenu inventé visible. Je les remplacerai par les vraies sections au fur et à mesure que tu m'enverras leur contenu.
- Le `<main>` ne contiendra donc que le Hero pour l'instant, suivi du Footer.

## 5. SEO (`head()` de la route)

- `title` : `Coach Skip — Le coach nutritionnel IA qui te pilote`
- `description` : `IA personnelle qui génère ton plan nutrition, l'adapte chaque jour à ta vraie vie, 5x moins cher qu'un coach. Founding Member 19€/mois à vie.`
- `og:title` / `og:description` identiques, `lang="fr"`

## Structure finale

```text
src/routes/index.tsx
├── <SiteHeader />   ← logo "Coach Skip" + CTA "Devenir Founding Member"
├── <main>
│   └── Hero         ← H1, sous-titre, CTA + sous-CTA, placeholder vidéo 16:9
└── <SiteFooter />   ← minimal, à étoffer
```

## Hors scope (en attente de ton contenu)

- Sections produit / preuve sociale / pricing / FAQ / témoignages
- Vraie vidéo de présentation (placeholder pour l'instant)
- Footer complet (liens, colonnes)
- Formulaire / flow de capture pour les 50 founding members

Prêt à builder le layout principal dès que tu valides.