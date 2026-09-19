"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import type { Certification } from "@/content/types";
import { markFlashcardSeen } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Le parent doit passer une `key` differente lorsque `domainId` change
 * (voir la page fiches) pour remonter ce composant plutot que de resynchroniser
 * son etat via un effet.
 */
export function FlashcardDeck({ cert, domainId }: { cert: Certification; domainId?: string }) {
  const baseTerms = domainId ? cert.glossary.filter((t) => t.domainId === domainId) : cert.glossary;

  const [order, setOrder] = React.useState(() => baseTerms.map((_, i) => i));
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  if (baseTerms.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
        Aucune fiche disponible pour ce domaine pour le moment.
      </p>
    );
  }

  const term = baseTerms[order[index]];

  function goTo(nextIndex: number) {
    setIndex(((nextIndex % order.length) + order.length) % order.length);
    setFlipped(false);
  }

  function handleFlip() {
    setFlipped((f) => {
      if (!f) markFlashcardSeen(cert.slug, term.term);
      return !f;
    });
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Fiche {index + 1} / {order.length}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 text-xs"
          onClick={() => {
            setOrder((current) => shuffle(current));
            setIndex(0);
            setFlipped(false);
          }}
        >
          <Shuffle className="size-3.5" />
          Melanger
        </Button>
      </div>

      <button
        type="button"
        onClick={handleFlip}
        aria-label="Retourner la fiche"
        className="group relative block h-56 w-full [perspective:1200px] sm:h-64"
      >
        <div
          className={cn(
            "relative h-full w-full rounded-xl border border-border shadow-sm transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]",
          )}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-card p-6 [backface-visibility:hidden]">
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Terme
            </span>
            <p className="font-heading text-xl font-semibold sm:text-2xl">{term.term}</p>
            <span className="mt-2 text-xs text-muted-foreground">Touchez pour voir la definition</span>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-primary p-6 text-primary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">
              Definition
            </span>
            <p className="text-center font-reading text-base leading-relaxed sm:text-lg">{term.definition}</p>
          </div>
        </div>
      </button>

      <div className="mt-4 flex items-center justify-between gap-3">
        <Button variant="outline" size="icon" onClick={() => goTo(index - 1)} aria-label="Fiche precedente">
          <ChevronLeft className="size-4" />
        </Button>
        <Button onClick={handleFlip} variant="secondary" className="flex-1">
          Retourner
        </Button>
        <Button variant="outline" size="icon" onClick={() => goTo(index + 1)} aria-label="Fiche suivante">
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
