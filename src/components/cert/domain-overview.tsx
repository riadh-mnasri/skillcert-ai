"use client";

import type { Certification } from "@/content/types";
import { useCertProgress } from "@/lib/use-progress";
import { DomainBar } from "@/components/cert/domain-bar";

export function DomainOverview({ cert }: { cert: Certification }) {
  const progress = useCertProgress(cert.slug);

  return (
    <div className="space-y-3">
      {cert.domains.map((domain, i) => (
        <DomainBar key={domain.id} domain={domain} stat={progress.quizStats[domain.id]} index={i} />
      ))}
    </div>
  );
}
