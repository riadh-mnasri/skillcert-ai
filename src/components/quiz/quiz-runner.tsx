"use client";

import * as React from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import type { Certification, QuizQuestion } from "@/content/types";
import { recordQuizAnswer } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const difficultyLabel: Record<QuizQuestion["difficulty"], string> = {
  facile: "Facile",
  moyen: "Moyen",
  difficile: "Difficile",
};

export function QuizRunner({
  cert,
  domainId,
  domainTitle,
}: {
  cert: Certification;
  domainId?: string;
  domainTitle?: string;
}) {
  const pool = domainId ? cert.quizBank.filter((q) => q.domainId === domainId) : cert.quizBank;

  const [questions, setQuestions] = React.useState(() => shuffle(pool));
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [score, setScore] = React.useState({ correct: 0, total: 0 });

  const current = questions[index];
  const finished = index >= questions.length;

  function handleSelect(optionIndex: number) {
    if (selected !== null || !current) return;
    setSelected(optionIndex);
    const correct = optionIndex === current.correctIndex;
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    recordQuizAnswer(cert.slug, current.domainId, correct);
  }

  function handleNext() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  function handleRestart() {
    setQuestions(shuffle(pool));
    setIndex(0);
    setSelected(null);
    setScore({ correct: 0, total: 0 });
  }

  if (questions.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
        Aucune question disponible pour ce domaine pour le moment.
      </p>
    );
  }

  if (finished) {
    const percent = Math.round((score.correct / score.total) * 100);
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center sm:p-8">
        <p className="font-heading text-4xl font-semibold text-primary">{percent}%</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {score.correct} bonnes reponses sur {score.total}
          {domainTitle ? ` — domaine "${domainTitle}"` : ""}
        </p>
        <Button onClick={handleRestart} className="mt-5">
          <RotateCcw className="size-4" />
          Recommencer cette serie
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Question {index + 1} / {questions.length}
        </span>
        <span>
          Score en cours : {score.correct}/{score.total}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <Badge variant="secondary" className="mb-3 text-[10px] uppercase tracking-wide">
          {difficultyLabel[current.difficulty]}
        </Badge>
        <p className="font-heading text-base font-semibold leading-snug sm:text-lg">
          {current.question}
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          {current.options.map((option, optionIndex) => {
            const isSelected = selected === optionIndex;
            const isCorrectOption = optionIndex === current.correctIndex;
            const showState = selected !== null;

            return (
              <button
                key={optionIndex}
                type="button"
                onClick={() => handleSelect(optionIndex)}
                disabled={selected !== null}
                className={cn(
                  "flex min-h-11 items-center gap-2.5 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                  !showState && "border-border hover:border-primary/60 hover:bg-accent",
                  showState && isCorrectOption && "border-primary bg-primary/10",
                  showState && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                  showState && !isSelected && !isCorrectOption && "border-border opacity-60",
                )}
              >
                {showState && isCorrectOption && <CheckCircle2 className="size-4 shrink-0 text-primary" />}
                {showState && isSelected && !isCorrectOption && (
                  <XCircle className="size-4 shrink-0 text-destructive" />
                )}
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-4 rounded-lg bg-secondary/60 p-4 text-sm">
            <p className="font-medium">
              {selected === current.correctIndex ? "Bonne reponse." : "Reponse incorrecte."}
            </p>
            <p className="mt-1 text-muted-foreground">{current.explanation}</p>
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <Button onClick={handleNext} disabled={selected === null}>
            {index + 1 === questions.length ? "Voir le score" : "Question suivante"}
          </Button>
        </div>
      </div>
    </div>
  );
}
