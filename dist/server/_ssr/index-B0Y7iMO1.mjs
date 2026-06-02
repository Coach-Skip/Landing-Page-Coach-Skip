import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as Play, S as ShieldCheck, C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group inline-flex items-baseline gap-1 font-display font-extrabold italic uppercase tracking-tight text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "Coach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary transition-transform group-hover:scale-125", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "Skip" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#founding-member",
        className: "inline-flex items-center rounded-full bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-background transition-colors hover:bg-primary hover:text-primary-foreground",
        children: "Devenir Founding Member"
      }
    )
  ] }) });
}
const links = [
  { label: "Mentions légales", href: "#" },
  { label: "CGV", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Contact", href: "mailto:hello@coachskip.fr" }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-baseline gap-1 font-display font-extrabold italic uppercase tracking-tight text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Skip" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap gap-x-6 gap-y-2", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground",
          children: l.label
        },
        l.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "© 2026 Coach Skip — Tous droits réservés" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Fait avec méthode à Paris" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-reveal lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary", "aria-hidden": true }),
        "Bêta privée en cours"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl", children: [
        "Le coach nutritionnel",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-foreground/90", children: "qui te pilote à ta place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Une IA personnelle qui te génère ton plan, l'adapte chaque jour à ta vraie vie, et t'accompagne au quotidien — mais pour 5x moins cher qu'un vrai coach." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            id: "founding-member",
            href: "#founding-member",
            className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-display text-base font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-primary)] transition-transform hover:-translate-y-0.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "transition-transform group-hover:translate-x-1", children: "→" }),
              "Devenir Founding Member — 19€/mois à vie"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "50 places. Soyez parmi les premiers. Tarif bloqué à vie même après hausse publique." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-reveal lg:col-span-5 lg:pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.25_0_0)_0%,transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Vidéo de présentation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Lire la vidéo de présentation",
          className: "group absolute inset-0 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 translate-x-0.5 fill-primary text-primary" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "02:14" })
    ] }) })
  ] }) });
}
function Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "02 — Le problème" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
      "Tu connais ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "cette galère." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tu as essayé MyFitnessPal, Yazio, Cal AI. Tu as téléchargé 3 applis de meal prep. Tu as suivi un PDF de régime trouvé en ligne. Et au bout d'un mois, t'as décroché." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground", children: [
        "C'est pas un problème de motivation.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "C'est un problème de système." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tu passes 20 minutes par jour à logger tes repas dans une appli qui te dit juste combien tu manges, jamais quoi manger." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tu as un plan théorique pour la semaine, mais aucune idée de quoi faire quand tu sors au resto, quand t'as zéro temps de cuisiner, ou quand tu craques." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tu sais qu'un vrai coach nutritionnel résoudrait ça. Sauf qu'il coûte 80 à 200€/mois et que tu vas pas mettre ça sur la table tous les mois." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tu te retrouves seul·e avec une calculatrice de calories et ta volonté. Ce qui ne suffit pas." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-12 border-l-2 border-primary bg-accent/50 px-6 py-6 sm:px-8 sm:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl italic leading-snug text-foreground sm:text-2xl", children: "« C'est exactement ce problème que j'ai résolu pour moi-même pendant 5 ans, avant d'en faire Coach Skip. »" }) })
  ] }) });
}
function ChatMockup() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background/60 p-4 shadow-[0_20px_60px_-30px_var(--color-primary)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between border-b border-border pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse-dot", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Coach Skip" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: "12:42" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[80%] rounded-2xl rounded-br-sm border border-border bg-transparent px-4 py-2.5 text-sm text-foreground", children: "100g de riz, 150g de poulet ce midi" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "max-w-[85%] rounded-2xl rounded-bl-sm border border-primary/30 px-4 py-2.5 text-sm text-foreground",
          style: { backgroundColor: "color-mix(in oklab, var(--color-primary) 14%, transparent)" },
          children: [
            "OK, c'est noté ! 🎯 Il te reste",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "800 kcal" }),
            " et",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "60g de protéines" }),
            " ",
            "pour ce soir. Tu veux que je te propose un dîner avec ce que tu as au frigo ?"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 pl-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground", style: { animationDelay: "0.2s" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground", style: { animationDelay: "0.4s" } })
      ] })
    ] })
  ] });
}
const blocks = [
  {
    n: "01",
    title: "Un plan qui s'adapte à ta vraie vie",
    body: "Tu choisis ton niveau d'autonomie. Tu peux suivre un plan que Coach Skip te génère et qu'il réajuste chaque jour selon ce que tu as fait la veille : resto imprévu, écart, frigo vide, journée chargée. Ou tu peux piloter au feeling : tu lui dis ce que tu manges, il recadre en temps réel."
  },
  {
    n: "02",
    title: "Logging sans friction",
    body: "Tu photographies tes repas, il estime tes macros automatiquement. Ou tu lui dis à voix haute : '100g de riz, 150g de poulet ce midi', il calcule et te répond avec ce qu'il te reste pour la journée."
  },
  {
    n: "03",
    title: "Un coach qui dialogue, pas un tracker passif",
    body: "Il te suggère un dîner avec les restes de ton frigo. Il te recadre quand tu dérives sans te culpabiliser. Il célèbre quand tu tiens. C'est l'écart entre une calculatrice et un coach."
  }
];
function Solution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "03 — La solution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
        "Coach Skip, c'est un coach nutritionnel personnel",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "mais porté par une IA." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Pas un tracker. Pas un journal alimentaire. Un coach qui pilote ta nutrition au jour le jour comme un vrai coach humain le ferait. Sauf qu'il est dispo 24/7, qu'il s'adapte à ta vie en temps réel, et qu'il coûte 5x moins cher." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-3", children: blocks.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group flex flex-col rounded-2xl border border-border bg-accent/30 p-6 transition-colors hover:border-primary/40 hover:bg-accent/60",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: [
            "Bloc ",
            b.n
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold leading-tight text-foreground", children: b.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: b.body })
        ]
      },
      b.n
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "Démo · Bloc 02" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl", children: [
          "Logger un repas, c'est une phrase. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Pas un formulaire." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "Voix, photo ou texte. Coach Skip comprend, calcule, et te dit ce qu'il te reste — puis te propose la suite." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMockup, {}) })
    ] })
  ] }) });
}
const rows = [
  { criterion: "Te dit quoi faire", others: "Non, tu décides seul·e", coach: "Oui", skip: "Oui" },
  { criterion: "S'adapte chaque jour", others: "Non", coach: "Toutes les semaines", skip: "Oui, chaque jour" },
  { criterion: "Logging photo + vocal", others: "Partiel", coach: "Pas disponible", skip: "Oui" },
  { criterion: "Dispo 24/7", others: "Oui, mais passif", coach: "Non, créneaux fixes", skip: "Oui, et proactif" },
  { criterion: "Prix", others: "5–15€/mois", coach: "80–200€/mois", skip: "19€/mois (FM) — 39€+ ensuite" }
];
function Comparison() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "04 — Comparaison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
        "Tu te demandes en quoi c'est différent de ce que tu as",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "déjà essayé." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-0 border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Critère" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "MyFitnessPal, Cal AI, trackers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Coach humain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "col-span-3 border-x-2 border-t-2 border-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
          style: { backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" },
          children: "Coach Skip"
        }
      ),
      rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `col-span-3 px-5 py-5 text-sm font-semibold text-foreground ${i > 0 ? "border-t border-border" : ""}`, children: r.criterion }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `col-span-3 px-5 py-5 text-sm text-muted-foreground ${i > 0 ? "border-t border-border" : ""}`, children: r.others }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `col-span-3 px-5 py-5 text-sm text-muted-foreground ${i > 0 ? "border-t border-border" : ""}`, children: r.coach }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `col-span-3 border-x-2 px-5 py-5 text-sm font-semibold text-foreground border-primary ${i === rows.length - 1 ? "border-b-2" : ""}`,
            style: { backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" },
            children: r.skip
          }
        )
      ] }, r.criterion))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-4 md:hidden", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: r.criterion }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Trackers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right text-foreground", children: r.others })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Coach humain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right text-foreground", children: r.coach })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "-mx-2 mt-2 flex justify-between gap-4 rounded-md border border-primary/40 px-2 py-2",
            style: { backgroundColor: "color-mix(in oklab, var(--color-primary) 10%, transparent)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-semibold text-primary", children: "Coach Skip" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right font-semibold text-foreground", children: r.skip })
            ]
          }
        )
      ] })
    ] }, r.criterion)) })
  ] }) });
}
const bonuses = [
  {
    n: "01",
    title: "Coach Skip à 19€/mois — à vie",
    body: "Même si le prix public monte à 39€, 49€ ou 69€ dans 6 mois, tu restes bloqué·e à 19€/mois tant que tu es abonné·e."
  },
  {
    n: "02",
    title: "Onboarding 1-on-1 avec moi (45 min)",
    body: "On configure ton plan ensemble, je comprends ton contexte, tu démarres avec un cadre sur mesure."
  },
  {
    n: "03",
    title: "Accès DM direct",
    body: "Tu me ping, je réponds. Tes questions et tes retours passent en priorité."
  },
  {
    n: "04",
    title: "Influence sur la roadmap",
    body: "Tu dis ce qui manque, je l'arbitre. Les Founding Members façonnent le produit final."
  }
];
function FoundingOffer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "founding-member", className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "05 — Founding Member" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
        "50 places. Le tarif Founding Member",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "ne reviendra jamais." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Coach Skip est en bêta privée. Je prends 50 Founding Members pour finaliser le produit avec moi. Tu obtiens un tarif et un accès que personne d'autre n'aura ensuite." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2", children: bonuses.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "rounded-2xl border border-border bg-accent/30 p-6 transition-colors hover:border-primary/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-baseline gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: [
            "Bonus ",
            b.n
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold leading-tight text-foreground", children: b.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: b.body })
        ]
      },
      b.n
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#founding-member",
          className: "inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]",
          children: "→ Devenir Founding Member — 19€/mois à vie"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Moins de 50 places restantes. Résiliation à tout moment via Stripe." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-14 flex flex-col gap-4 rounded-2xl border-2 border-primary/40 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8",
        style: { backgroundColor: "color-mix(in oklab, var(--color-primary) 8%, transparent)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold leading-tight text-foreground sm:text-2xl", children: "Garantie 30 jours satisfait ou remboursé" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base", children: [
              "Si dans les 30 premiers jours Coach Skip ne te convient pas, je te rembourse intégralement. Sans question, sans formulaire à remplir.",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Le risque est sur moi, pas sur toi." })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "06 — À propos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl", children: [
        "Pourquoi je sors Coach Skip",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "et pourquoi maintenant." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Je m'appelle ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Gaspard" }),
          ". Ingénieur du numérique de formation, et je tracke mes calories tous les jours depuis 5 ans. Pas par obsession mais par méthode."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Pendant ces 5 ans, j'ai construit mes propres outils pour gérer ma nutrition en tant que sportif de haut niveau :",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Champion de France de Développé couché, vice-champion d'Europe et double vice-champion de France de Force Athlétique." }),
          " ",
          "Tableaux d'ajustement quotidien, scripts d'estimation de macros, prompts qui me sortaient un plan repas à partir de mon frigo. Ça marchait bien pour moi. Au point où des gens autour de moi m'ont demandé « comment tu fais »."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Coach Skip, c'est ça. Industrialisé, accessible, mis dans les mains de n'importe qui." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "En parallèle, j'ai monté",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Le Sportif Gourmand" }),
          ", une marque de pâtisseries protéinées, et",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Skip Le Sportif Gourmand" }),
          ", un compte de contenu nutrition/sport. J'évolue dans cet écosystème tous les jours. Coach Skip n'est pas un side-project lancé sur un coup de tête — c'est un réel outil que j'utilise au quotidien."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-accent/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "Photo · Gaspard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl font-extrabold italic text-foreground/20", children: "GS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fondateur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Coach Skip" })
      ] })
    ] }) })
  ] }) }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const faqs = [
  {
    q: "19€/mois c'est cher pour une appli.",
    a: "Tu compares à MyFitnessPal (10€/mois) ou Yazio (5€/mois). Sauf que ces apps ne te donnent pas quoi faire, elles enregistrent simplement ce que tu fais. Coach Skip te pilote comme un coach humain le ferait. Un vrai coach nutritionnel, c'est 80 à 200€/mois en France. À 19€/mois à vie, tu paies l'équivalent d'un mois de MyFitnessPal + Yazio + 1 café pour quelque chose qui n'existe pas ailleurs."
  },
  {
    q: "MyFitnessPal / Cal AI font déjà ça, non ?",
    a: "Non. Ces apps tracent ce que tu manges, c'est tout. Tu dois encore décider quoi manger, ajuster ton plan quand tu dérives, gérer les écarts. Coach Skip fait l'inverse : il te dit quoi faire, il s'adapte tout seul, il intègre tes restos via photo et peut même te conseiller en amont si tu lui envoies le menu. C'est l'écart entre une calculatrice et un coach."
  },
  {
    q: "Je préfère un vrai coach humain.",
    a: "C'est valable. Et un bon coach humain reste mieux qu'une IA pour certaines personnes (notamment ceux qui ont besoin d'un contact humain pour rester motivés). La vraie question : tu peux te permettre un coach humain à 150€/mois, tous les mois ? Si oui, prends-en un. Si non, Coach Skip te donne 80% de ce qu'un coach apporte, à 5x moins cher, dispo 24/7."
  },
  {
    q: "Et si je décroche au bout de 2 semaines ?",
    a: "C'est exactement le moment où la fonction adaptation prend tout son sens. Tu décroches un jour, Coach Skip ne te pénalise pas, il rééquilibre. Pas de culpabilité, pas de remise à zéro. Et si malgré tout ça ne te convient pas, tu résilies en 2 clics ou tu actives la garantie 30 jours et je te rembourse."
  },
  {
    q: "Je veux voir le produit avant de payer.",
    a: "Je comprends. C'est exactement pour ça que j'ai créé le statut Founding Member : tu rentres dans la bêta privée, tu peux résilier à tout moment via Stripe, et la garantie 30 jours satisfait ou remboursé te couvre intégralement. Le risque est sur moi, pas sur toi."
  }
];
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "07 — FAQ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
      "Tu as forcément des questions.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Voici les réponses aux 5 qui reviennent." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-12 w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "border-b border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-6 text-left font-display text-lg font-bold text-foreground hover:no-underline sm:text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-primary", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-6 pl-9 text-base leading-relaxed text-muted-foreground", children: f.a })
        ]
      },
      i
    )) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-primary", children: "08 — Dernière chance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
      "50 Founding Members.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Le tarif ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "à vie." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Le risque ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "sur moi." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: [
      "19€/mois à vie. Onboarding 1-on-1. Accès DM direct. Garantie 30 jours satisfait ou remboursé.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Le tarif Founding Member ne reviendra jamais une fois les 50 places vendues." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#founding-member",
          className: "inline-flex items-center rounded-full bg-primary px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] sm:text-[13px]",
          children: "→ Devenir Founding Member — 19€/mois à vie"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: "Moins de 50 places restantes." })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Comparison, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoundingOffer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
