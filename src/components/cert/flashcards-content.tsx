"use client";

import Link from "next/link";
import { getCertification } from "@/content";
import { useLanguage } from "@/components/site/language-provider";
import { CertSectionHeader } from "@/components/cert/cert-section-header";
import { FlashcardDeck } from "@/components/quiz/flashcard-deck";
import { cn } from "@/lib/utils";

export function FlashcardsContent({ slug, activeDomainId }: { slug: string; activeDomainId?: string }) {
  const { t, lang } = useLanguage();
  const cert = getCertification(slug, lang);
  if (!cert) return null;

  const activeDomain = cert.domains.some((d) => d.id === activeDomainId) ? activeDomainId : undefined;
  const description = t("pageIntros", "flashcardsDescription").replace("{count}", String(cert.glossary.length));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <CertSectionHeader cert={cert} title={t("sectionNav", "flashcards")} description={description} />

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/certifications/${cert.slug}/fiches`}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            !activeDomain ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          {t("sectionNav", "allDomains")}
        </Link>
        {cert.domains.map((domain) => (
          <Link
            key={domain.id}
            href={`/certifications/${cert.slug}/fiches?domaine=${domain.id}`}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium",
              activeDomain === domain.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary/60",
            )}
          >
            {domain.title}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <FlashcardDeck key={activeDomain ?? "all"} cert={cert} domainId={activeDomain} />
      </div>
    </div>
  );
}
