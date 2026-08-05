import { createFileRoute } from "@tanstack/react-router";
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
  Star,
  Video,
  Check,
  MessageCircle,
} from "lucide-react";

import logo from "@/assets/logo-visavie.png.asset.json";
import heroImg from "@/assets/hero-pose.jpg";
import real1 from "@/assets/real-1.jpg";
import real2 from "@/assets/real-2.jpg";
import real3 from "@/assets/real-3.jpg";
import { Counter } from "@/components/Counter";
import { FaqItem } from "@/components/FaqItem";
import { LeadMagnet } from "@/components/LeadMagnet";


const CALENDLY = "https://calendly.com/visaviefermeture/visio-devis";
const WHATSAPP = "https://wa.me/33652142690?text=Bonjour%2C%20je%20souhaite%20un%20devis%20gratuit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISAVIE Fermeture — Menuisier poseur Hérault & Gard" },
      {
        name: "description",
        content:
          "Pose de menuiseries alu, bois et PVC dans l'Hérault et le Gard : portes, fenêtres, volets roulants, portails et clôtures. Devis gratuit, réponse sous 48 h.",
      },
      { property: "og:title", content: "VISAVIE Fermeture — Menuisier poseur Hérault & Gard" },
      {
        property: "og:description",
        content:
          "Votre artisan menuisier poseur près de chez vous. Neuf et rénovation, particuliers et professionnels. Devis gratuit sous 48 h.",
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

const temoignages = [
  {
    text: "Réactivité et efficacité au rendez-vous.",
    author: "Client particulier — Montpellier",
  },
  {
    text: "Qualité tant pour les relations humaines que pour le travail effectué.",
    author: "Entreprise de TP — Nîmes",
  },
  { text: "Je recommande à 100/100.", author: "Client particulier — Lunel" },
];

const faq = [
  {
    question: "Vous intervenez uniquement à Montpellier ?",
    answer:
      "Nous sommes disponibles dans le département de l'Hérault et dans le Gard jusqu'à Arles, Nîmes.",
  },
  {
    question: "Travaillez-vous le PVC et l'aluminium ?",
    answer:
      "Nous assurons la pose d'une large gamme de menuiseries PVC et aluminium, adaptées aussi bien aux projets de rénovation qu'aux exigences thermiques et esthétiques actuelles.",
  },
  {
    question: "Assurez-vous la pose complète ?",
    answer:
      "Absolument, nous assurons la pose complète de vos menuiseries, dans le respect des normes et avec un souci constant de qualité et de finition.",
  },
];

function CtaButton({
  children,
  className = "",
  href = CALENDLY,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header sticky */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#hero" className="flex min-w-0 items-center gap-2">
            <img
              src={logo.url}
              alt="Logo VISAVIE Fermeture"
              width={44}
              height={44}
              className="size-10 shrink-0 object-contain"
            />
            <span className="truncate font-display text-sm tracking-tight text-primary sm:text-base">
              VISAVIE <span className="text-secondary">Fermeture</span>
            </span>
          </a>
          <CtaButton className="shrink-0 px-4 py-2.5 text-[0.7rem] sm:px-6 sm:text-sm">
            Devis gratuit
          </CtaButton>
        </div>
      </header>

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
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <MapPin className="size-3.5" aria-hidden="true" /> Hérault & Gard
          </p>
          <h1 className="text-4xl leading-[1.05] text-secondary-foreground sm:text-6xl">
            Vous avez de grands projets ?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral sm:text-xl">
            Votre artisan près de chez vous le réalise.
          </p>
          <div className="mt-10">
            <CtaButton className="w-full px-8 py-5 text-base sm:w-auto sm:text-xl">
              Demandez votre DEVIS gratuit
            </CtaButton>
            <p className="mt-4 text-sm text-neutral">
              Rendez-vous visio de 15 min — sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl">
          Particuliers <span className="text-primary">&</span> professionnels
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Entreprises de TP, menuisiers, syndics, architectes ou propriétaires : nous posons vos
          ouvrages avec la même exigence de finition.
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

      {/* 2. PREUVES SOCIALES */}
      <section className="bg-muted/60 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl sm:text-3xl">Ils nous font confiance</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {temoignages.map((t) => (
              <figure
                key={t.author}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-1" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[1.02rem] leading-relaxed text-foreground">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">{t.author}</figcaption>
              </figure>
            ))}
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
              value: <Counter to={100} prefix="+" />,
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
          <CtaButton className="px-7 py-4 text-sm">Réserver ma visio</CtaButton>
        </div>
      </section>

      {/* Réalisations */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl text-secondary-foreground sm:text-3xl">
            Nos <span className="text-gold">réalisations</span>
          </h2>
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

      {/* 4. OBJECTIONS + FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
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

      {/* 5. CTA FINAL */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl">Donnons vie à votre projet</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Réservez un rendez-vous visio de démonstration : nous étudions ensemble vos ouvertures,
          vos contraintes et vous repartez avec un devis gratuit, clair et détaillé.
        </p>
        <div className="mt-9">
          <CtaButton className="w-full px-8 py-5 text-base sm:w-auto sm:text-xl">
            <Video className="size-5" aria-hidden="true" />
            Contactez-nous !
          </CtaButton>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <a href="tel:+33652142690" className="inline-flex items-center gap-2 hover:text-primary">
            <Phone className="size-4 text-primary" aria-hidden="true" /> 06 52 14 26 90
          </a>
          <a
            href="mailto:visaviefermeture@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Mail className="size-4 text-primary" aria-hidden="true" /> visaviefermeture@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/50 py-10 text-center">
        <img
          src={logo.url}
          alt="VISAVIE Fermeture"
          width={64}
          height={64}
          loading="lazy"
          className="mx-auto size-14 object-contain"
        />
        <p className="mt-3 font-display text-sm text-primary">VISAVIE Fermeture</p>
        <p className="mt-1 text-sm text-muted-foreground">Magny Fomat Michel — Menuisier poseur</p>
        <p className="mt-1 text-xs text-muted-foreground">Hérault & Gard — Neuf et rénovation</p>
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
