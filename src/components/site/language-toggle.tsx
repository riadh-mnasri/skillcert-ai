"use client";

import { useLanguage } from "@/components/site/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Switch language / Changer de langue"
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className="w-11 shrink-0 font-mono text-xs font-semibold"
    >
      {lang === "fr" ? "EN" : "FR"}
    </Button>
  );
}
