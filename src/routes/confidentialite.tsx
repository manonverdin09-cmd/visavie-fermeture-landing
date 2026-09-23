import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteLogo } from "@/components/SiteLogo";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | VISAVIE Fermeture" },
      { name: "description", content: "Politique de confidentialité et traitement des données personnelles par VISAVIE Fermeture." },
      { property: "og:title", content: "Politique de confidentialité | VISAVIE Fermeture" },
      { property: "og:description", content: "Découvrez comment VISAVIE Fermeture protège vos données personnelles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
        <h1 className="text-3xl sm:text-4xl">Politique de confidentialité</h1>
        <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
          <section><h2 className="text-xl text-foreground">Données collectées</h2><p className="mt-3">VISAVIE Fermeture peut collecter votre nom, prénom, numéro de téléphone, adresse email, type de projet et message lorsque vous utilisez les formulaires du site.</p></section>
          <section><h2 className="text-xl text-foreground">Finalités et base légale</h2><p className="mt-3">Ces données servent uniquement à répondre aux demandes de devis et à envoyer le guide gratuit. Leur traitement repose sur votre consentement et sur les mesures précontractuelles nécessaires pour étudier votre projet.</p></section>
          <section><h2 className="text-xl text-foreground">Durée de conservation</h2><p className="mt-3">Vos données sont conservées pendant trois ans après le dernier contact.</p></section>
          <section><h2 className="text-xl text-foreground">Destinataires et hébergement</h2><p className="mt-3">VISAVIE Fermeture est le seul destinataire de vos données. Le site est hébergé par Netlify, Inc. Vos demandes sont enregistrées chez notre prestataire de base de données Lovable Cloud et dans notre outil de gestion de la relation client HubSpot, sur son instance européenne. Ces prestataires agissent uniquement pour notre compte.</p></section>
          <section><h2 className="text-xl text-foreground">Vos droits</h2><p className="mt-3">Vous pouvez exercer vos droits d'accès, de rectification, d'effacement et d'opposition en écrivant à <a className="text-primary hover:underline" href="mailto:visaviefermeture@gmail.com">visaviefermeture@gmail.com</a>. Vous pouvez également introduire une réclamation auprès de la CNIL.</p></section>
        </div>
      </article>
    </main>
  );
}
