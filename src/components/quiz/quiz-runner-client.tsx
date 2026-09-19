"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * L'ordre des questions est tire au hasard a l'initialisation : on desactive
 * le rendu serveur pour eviter tout ecart d'hydratation entre le HTML genere
 * et le premier rendu client.
 */
export const QuizRunnerClient = dynamic(
  () => import("@/components/quiz/quiz-runner").then((m) => m.QuizRunner),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-4">
        <Skeleton className="h-1.5 w-full" />
        <Skeleton className="h-56 w-full rounded-xl" />
      </div>
    ),
  },
);
