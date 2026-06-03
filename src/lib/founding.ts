// Source de vérité unique pour le compteur Founding Member.
// Mettre à jour PLACES_TAKEN à chaque signature Stripe (incrémenter de 1) puis redéployer.
// Quand PLACES_TAKEN === 0 : on affiche un message d'ouverture (pas un "0/50" qui sape la preuve sociale).
export const PLACES_TOTAL = 50;
export const PLACES_TAKEN = 0;

export const placesRemaining = () => PLACES_TOTAL - PLACES_TAKEN;

// Phrase courte affichée sous chaque CTA / dans le badge scarcité.
export const scarcityLine = () => {
  if (PLACES_TAKEN === 0) {
    return `Ouverture : ${PLACES_TOTAL} places fondateurs au tarif bloqué à vie.`;
  }
  return `${PLACES_TAKEN}/${PLACES_TOTAL} places prises · ${placesRemaining()} restantes.`;
};
