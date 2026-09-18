import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Hammer,
  DoorOpen,
  Blinds,
  Fence,
  Building2,
  Check,
  MessageCircle,
  UserRound,
  FileText,
  BadgeCheck,
  Instagram,
} from "lucide-react";

import heroImg from "@/assets/hero-menuiserie-sans-marque.jpg";
import real1 from "@/assets/real-1.jpg";
import real2 from "@/assets/real-2.jpg";
import real3 from "@/assets/real-3.jpg";
import { Counter } from "@/components/Counter";
import { FaqItem } from "@/components/FaqItem";
import { LeadMagnet } from "@/components/LeadMagnet";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLogo } from "@/components/SiteLogo";

const WHATSAPP = "https://wa.me/33652142690?text=Bonjour%2C%20je%20souhaite%20un%20devis%20gratuit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISAVIE Fermeture, menuisier poseur en Hérault et Gard" },
      {
        name: "description",
        content:
          "Pose de fenêtres, portes, portails et volets en alu, PVC et bois. Neuf et rénovation, particuliers et professionnels. Devis gratuit sous 48 h.",
      },
      { property: "og:title", content: "VISAVIE Fermeture, menuisier poseur en Hérault et Gard" },
      {
        property: "og:description",
        content:
          "Vous avez les menuiseries, il vous manque le poseur. Michel, menuisier poseur indépendant en Hérault et Gard. Devis gratuit sous 48 h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: DoorOpen, label: "Portes & fenêtres" },
  { icon: Hammer, label: "Alu • Bois • PVC" },
  { icon: Fence, label: "Portillons & clôtures" },
  { icon: Blinds, label: "Volets roulants" },
  { icon: Building2, label: "Neuf & rénovation" },
  { icon: ShieldCheck, label: "Dépannage portes automatiques" },
];

const engagements = [
  {
    icon: UserRound,
    title: "Un interlocuteur unique",
    text: "Je vous suis du premier appel à la pose.",
  },
  {
    icon: FileText,
    title: "Devis gratuit et détaillé",
    text: "Chiffré poste par poste, sans surprise.",
  },
  {
    icon: ShieldCheck,
    title: "Pose conforme aux normes",
    text: "DTU respectés, finitions soignées.",
  },
  {
    icon: BadgeCheck,
    title: "Assurance décennale",
    text: "Contrat AMI 3F Assurances. Attestation et attestation de vigilance URSSAF sur demande.",
  },
];

const faq = [
  {
    question: "Vous intervenez uniquement à Montpellier ?",
    answer:
      "J'interviens dans tout l'Hérault et dans le Gard jusqu'à Nîmes et Arles, en passant par Castelnau-le-Lez, Lunel, Sète et Alès.",
  },
  {
    question: "Travaillez-vous le PVC et l'aluminium ?",
    answer:
      "J'assure la pose d'une large gamme de menuiseries PVC et aluminium, adaptées aussi bien aux projets de rénovation qu'aux exigences thermiques et esthétiques actuelles.",
  },
  {
    question: "Assurez-vous la pose complète ?",
    answer:
      "Oui, j'assure la pose complète de vos menuiseries, dans le respect des normes et avec un souci constant de qualité et de finition.",
  },
  {
    question: "Travaillez-vous en sous-traitance pour d'autres entreprises ?",
    answer:
      "Oui. J'interviens en renfort de pose pour les menuisiers, les entreprises de TP et les constructeurs, sur un chantier ponctuel comme sur une série. Attestation de garantie décennale et attestation de vigilance URSSAF fournies sur simple demande, avant le premier chantier.",
  },
];

function CtaButton({
  children,
  className = "",
  href = "#devis",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a href={href} className={`cta-btn hover:-translate-y-0.5 hover:brightness-110 ${className}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* 1. HERO */}
      <section id="hero" className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Menuisier poseur VISAVIE Fermeture installant une fenêtre aluminium"
          width={1600}
          height={1200}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
        <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <MapPin className="size-3.5" aria-hidden="true" /> Menuisier poseur · Hérault & Gard
          </p>
          <p className="mb-2 font-display text-lg text-gold sm:text-2xl">
            Vous avez les menuiseries.
          </p>
          <h1 className="text-[2rem] leading-[1.1] text-balance text-secondary-foreground sm:text-5xl lg:text-6xl">
            Il vous manque le poseur.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-neutral sm:mt-6 sm:text-xl">
            Michel, menuisier poseur indépendant en Hérault et Gard. Alu, PVC, bois. Neuf et
            rénovation, pour les particuliers comme pour les professionnels.
          </p>
          <div className="mt-8 sm:mt-10">
            <CtaButton className="w-full px-8 py-5 text-base sm:w-auto sm:text-xl">
              Demander un devis gratuit
            </CtaButton>
            <p className="mt-4 text-sm text-neutral">
              Réponse sous 48 h, devis gratuit et sans engagement.
            </p>
            <p className="mt-5">
              <a
                href="#devis"
                onClick={() => window.dispatchEvent(new CustomEvent("visavie:prefill-pro"))}
                className="text-sm text-gold underline underline-offset-4 hover:text-gold/80"
              >
                Vous êtes un professionnel ? Parlons sous-traitance
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl">
          Particuliers <span className="text-primary">&</span> professionnels
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Entreprises de TP, menuisiers, syndics, architectes ou propriétaires : je pose vos
          ouvrages avec la même exigence de finition.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          J'interviens à Montpellier, Castelnau-le-Lez, Lunel, Sète, Nîmes, Alès et dans les
          communes alentour.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-6 text-center shadow-[var(--shadow-card)]"
            >
              <s.icon className="size-7 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <CtaButton className="px-7 py-4 text-sm">Parler de mon projet</CtaButton>
        </div>
      </section>

      {/* Engagements */}
      <section id="engagements" className="scroll-mt-20 bg-muted/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl sm:text-3xl">Nos engagements</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagements.map((engagement) => (
              <article
                key={engagement.title}
                className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <engagement.icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base text-foreground">{engagement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{engagement.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton className="px-7 py-4 text-sm">Parler de mon projet</CtaButton>
          </div>
        </div>
      </section>

      {/* 3. BÉNÉFICES */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl">Ce que vous y gagnez</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              icon: Clock,
              value: <Counter to={48} suffix=" H" />,
              title: "Réponse en moins de 48 h",
              desc: "Un interlocuteur unique, joignable, qui vous rappelle vraiment.",
            },
            {
              icon: Hammer,
              value: <Counter to={50} prefix="+" />,
              title: "projets réalisés",
              desc: "Chantiers neufs et rénovations livrés dans l'Hérault et le Gard.",
            },
            {
              icon: ShieldCheck,
              value: <Counter to={5} />,
              title: "ans d'expérience",
              desc: "Une pose conforme aux normes, soignée jusque dans les finitions.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]"
            >
              <b.icon className="mx-auto size-8 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-4xl text-primary">{b.value}</p>
              <p className="mt-1 font-display text-sm tracking-wide text-foreground uppercase">
                {b.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaButton className="px-7 py-4 text-sm">Demander mon devis</CtaButton>
        </div>
      </section>

      {/* Réalisations */}
      <section id="ouvrages" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl text-secondary-foreground sm:text-3xl">
            Les ouvrages que je pose
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral">
            Images d'illustration. Les photos des chantiers de Michel arrivent.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { src: real1, alt: "Baie coulissante aluminium noire posée sur une villa" },
              { src: real2, alt: "Porte d'entrée PVC blanche et volets roulants" },
              { src: real3, alt: "Portail et portillon aluminium gris anthracite" },
            ].map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-64 w-full rounded-xl object-cover sm:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet : guide gratuit */}
      <LeadMagnet />

      {/* 4. OBJECTIONS + FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 sm:py-20">
        <div className="space-y-4">
          {faq.map((f) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer} />
          ))}
        </div>
      </section>

      {/* Bandeau de réassurance */}
      <section className="bg-primary py-6">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center text-sm font-semibold text-primary-foreground">
          {[
            "Devis gratuit",
            "Réponse sous 48 h",
            "Intervention Hérault & Gard",
            "Pose conforme aux normes",
          ].map((r) => (
            <li key={r} className="inline-flex items-center gap-2">
              <Check className="size-4 text-gold" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Devis */}
      <section id="devis" className="scroll-mt-20 bg-muted/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl">Demandez votre devis gratuit</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Décrivez votre projet. Je vous réponds sous 48 h avec une première estimation claire et sans engagement.
            </p>
          </div>
          <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <QuoteForm />
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:+33652142690" className="cta-btn px-6 py-4 text-sm">
              <Phone className="size-4" aria-hidden="true" /> Appeler le 06 52 14 26 90
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-4 text-sm font-bold text-primary hover:bg-accent">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10 text-center">
        <SiteLogo className="mx-auto" />
        <p className="mt-1 text-sm text-muted-foreground">Magny Fomat Michel, menuisier poseur</p>
        <p className="mt-1 text-xs text-muted-foreground">Hérault & Gard, neuf et rénovation</p>
        <p className="mt-3 text-xs text-muted-foreground">SIRET 94836674500016</p>
        <p className="mt-1 text-xs text-muted-foreground">Assuré AMI 3F Assurances, garantie décennale</p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-bold text-primary">
          <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:underline">Politique de confidentialité</Link>
          <a href="mailto:visaviefermeture@gmail.com" className="inline-flex items-center gap-1 hover:underline">
            <Mail className="size-3.5" aria-hidden="true" /> Écrire à Michel
          </a>
          <a
            href="https://www.instagram.com/visavie.fermeture/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Instagram className="size-3.5" aria-hidden="true" /> Instagram
          </a>
        </div>
      </footer>

      {/* WhatsApp flottant */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous écrire sur WhatsApp"
        className="fixed right-4 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[var(--shadow-card)] ring-2 ring-gold transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </div>
  );
}
