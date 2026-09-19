"use client";

import { useLanguage } from "@/components/site/language-provider";
import { ProgressionDashboard } from "@/components/cert/progression-dashboard";

export function ProgressionContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{t("progression", "title")}</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">{t("progression", "subtitle")}</p>
      <div className="mt-8">
        <ProgressionDashboard />
      </div>
    </div>
  );
}
