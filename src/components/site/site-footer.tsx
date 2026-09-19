"use client";

import Link from "next/link";
import { Seal } from "@/components/site/seal";
import { useLanguage } from "@/components/site/language-provider";
import { providerList } from "@/content/providers";
import { certifications } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/80 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Seal className="h-7 w-8" />
              <span className="font-heading text-base font-semibold">SkillCert AI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("footer", "tagline")}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("footer", "providers")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {providerList.map((provider) => (
                <li key={provider.id}>
                  <Link
                    href={`/certifications?fournisseur=${provider.id}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {provider.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("footer", "certificationsHeading")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {certifications.slice(0, 5).map((cert) => (
                <li key={cert.slug}>
                  <Link
                    href={`/certifications/${cert.slug}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {cert.code}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("footer", "resources")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/certifications" className="text-foreground/80 hover:text-primary">
                  {t("footer", "allCertifications")}
                </Link>
              </li>
              <li>
                <Link href="/methode" className="text-foreground/80 hover:text-primary">
                  {t("footer", "ourMethod")}
                </Link>
              </li>
              <li>
                <Link href="/progression" className="text-foreground/80 hover:text-primary">
                  {t("footer", "myProgress")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Riadh MNASRI. {t("footer", "rights")}
          </p>
          <p>{t("footer", "disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
