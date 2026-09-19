"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, Timer } from "lucide-react";
import { certifications } from "@/content";
import { ProviderBadge } from "@/components/cert/provider-badge";
import { useAllProgress } from "@/lib/use-progress";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function ProgressionDashboard() {
  const allProgress = useAllProgress();
  const { t } = useLanguage();

  const started = certifications.filter((cert) => {
    const p = allProgress[cert.slug];
    return p && (p.modulesRead.length > 0 || Object.keys(p.quizStats).length > 0 || p.examAttempts.length > 0);
  });

  if (started.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center">
        <p className="text-sm text-muted-foreground">{t("progression", "empty")}</p>
        <Link
          href="/certifications"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          {t("progression", "browse")}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {started.map((cert) => {
        const p = allProgress[cert.slug]!;
        const moduleRatio = cert.modules.length > 0 ? p.modulesRead.length / cert.modules.length : 0;
        const domainStats = Object.values(p.quizStats);
        const totalAttempts = domainStats.reduce((s, d) => s + d.attempts, 0);
        const totalCorrect = domainStats.reduce((s, d) => s + d.correct, 0);
        const masteryPercent = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null;
        const lastExam = p.examAttempts[0];

        return (
          <div key={cert.slug} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <ProviderBadge providerId={cert.providerId} />
                <Link
                  href={`/certifications/${cert.slug}`}
                  className="mt-2 block font-heading text-base font-semibold hover:text-primary sm:text-lg"
                >
                  {cert.name}
                </Link>
              </div>
              <Link
                href={`/certifications/${cert.slug}/cours`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {t("progression", "continue")}
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-secondary/50 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BookOpen className="size-3.5" />
                  {t("progression", "courses")}
                </div>
                <p className="mt-1 font-heading text-lg font-semibold">
                  {p.modulesRead.length}/{cert.modules.length}
                </p>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${moduleRatio * 100}%` }} />
                </div>
              </div>

              <div className="rounded-lg bg-secondary/50 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="size-3.5" />
                  {t("progression", "quiz")}
                </div>
                <p className="mt-1 font-heading text-lg font-semibold">
                  {masteryPercent !== null ? `${masteryPercent}%` : "—"}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {totalAttempts} {t("progression", "answersGiven")}
                </p>
              </div>

              <div className="rounded-lg bg-secondary/50 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Timer className="size-3.5" />
                  {t("progression", "mockExam")}
                </div>
                <p
                  className={cn(
                    "mt-1 font-heading text-lg font-semibold",
                    lastExam && lastExam.passed ? "text-primary" : "",
                  )}
                >
                  {lastExam ? `${lastExam.scorePercent}%` : t("progression", "notAttempted")}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {p.examAttempts.length}{" "}
                  {p.examAttempts.length > 1 ? t("progression", "attempts") : t("progression", "attempt")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
