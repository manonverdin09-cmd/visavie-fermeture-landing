import { useState } from "react";
import { BookOpen, Download, Check, Loader2 } from "lucide-react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

const GUIDE_URL = "/guide-menuiserie-visavie-fermeture.pdf";

const HUBSPOT_ENDPOINT =
  "https://api-eu1.hsforms.com/submissions/v3/integration/submit/149364873/1f4646c7-9d8e-4251-ba40-1b194b582c6a";

const leadSchema = z.object({
  lastName: z.string().trim().min(1, "Votre nom est requis").max(100, "Nom trop long"),
  firstName: z.string().trim().min(1, "Votre prénom est requis").max(100, "Prénom trop long"),
  email: z.string().trim().min(1, "Votre email est requis").email("Adresse email invalide").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone invalide")
    .max(30, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s().-]{6,30}$/, "Numéro de téléphone invalide"),
});

type LeadData = z.infer<typeof leadSchema>;

async function sendToHubspot(data: LeadData) {
  await fetch(HUBSPOT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: data.firstName },
        { objectTypeId: "0-1", name: "lastname", value: data.lastName },
        { objectTypeId: "0-1", name: "email", value: data.email },
        { objectTypeId: "0-1", name: "phone", value: data.phone },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "J'accepte d'être recontacté au sujet de mon projet",
        },
      },
    }),
  });
}

const points = [
  "Définir clairement votre besoin",
  "Choisir le bon matériau (PVC, alu, bois)",
  "Comparer les devis sans se tromper",
  "Vérifier garanties, délais et finitions",
];

export function LeadMagnet() {
  const [form, setForm] = useState({ lastName: "", firstName: "", email: "", phone: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from("leads").insert({
      last_name: parsed.data.lastName,
      first_name: parsed.data.firstName,
      phone: parsed.data.phone,
      source: "guide-menuiserie",
    });

    try {
      await sendToHubspot(parsed.data);
    } catch {
      // La demande est déjà enregistrée, on ne bloque pas le visiteur.
    }

    setLoading(false);
    if (dbError) {
      setError("Une erreur est survenue. Merci de réessayer dans un instant.");
      return;
    }
    setDone(true);
    window.open(GUIDE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="guide" className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <BookOpen className="size-3.5" aria-hidden="true" /> Guide gratuit
          </p>
          <h2 className="mt-5 text-2xl text-secondary-foreground sm:text-3xl">
            Les 10 points essentiels pour réussir votre projet de menuiserie
          </h2>
          <p className="mt-4 text-neutral">
            Avant de signer un devis : évitez les mauvaises surprises, faites les bons choix et
            investissez durablement.
          </p>
          <ul className="mt-6 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-neutral">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-7">
          {done ? (
            <div className="text-center">
              <Check className="mx-auto size-9 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-lg text-foreground">Merci {form.firstName} !</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Votre guide s'ouvre dans un nouvel onglet. Vous pouvez aussi le télécharger
                ci-dessous.
              </p>
              <a
                href={GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn mt-6 w-full px-6 py-4 text-sm hover:-translate-y-0.5 hover:brightness-110"
              >
                <Download className="size-4" aria-hidden="true" />
                Télécharger le guide (PDF)
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <p className="font-display text-base text-foreground">
                Recevez le guide immédiatement
              </p>
              <div className="space-y-3">
                <div>
                  <label htmlFor="lm-lastName" className="sr-only">
                    Nom
                  </label>
                  <input
                    id="lm-lastName"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Nom"
                    maxLength={100}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lm-firstName" className="sr-only">
                    Prénom
                  </label>
                  <input
                    id="lm-firstName"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="Prénom"
                    maxLength={100}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lm-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="lm-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lm-phone" className="sr-only">
                    Numéro de téléphone
                  </label>
                  <input
                    id="lm-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Numéro de téléphone"
                    maxLength={30}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              {error && (
                <p role="alert" className="text-sm font-semibold text-primary">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cta-btn w-full px-6 py-4 text-sm hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Download className="size-4" aria-hidden="true" />
                )}
                Recevoir mon guide gratuit
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
