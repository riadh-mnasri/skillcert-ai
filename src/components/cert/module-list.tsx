"use client";

import Link from "next/link";
import { Check, Clock3 } from "lucide-react";
import type { Certification } from "@/content/types";
import { useCertProgress } from "@/lib/use-progress";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function ModuleList({ cert }: { cert: Certification }) {
  const progress = useCertProgress(cert.slug);
  const { t } = useLanguage();

  return (
    <ol className="space-y-3">
      {cert.modules.map((courseModule, i) => {
        const domain = cert.domains.find((d) => d.id === courseModule.domainId);
        const isRead = progress.modulesRead.includes(courseModule.slug);
        return (
          <li key={courseModule.slug}>
            <Link
              href={`/certifications/${cert.slug}/cours/${courseModule.slug}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold",
                  isRead ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground",
                )}
              >
                {isRead ? <Check className="size-4" /> : i + 1}
              </span>
              <div className="min-w-0 flex-1">
                {domain && (
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {domain.title}
                  </p>
                )}
                <p className="truncate font-heading text-sm font-semibold sm:text-base">
                  {courseModule.title}
                </p>
                <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{courseModule.summary}</p>
              </div>
              <span className="hidden shrink-0 items-center gap-1 text-xs text-muted-foreground sm:flex">
                <Clock3 className="size-3.5" />
                {courseModule.readMinutes} {t("cert", "min")}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
