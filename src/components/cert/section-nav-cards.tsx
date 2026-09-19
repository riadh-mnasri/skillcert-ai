"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, ListChecks, Timer, ChevronRight } from "lucide-react";
import type { Certification } from "@/content/types";
import { useCertProgress } from "@/lib/use-progress";

export function SectionNavCards({ cert }: { cert: Certification }) {
  const progress = useCertProgress(cert.slug);
  const lastAttempt = progress.examAttempts[0];

  const cards = [
    {
      href: `/certifications/${cert.slug}/cours`,
      icon: BookOpen,
      title: "Cours",
      detail: `${progress.modulesRead.length}/${cert.modules.length} modules lus`,
    },
    {
      href: `/certifications/${cert.slug}/fiches`,
      icon: ListChecks,
      title: "Fiches de revision",
      detail: `${cert.glossary.length} termes a memoriser`,
    },
    {
      href: `/certifications/${cert.slug}/qcm`,
      icon: GraduationCap,
      title: "QCM par domaine",
      detail: `${cert.quizBank.length} questions dans la banque`,
    },
    {
      href: `/certifications/${cert.slug}/examen-blanc`,
      icon: Timer,
      title: "Examen blanc",
      detail: lastAttempt ? `Dernier score : ${lastAttempt.scorePercent}%` : "Simulation chronometree",
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group flex items-center gap-3.5 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <card.icon className="size-5" />
          </span>
          <div className="flex-1">
            <p className="font-heading text-sm font-semibold">{card.title}</p>
            <p className="text-xs text-muted-foreground">{card.detail}</p>
          </div>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ))}
    </div>
  );
}
