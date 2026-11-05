// Source de vérité unique de l'offre en cours : la cohorte pilote.
// Pour changer le prix, le nombre de places ou le lien, ne modifier que ce fichier.
export const PILOT_PLACES = 5;
export const PILOT_PRICE = "97 €";
export const PILOT_DURATION = "12 semaines";

export const PILOT_CTA_LABEL = "Candidater pour une place pilote";

// Les boutons mènent au formulaire de candidature, en bas de la page
// (src/components/Candidature.tsx). Le paiement (lien Stripe à 97 €) se fait
// seulement après l'appel de 15 minutes. L'ancien lien à 19 €/mois a été retiré.
export const PILOT_CTA_URL = "#candidature";

// Nom du formulaire Netlify Forms. Il doit rester identique dans
// public/__forms.html, sinon Netlify ne reçoit pas les candidatures.
export const PILOT_FORM_NAME = "candidature-pilote";
