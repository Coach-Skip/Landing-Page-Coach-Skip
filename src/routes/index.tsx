import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach Skip — Le coach nutritionnel IA qui te pilote" },
      {
        name: "description",
        content:
          "IA personnelle qui génère ton plan nutrition, l'adapte chaque jour à ta vraie vie, 5x moins cher qu'un coach. Founding Member 19€/mois à vie.",
      },
      { property: "og:title", content: "Coach Skip — Le coach nutritionnel IA qui te pilote" },
      {
        property: "og:description",
        content:
          "IA personnelle qui génère ton plan nutrition, l'adapte chaque jour à ta vraie vie, 5x moins cher qu'un coach.",
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
      </main>
      <SiteFooter />
    </div>
  );
}
