import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const projectTypes = [
  "Particulier - fenêtres et portes",
  "Particulier - portail et clôture",
  "Professionnel - sous-traitance de pose",
  "Dépannage porte automatique",
  "Autre",
] as const;

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Votre nom est requis").max(100, "Nom trop long"),
  phone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone invalide")
    .max(30, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s().-]{6,30}$/, "Numéro de téléphone invalide"),
  email: z.union([z.literal(""), z.string().trim().email("Adresse email invalide").max(255)]),
  projectType: z.enum(projectTypes, { required_error: "Sélectionnez votre type de projet" }),
  message: z.string().trim().max(2000, "Message trop long"),
  consent: z.literal(true, { errorMap: () => ({ message: "Votre accord est nécessaire" }) }),
});

const initialForm = { name: "", phone: "", email: "", projectType: "", message: "", consent: false };

export function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    const parsed = quoteSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Formulaire invalide");
      return;
    }

    setLoading(true);
    const { error: dbError } = await supabase.from("quote_requests").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      project_type: parsed.data.projectType,
      message: parsed.data.message || null,
      consent: parsed.data.consent,
    });
    setLoading(false);

    if (dbError) {
      setError("Une erreur est survenue. Merci de réessayer dans un instant.");
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="py-10 text-center" role="status">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl text-foreground">
          Merci, votre demande est bien reçue. Michel vous rappelle sous 48 h.
        </p>
      </div>
    );
  }

  const fieldClass = "h-12 bg-background text-foreground";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-foreground">
          Nom <span className="text-primary">*</span>
          <Input
            name="name"
            autoComplete="name"
            maxLength={100}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className={fieldClass}
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-foreground">
          Téléphone <span className="text-primary">*</span>
          <Input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-bold text-foreground">
        Email
        <Input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={255}
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          className={fieldClass}
        />
      </label>
      <label className="block space-y-2 text-sm font-bold text-foreground">
        Type de projet <span className="text-primary">*</span>
        <select
          name="projectType"
          value={form.projectType}
          onChange={(event) => setForm({ ...form, projectType: event.target.value })}
          className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="">Sélectionnez votre projet</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="block space-y-2 text-sm font-bold text-foreground">
        Message
        <Textarea
          name="message"
          rows={5}
          maxLength={2000}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="bg-background text-foreground"
        />
      </label>
      <div className="flex items-start gap-3">
        <Checkbox
          id="quote-consent"
          checked={form.consent}
          onCheckedChange={(checked) => setForm({ ...form, consent: checked === true })}
          aria-required="true"
          className="mt-0.5"
        />
        <label htmlFor="quote-consent" className="text-sm leading-relaxed text-foreground">
          J'accepte d'être recontacté au sujet de mon projet <span className="text-primary">*</span>
        </label>
      </div>
      {error && <p role="alert" className="text-sm font-bold text-primary">{error}</p>}
      <Button type="submit" disabled={loading} className="cta-btn h-auto w-full px-6 py-4 text-sm">
        {loading ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
        Demandez votre devis gratuit
      </Button>
    </form>
  );
}