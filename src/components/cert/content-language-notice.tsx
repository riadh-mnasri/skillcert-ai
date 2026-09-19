"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/site/language-provider";

export function ContentLanguageNotice() {
  const { lang, t } = useLanguage();

  if (lang !== "en") return null;

  return (
    <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-dashed border-border bg-secondary/40 p-3 text-sm text-muted-foreground">
      <Languages className="mt-0.5 size-4 shrink-0 text-primary" />
      <p>{t("cert", "contentNotice")}</p>
    </div>
  );
}
