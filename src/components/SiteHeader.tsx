import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/SiteLogo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#engagements", label: "Engagements" },
  { href: "#ouvrages", label: "Ouvrages" },
  { href: "#guide", label: "Guide gratuit" },
  { href: "#faq", label: "FAQ" },
  { href: "#devis", label: "Devis" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("services");

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5">
        <a href="#hero" className="mr-auto flex shrink-0 items-center" aria-label="Retour en haut">
          <SiteLogo className="scale-90 origin-left sm:scale-100" />
        </a>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "location" : undefined}
              className="border-b-2 border-transparent py-2 text-sm font-bold text-foreground transition-colors hover:text-primary aria-[current=location]:border-primary aria-[current=location]:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#devis"
          className="cta-btn shrink-0 px-3 py-2.5 text-[0.65rem] sm:px-5 sm:text-xs"
        >
          Devis gratuit
        </a>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="xl:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[4.1rem] z-50 h-[calc(100dvh-4.1rem)] bg-background xl:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-7 px-6" aria-label="Menu mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
                className="border-b-2 border-transparent pb-1 font-display text-xl text-foreground aria-[current=location]:border-primary aria-[current=location]:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}