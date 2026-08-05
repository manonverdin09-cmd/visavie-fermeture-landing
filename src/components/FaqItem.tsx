import { useState } from "react";
import { Plus } from "lucide-react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left"
      >
        <span className="min-w-0 font-display text-base leading-snug text-foreground">
          {question}
        </span>
        <Plus
          className={`size-6 shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}
