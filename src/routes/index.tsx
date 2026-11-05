import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Comparison } from "@/components/Comparison";
import { FoundingOffer } from "@/components/FoundingOffer";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Candidature } from "@/components/Candidature";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach Skip : cohorte pilote de coaching nutrition" },
      {
        name: "description",
        content:
          "Cohorte pilote de 5 places : 12 semaines de coaching nutrition pour sportifs gourmands, avec un plan de repas ajusté chaque semaine. 97 €.",
      },
      { property: "og:title", content: "Coach Skip : cohorte pilote de coaching nutrition" },
      {
        property: "og:description",
        content:
          "5 places, 12 semaines, 97 €. Manger mieux sans renoncer aux restos, aux apéros et au plaisir.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <FoundingOffer />
        <About />
        <FAQ />
        <FinalCTA />
        <Candidature />
      </main>
      <SiteFooter />
    </div>
  );
}
