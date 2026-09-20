"use client";

import Link from "next/link";
import { getCertification } from "@/content";
import { useLanguage } from "@/components/site/language-provider";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { QuizRunnerClient } from "@/components/quiz/quiz-runner-client";
import { cn } from "@/lib/utils";

export function QuizContent({ slug, activeDomainId }: { slug: string; activeDomainId?: string }) {
  const { t, lang } = useLanguage();
  const cert = getCertification(slug, lang);
  if (!cert) return null;

  const activeDomain = cert.domains.find((d) => d.id === activeDomainId);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader
        cert={cert}
        title={t("sectionNav", "quiz")}
        description={t("pageIntros", "quizDescription")}
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/certifications/${cert.slug}/qcm`}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            !activeDomain ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          {t("sectionNav", "allDomains")} ({cert.quizBank.length})
        </Link>
        {cert.domains.map((domain) => {
          const count = cert.quizBank.filter((q) => q.domainId === domain.id).length;
          return (
            <Link
              key={domain.id}
              href={`/certifications/${cert.slug}/qcm?domaine=${domain.id}`}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium",
                activeDomain?.id === domain.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/60",
              )}
            >
              {domain.title} ({count})
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <QuizRunnerClient
          key={activeDomain?.id ?? "all"}
          cert={cert}
          domainId={activeDomain?.id}
          domainTitle={activeDomain?.title}
        />
      </div>
    </div>
  );
}
