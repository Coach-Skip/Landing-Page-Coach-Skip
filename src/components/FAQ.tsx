import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Pourquoi un prix si bas ?",
    a: "Parce que c'est une cohorte pilote. J'ai besoin de retours honnêtes pour améliorer le programme. En échange, tu as un tarif réduit et un suivi direct avec moi.",
  },
  {
    q: "Je ne suis pas sportif, c'est pour moi ?",
    a: "Si tu veux manger mieux sans te priver et que tu acceptes de noter tes repas chaque jour, oui.",
  },
  {
    q: "Et si ça ne marche pas pour moi ?",
    a: "Tu peux arrêter à tout moment. Je suis chaque personne de près : si le programme ne te convient pas, dis-le-moi et on en parle.",
  },
  {
    q: "Je veux voir l'app avant de payer.",
    a: "On en parle 15 minutes avant que tu t'engages : je te montre l'app et je te dis honnêtement si le programme est fait pour toi.",
  },
  {
    q: "Tu es diététicien ?",
    a: "Non, et je ne suis pas médecin. C'est un accompagnement en nutrition sportive. Si tu as une pathologie, parle-en à ton médecin avant de commencer.",
  },
  {
    q: "Et mes données ? (photos de repas, habitudes alimentaires)",
    a: "Tes données alimentaires et tes photos restent les tiennes, hébergées sur Supabase (UE, conforme RGPD). Je m'en sers uniquement pour faire tourner ton coaching, jamais pour entraîner un modèle public ni revendre quoi que ce soit. Tu peux exporter ou supprimer ton compte à tout moment, et avec lui l'intégralité de tes données.",
  },
  {
    q: "Et si je décroche au bout de 2 semaines ?",
    a: "Ça arrive à tout le monde. Tu décroches un jour, tu reprends le lendemain : le plan se rééquilibre, sans culpabilité ni remise à zéro. Et comme je suis ton avancée chaque semaine, je te relance si je te vois disparaître.",
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
