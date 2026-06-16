import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "MyFitnessPal / Cal AI font déjà ça, non ?",
    a: "Non. Ces apps tracent ce que tu manges, c'est tout. Tu dois encore décider quoi manger, ajuster ton plan quand tu dérives, gérer les écarts. Coach Skip fait l'inverse : il te dit quoi faire, il s'adapte tout seul, il intègre tes restos via photo et peut même te conseiller en amont si tu lui envoies le menu. C'est l'écart entre une calculatrice et un coach.",
  },
  {
    q: "Je préfère un coach humain.",
    a: "C'est valable. Et un bon coach humain reste mieux qu'une IA pour certaines personnes (notamment ceux qui ont besoin d'un contact humain pour rester motivés). La vraie question : tu peux te permettre un coach humain à 150€/mois, tous les mois ? Si oui, prends-en un. Si non, Coach Skip te donne 80% de ce qu'un coach apporte, dispo 24/7, à un prix qui tient.",
  },
  {
    q: "19€/mois c'est cher pour une appli.",
    a: "Tu compares à MyFitnessPal (10€/mois) ou Yazio (5€/mois). Sauf que ces apps ne te disent pas quoi faire, elles enregistrent simplement ce que tu fais. Coach Skip te pilote comme un coach humain le ferait. Un coach nutritionnel humain, c'est 80 à 200€/mois en France. À 19€/mois à vie, tu paies l'équivalent d'un mois de MyFitnessPal + Yazio + 1 café pour quelque chose qui n'existe pas ailleurs.",
  },
  {
    q: "Et mes données ? (photos de repas, habitudes alimentaires)",
    a: "Tes données alimentaires et tes photos restent les tiennes, hébergées sur Supabase (UE, conforme RGPD). Je m'en sers uniquement pour faire tourner ton coaching, jamais pour entraîner un modèle public ni revendre quoi que ce soit. Tu peux exporter ou supprimer ton compte à tout moment, et avec lui l'intégralité de tes données.",
  },
  {
    q: "Et si je décroche au bout de 2 semaines ?",
    a: "C'est exactement le moment où la fonction adaptation prend tout son sens. Tu décroches un jour, Coach Skip ne te pénalise pas, il rééquilibre. Pas de culpabilité, pas de remise à zéro. Et si malgré tout ça ne te convient pas, tu résilies en 2 clics ou tu actives la garantie 30 jours et je te rembourse.",
  },
  {
    q: "Je veux voir le produit avant de payer.",
    a: "Je comprends. C'est exactement pour ça que j'ai créé le statut Founding Member : tu rentres en accès anticipé, tu peux résilier à tout moment via Stripe, et la garantie 30 jours satisfait ou remboursé te couvre intégralement. Le risque est sur moi, pas sur toi.",
  },
];

export function FAQ() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          07 - FAQ
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Tu as forcément des questions.{" "}
          <span className="text-primary">Voici les réponses aux objections qui reviennent.</span>
        </h2>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-bold text-foreground hover:no-underline sm:text-xl">
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-primary">
                    0{i + 1}
                  </span>
                  <span>{f.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-9 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
