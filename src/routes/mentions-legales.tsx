import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteLogo } from "@/components/SiteLogo";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | VISAVIE Fermeture" },
      { name: "description", content: "Mentions légales de VISAVIE Fermeture, menuisier poseur dans l'Hérault et le Gard." },
      { property: "og:title", content: "Mentions légales | VISAVIE Fermeture" },
      { property: "og:description", content: "Informations légales de VISAVIE Fermeture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LegalNotices,
});

function LegalNotices() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border px-5 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link to="/" aria-label="Accueil"><SiteLogo /></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            <ArrowLeft className="size-4" aria-hidden="true" /> Accueil
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl">Mentions légales</h1>
        <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
          <section><h2 className="text-xl text-foreground">Éditeur du site</h2><p className="mt-3">Magny Fomat Michel, entrepreneur individuel<br />22 Impasse Joseph Fulcrand, 34070 Montpellier<br />SIRET : 94836674500016<br />Téléphone : <a className="text-primary hover:underline" href="tel:+33652142690">06 52 14 26 90</a><br />Email : <a className="text-primary hover:underline" href="mailto:visaviefermeture@gmail.com">visaviefermeture@gmail.com</a></p></section>
          <section><h2 className="text-xl text-foreground">Directeur de la publication</h2><p className="mt-3">Magny Fomat Michel.</p></section>
          <section><h2 className="text-xl text-foreground">Assurance professionnelle</h2><p className="mt-3">Assurance décennale AMI 3F Assurances, contrat n° SV75020721/12745. Couverture : France métropolitaine.</p></section>
          <section><h2 className="text-xl text-foreground">TVA</h2><p className="mt-3">TVA non applicable, article 293 B du Code général des impôts.</p></section>
          <section><h2 className="text-xl text-foreground">Hébergement</h2><p className="mt-3">Lovable Labs Incorporated / Lovable Labs Sweden AB<br />Regeringsgatan 25, 111 53 Stockholm, Suède<br />Email : <a className="text-primary hover:underline" href="mailto:support@lovable.dev">support@lovable.dev</a></p></section>
        </div>
      </article>
    </main>
  );
}
