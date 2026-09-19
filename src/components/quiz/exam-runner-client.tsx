"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * L'examen blanc compose ses questions au hasard des le premier rendu : on
 * desactive le rendu serveur pour eviter tout ecart d'hydratation.
 */
export const ExamRunnerClient = dynamic(
  () => import("@/components/quiz/exam-runner").then((m) => m.ExamRunner),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    ),
  },
);
