import { useState, type FormEvent } from "react";
import {
  PILOT_DURATION,
  PILOT_FORM_NAME,
  PILOT_PLACES,
  PILOT_PRICE,
} from "@/lib/offer";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-accent/30 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
const labelClass = "block text-sm font-semibold text-foreground";

// Envoi vers Netlify Forms. Le formulaire est déclaré dans public/__forms.html
// pour que Netlify le détecte au déploiement (le site est rendu côté client).
async function submitToNetlify(form: HTMLFormElement) {
  const data = new URLSearchParams();
  data.append("form-name", PILOT_FORM_NAME);
  new FormData(form).forEach((value, key) => {
    data.append(key, String(value));
  });
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data.toString(),
  });
  if (!res.ok) throw new Error(`Envoi refusé (${res.status})`);
}

export function Candidature() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submitToNetlify(form);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="candidature" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          09 - Candidature
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Candidater pour une place pilote.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Quelques questions, deux minutes. Je lis chaque candidature moi-même,
          puis on cale un appel de 15 minutes avant tout paiement.{" "}
          <span className="text-foreground">
            {PILOT_PRICE} pour les {PILOT_DURATION}, {PILOT_PLACES} places.
          </span>
        </p>

        {status === "sent" ? (
          <div
            role="status"
            className="mt-12 rounded-2xl border-2 border-primary/40 p-6 sm:p-8"
            style={{ backgroundColor: "color-mix(in oklab, var(--color-primary) 8%, transparent)" }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Merci, c'est reçu.</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Je lis ta candidature et je te réponds par email pour caler un
              appel de 15 minutes.
            </p>
          </div>
        ) : (
          <form
            name={PILOT_FORM_NAME}
            method="POST"
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            {/* Piège à robots : invisible pour les humains, rejeté par Netlify s'il est rempli. */}
            <p className="hidden" aria-hidden>
              <label>
                Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className={labelClass}>
                Ton prénom
                <input name="prenom" type="text" required autoComplete="given-name" className={fieldClass} />
              </label>
              <label className={labelClass}>
                Ton âge
                <input name="age" type="number" required min={18} max={99} inputMode="numeric" className={fieldClass} />
              </label>
            </div>

            <label className={labelClass}>
              Ton email
              <input name="email" type="email" required autoComplete="email" className={fieldClass} />
            </label>

            <label className={labelClass}>
              Ton objectif principal, en une phrase
              <textarea name="objectif" required rows={2} className={fieldClass} />
            </label>

            <label className={labelClass}>
              Ce qui t'a empêché de le tenir jusqu'ici
              <textarea name="blocage" required rows={3} className={fieldClass} />
            </label>

            <label className={labelClass}>
              Combien de temps par jour peux-tu consacrer à noter tes repas ?
              <select name="temps" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Choisis une réponse
                </option>
                <option value="moins-de-5-min">Moins de 5 minutes</option>
                <option value="5-10-min">5 à 10 minutes</option>
                <option value="plus-de-10-min">Plus de 10 minutes</option>
              </select>
            </label>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Programme réservé aux plus de 18 ans. Tes réponses servent
              uniquement à étudier ta candidature et à te recontacter. Elles ne
              sont ni revendues ni partagées, et tu peux demander leur
              suppression à tout moment.
            </p>

            {status === "error" && (
              <p role="alert" className="rounded-xl border border-destructive/50 px-4 py-3 text-sm text-destructive">
                L'envoi n'a pas fonctionné. Réessaie dans un instant, ou écris-moi
                sur Instagram @skip.sportif.gourmand.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center rounded-full bg-primary px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 sm:text-[13px]"
            >
              {status === "sending" ? "Envoi en cours…" : "→ Envoyer ma candidature"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
