"use client";

import Link from "next/link";
import { Clock3, DollarSign, ExternalLink, ListChecks, Monitor, Target } from "lucide-react";
import type { Certification } from "@/content/types";
import { ProviderBadge } from "@/components/cert/provider-badge";
import { DomainOverview } from "@/components/cert/domain-overview";
import { SectionNavCards } from "@/components/cert/section-nav-cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-provider";
import { translateLevel } from "@/lib/i18n";
import { getCertification } from "@/content";

const chipConfig = (cert: Certification) => [
  { icon: ListChecks, label: `${cert.format.questionCount}`, unitKey: "questions" as const },
  { icon: Clock3, label: `${cert.format.durationMinutes}`, unitKey: "minutes" as const },
  { icon: Target, label: cert.format.passingScore, unitKey: null },
  { icon: DollarSign, label: cert.format.price, unitKey: null },
  { icon: Monitor, label: cert.format.deliveryMode, unitKey: null },
];

export function CertDetailContent({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const cert = getCertification(slug, lang);
  if (!cert) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap items-center gap-2">
        <ProviderBadge providerId={cert.providerId} />
        <Badge variant="outline">{translateLevel(cert.level, lang)}</Badge>
        {!cert.format.isOfficialCertification && (
          <Badge variant="outline" className="text-muted-foreground">
            {t("cert", "badgeNotExam")}
          </Badge>
        )}
      </div>

      <h1 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">{cert.name}</h1>
      <p className="mt-1 font-mono text-sm text-muted-foreground">{cert.code}</p>
      <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">{cert.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {chipConfig(cert).map((chip) => (
          <span
            key={chip.unitKey ?? chip.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80"
          >
            <chip.icon className="size-3.5 text-primary" />
            {chip.label} {chip.unitKey ? t("cert", chip.unitKey) : ""}
          </span>
        ))}
      </div>

      {cert.officialUrl && (
        <a
          href={cert.officialUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          {lang === "fr" ? "Voir la page officielle" : "View the official page"}
          <ExternalLink className="size-3.5" />
        </a>
      )}

      <div className="mt-8">
        <SectionNavCards cert={cert} />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-heading text-xl font-semibold">
            {lang === "fr" ? "Domaines d'examen" : "Exam domains"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {lang === "fr"
              ? "Pondération officielle indicative et votre maîtrise mesurée via le QCM."
              : "Indicative official weighting and your mastery as measured by the quiz."}
          </p>
          <div className="mt-5">
            <DomainOverview cert={cert} />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold">
            {lang === "fr" ? "Plan de révision suggéré" : "Suggested study plan"}
          </h2>
          <ol className="mt-5 space-y-4">
            {cert.studyPlan.map((step, i) => (
              <li key={step.label} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button
            nativeButton={false}
            render={<Link href={`/certifications/${cert.slug}/cours`} />}
            className="mt-6 w-full"
          >
            {lang === "fr" ? "Commencer le premier module" : "Start the first module"}
          </Button>
        </div>
      </div>
    </div>
  );
}
