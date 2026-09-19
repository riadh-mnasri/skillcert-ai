"use client";

import Link from "next/link";
import type { Certification, ProviderId } from "@/content/types";
import { providerList } from "@/content/providers";
import { CertCard } from "@/components/cert/cert-card";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function CertificationsBrowser({
  certifications,
  activeFilter,
}: {
  certifications: Certification[];
  activeFilter?: ProviderId;
}) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">{t("browse", "title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("browse", "subtitle")}</p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        <Link
          href="/certifications"
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            !activeFilter ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60",
          )}
        >
          {t("browse", "all")}
        </Link>
        {providerList.map((provider) => (
          <Link
            key={provider.id}
            href={`/certifications?fournisseur=${provider.id}`}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              activeFilter === provider.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary/60",
            )}
          >
            {provider.shortName}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertCard key={cert.slug} cert={cert} />
        ))}
      </div>

      {certifications.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">{t("browse", "empty")}</p>
      )}
    </div>
  );
}
