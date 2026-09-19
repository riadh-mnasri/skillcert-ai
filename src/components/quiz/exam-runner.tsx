"use client";

import * as React from "react";
import Link from "next/link";
import { Flag, RotateCcw, Timer } from "lucide-react";
import type { Certification } from "@/content/types";
import { buildMockExam, scoreExam } from "@/lib/exam";
import { recordExamAttempt } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const PASS_THRESHOLD_PERCENT = 70;

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function createSession(cert: Certification) {
  const questions = buildMockExam(cert);
  const proportional = Math.round(
    cert.format.durationMinutes * (questions.length / cert.format.questionCount) * 60,
  );
  return { questions, durationSeconds: Math.max(proportional, 15 * 60) };
}

export function ExamRunner({ cert }: { cert: Certification }) {
  const [session, setSession] = React.useState(() => createSession(cert));
  const { questions } = session;

  const [phase, setPhase] = React.useState<"running" | "result">("running");
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [flagged, setFlagged] = React.useState<Set<string>>(new Set());
  const [secondsLeft, setSecondsLeft] = React.useState(() => session.durationSeconds);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [result, setResult] = React.useState<ReturnType<typeof scoreExam> | null>(null);

  const submit = React.useCallback(() => {
    const computed = scoreExam(cert, questions, answers);
    setResult(computed);
    setPhase("result");
    setConfirmOpen(false);
    recordExamAttempt(cert.slug, {
      id: `${cert.slug}-${Date.now()}`,
      date: new Date().toISOString(),
      scorePercent: computed.scorePercent,
      passed: computed.scorePercent >= PASS_THRESHOLD_PERCENT,
      correctCount: computed.correctCount,
      totalCount: computed.totalCount,
      domainBreakdown: computed.domainBreakdown.map((d) => ({
        domainId: d.domainId,
        correct: d.correct,
        total: d.total,
      })),
    });
  }, [cert, questions, answers]);

  // Minuteur : decompte une fois par seconde tant que l'examen est en cours.
  React.useEffect(() => {
    if (phase !== "running") return;
    const timeout = setTimeout(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(timeout);
  }, [phase, secondsLeft]);

  // Transition automatique vers le bilan quand le temps est ecoule : la
  // seule facon de reagir au franchissement du seuil du minuteur.
  React.useEffect(() => {
    if (phase !== "running" || secondsLeft > 0) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fin de minuteur : transition d'etat necessaire vers le bilan
    submit();
  }, [phase, secondsLeft, submit]);

  function restart() {
    const next = createSession(cert);
    setSession(next);
    setSecondsLeft(next.durationSeconds);
    setPhase("running");
    setIndex(0);
    setAnswers({});
    setFlagged(new Set());
    setResult(null);
    setConfirmOpen(false);
  }

  if (phase === "result" && result) {
    const passed = result.scorePercent >= PASS_THRESHOLD_PERCENT;
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 text-center sm:p-8">
          <p
            className={cn(
              "font-heading text-5xl font-semibold",
              passed ? "text-primary" : "text-destructive",
            )}
          >
            {result.scorePercent}%
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {result.correctCount} bonnes reponses sur {result.totalCount}
          </p>
          <p
            className={cn(
              "mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
              passed ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive",
            )}
          >
            {passed ? "Niveau atteint (seuil indicatif 70%)" : "Sous le seuil indicatif de 70%"}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Score indicatif base sur cet examen blanc. Le format et le seuil de reussite reels sont :{" "}
            {cert.format.passingScore}.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={restart}>
              <RotateCcw className="size-4" />
              Refaire un examen blanc
            </Button>
            <Button variant="outline" nativeButton={false} render={<Link href={`/certifications/${cert.slug}`} />}>
              Retour a la certification
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-heading text-lg font-semibold">Resultat par domaine</h2>
          {result.domainBreakdown.map((d) => {
            const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
            return (
              <div key={d.domainId} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{d.domainTitle}</span>
                  <span className="text-muted-foreground">
                    {d.correct}/{d.total} · {pct}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", pct >= 70 ? "bg-primary" : "bg-gold")}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const current = questions[index];
  const answeredCount = Object.keys(answers).length;
  const lowTime = secondsLeft <= 120;

  return (
    <div className="space-y-4">
      <div className="sticky top-16 z-10 -mx-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            {answeredCount}/{questions.length} repondues
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-sm font-semibold",
              lowTime ? "bg-destructive/10 text-destructive" : "bg-secondary text-secondary-foreground",
            )}
          >
            <Timer className="size-3.5" />
            {formatTime(secondsLeft)}
          </span>
        </div>
        <div className="mt-2.5 flex gap-1 overflow-x-auto pb-1">
          {questions.map((q, i) => {
            const isAnswered = answers[q.id] !== undefined;
            const isFlagged = flagged.has(q.id);
            const isCurrent = i === index;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md border font-mono text-xs font-medium",
                  isCurrent && "border-primary ring-2 ring-primary/30",
                  !isCurrent && isAnswered && "border-primary/40 bg-primary/10",
                  !isCurrent && !isAnswered && "border-border bg-secondary/50",
                  isFlagged && "border-gold",
                )}
                aria-label={`Question ${i + 1}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">
            Question {index + 1} / {questions.length}
          </span>
          <button
            type="button"
            onClick={() =>
              setFlagged((prev) => {
                const next = new Set(prev);
                if (next.has(current.id)) {
                  next.delete(current.id);
                } else {
                  next.add(current.id);
                }
                return next;
              })
            }
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
              flagged.has(current.id)
                ? "border-gold bg-gold/20 text-gold-foreground"
                : "border-border text-muted-foreground hover:border-gold",
            )}
          >
            <Flag className="size-3.5" />
            {flagged.has(current.id) ? "Marquee" : "Marquer"}
          </button>
        </div>

        <p className="mt-3 font-heading text-base font-semibold leading-snug sm:text-lg">
          {current.question}
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          {current.options.map((option, optionIndex) => {
            const isSelected = answers[current.id] === optionIndex;
            return (
              <button
                key={optionIndex}
                type="button"
                onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: optionIndex }))}
                className={cn(
                  "flex min-h-11 items-center gap-2.5 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/60 hover:bg-accent",
                )}
              >
                <span
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded-full border",
                    isSelected ? "border-primary bg-primary" : "border-border",
                  )}
                />
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Button variant="outline" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
            Precedent
          </Button>
          {index + 1 === questions.length ? (
            <Button onClick={() => setConfirmOpen(true)}>Terminer l&apos;examen</Button>
          ) : (
            <Button onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}>Suivant</Button>
          )}
        </div>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terminer l&apos;examen blanc ?</DialogTitle>
            <DialogDescription>
              {answeredCount === questions.length
                ? "Toutes les questions ont une reponse."
                : `${questions.length - answeredCount} question(s) sans reponse. Elles seront comptees comme incorrectes.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Continuer l&apos;examen
            </Button>
            <Button onClick={submit}>Valider et voir le score</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
