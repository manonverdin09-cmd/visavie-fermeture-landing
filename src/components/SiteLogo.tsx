import { cn } from "@/lib/utils";

export function SiteLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn("relative inline-block h-11 w-[11.5rem] shrink-0", className)}
      aria-label="VISAVIE Fermeture"
    >
      <span className="absolute top-1 left-0 font-display text-[1.45rem] leading-none text-primary uppercase">
        VISAVIE
      </span>
      <span className="font-signature absolute right-0 bottom-0 rotate-[-5deg] text-[1.65rem] leading-none text-secondary">
        Fermeture
      </span>
    </span>
  );
}