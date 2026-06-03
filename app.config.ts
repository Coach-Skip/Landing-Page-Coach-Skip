import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  server: {
    prerender: {
      routes: ["/"], // Prerendre uniquement la page d'accueil
      // Pour toutes les routes, tu peux utiliser un crawler plus tard
    },
  },
});