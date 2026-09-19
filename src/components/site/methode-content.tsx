"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, ListChecks, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-provider";

export function MethodeContent() {
  const { t } = useLanguage();

  const steps = [
    { icon: BookOpen, title: t("methode", "step1Title"), body: t("methode", "step1Body") },
    { icon: ListChecks, title: t("methode", "step2Title"), body: t("methode", "step2Body") },
    { icon: GraduationCap, title: t("methode", "step3Title"), body: t("methode", "step3Body") },
    { icon: Timer, title: t("methode", "step4Title"), body: t("methode", "step4Body") },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{t("methode", "title")}</h1>
      <p className="mt-4 text-pretty text-muted-foreground">{t("methode", "intro")}</p>

      <div className="mt-10 space-y-6">
        {steps.map((step) => (
          <div key={step.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <step.icon className="size-5" />
            </span>
            <div>
              <h2 className="font-heading text-base font-semibold sm:text-lg">{step.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-border p-5">
        <h2 className="font-heading text-base font-semibold">{t("methode", "aboutTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("methode", "aboutBody")}</p>
      </div>

      <Button nativeButton={false} render={<Link href="/certifications" />} className="mt-8">
        {t("methode", "cta")}
      </Button>
    </div>
  );
}
