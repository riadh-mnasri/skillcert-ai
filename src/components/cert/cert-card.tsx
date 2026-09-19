"use client";

import Link from "next/link";
import { BookOpen, Clock3, ListChecks, ShieldCheck } from "lucide-react";
import type { Certification } from "@/content/types";
import { ProviderBadge } from "@/components/cert/provider-badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/site/language-provider";
import { translateLevel } from "@/lib/i18n";

export function CertCard({ cert }: { cert: Certification }) {
  const { t, lang } = useLanguage();

  return (
    <Link href={`/certifications/${cert.slug}`} className="group block h-full">
      <Card className="h-full gap-4 border-border/90 py-5 transition-all group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-md">
        <CardHeader className="gap-2 px-5">
          <div className="flex items-center justify-between gap-2">
            <ProviderBadge providerId={cert.providerId} />
            {!cert.format.isOfficialCertification && (
              <Badge variant="outline" className="text-[10px] text-muted-foreground">
                {t("cert", "badgeNotExam")}
              </Badge>
            )}
          </div>
          <h3 className="font-heading text-lg font-semibold leading-snug text-balance">
            {cert.name}
          </h3>
          <p className="text-sm text-muted-foreground">{cert.tagline}</p>
        </CardHeader>
        <CardContent className="px-5">
          <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-muted-foreground sm:grid-cols-4">
            <div className="flex items-center gap-1.5">
              <ListChecks className="size-3.5 text-primary" />
              <span>
                {cert.format.questionCount} {t("cert", "questions")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock3 className="size-3.5 text-primary" />
              <span>
                {cert.format.durationMinutes} {t("cert", "min")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="size-3.5 text-primary" />
              <span>
                {cert.modules.length} {t("cert", "modules")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>{translateLevel(cert.level, lang)}</span>
            </div>
          </dl>
        </CardContent>
      </Card>
    </Link>
  );
}
